"use client";

import {
  ExternalLinkIcon,
  LoaderCircleIcon,
  MapPinnedIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslations } from "@/contexts/language-context";
import {
  getScheduleRoomDirectionsUrl,
  getScheduleRoomLocation,
  getScheduleRoomMapEmbedUrl,
} from "@/lib/schedule-rooms";

type ScheduleRoomDirectionsDialogProps = {
  room: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type GeolocationState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ready"; lat: number; lng: number }
  | { status: "denied" | "unavailable"; message: string };

function ScheduleRoomDirectionsDialog({
  room,
  open,
  onOpenChange,
}: ScheduleRoomDirectionsDialogProps) {
  const { t } = useTranslations();
  const [geo, setGeo] = useState<GeolocationState>({ status: "idle" });

  const location = useMemo(
    () => (room ? getScheduleRoomLocation(room) : undefined),
    [room],
  );

  useEffect(() => {
    if (!open || !location) {
      setGeo({ status: "idle" });
      return;
    }

    if (!navigator.geolocation) {
      setGeo({
        status: "unavailable",
        message: t("blocks.scheduleUi.roomMap.geoUnavailable"),
      });
      return;
    }

    let cancelled = false;
    setGeo({ status: "loading" });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (cancelled) return;
        setGeo({
          status: "ready",
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        if (cancelled) return;
        setGeo({
          status:
            error.code === error.PERMISSION_DENIED ? "denied" : "unavailable",
          message:
            error.code === error.PERMISSION_DENIED
              ? t("blocks.scheduleUi.roomMap.geoDenied")
              : t("blocks.scheduleUi.roomMap.geoUnavailable"),
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 12_000,
        maximumAge: 60_000,
      },
    );

    return () => {
      cancelled = true;
    };
  }, [location, open, t]);

  if (!location) {
    return null;
  }

  const directionsUrl = getScheduleRoomDirectionsUrl(
    location,
    geo.status === "ready" ? { lat: geo.lat, lng: geo.lng } : undefined,
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl gap-4 overflow-hidden p-0 sm:max-w-2xl">
        <div className="space-y-4 p-6 pb-0">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-left">
              <MapPinnedIcon className="text-primary size-5 shrink-0" />
              {location.name}
            </DialogTitle>
            <DialogDescription className="text-left">
              {t("blocks.scheduleUi.roomMap.description")}
            </DialogDescription>
          </DialogHeader>

          {geo.status === "loading" || geo.status === "idle" ? (
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              <LoaderCircleIcon className="size-4 animate-spin" />
              {t("blocks.scheduleUi.roomMap.locating")}
            </p>
          ) : geo.status === "ready" ? (
            <p className="text-sm text-emerald-700 dark:text-emerald-400">
              {t("blocks.scheduleUi.roomMap.located")}
            </p>
          ) : (
            <p className="text-muted-foreground text-sm">{geo.message}</p>
          )}
        </div>

        <div className="bg-muted relative aspect-[16/10] w-full overflow-hidden border-y">
          <iframe
            title={`${t("blocks.scheduleUi.roomMap.mapTitle")}: ${location.name}`}
            src={getScheduleRoomMapEmbedUrl(location)}
            className="absolute inset-0 size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <DialogFooter className="gap-2 p-6 pt-0 sm:justify-between">
          <p className="text-muted-foreground text-left text-xs sm:max-w-xs">
            {t("blocks.scheduleUi.roomMap.hint")}
          </p>
          <Button asChild>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
              {t("blocks.scheduleUi.roomMap.openDirections")}
              <ExternalLinkIcon className="size-4" />
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ScheduleRoomDirectionsDialog;

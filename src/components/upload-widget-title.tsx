import { UploadCloud } from "lucide-react"
import { usePendingUploads } from "../store/uploads";

export function UploadWidgetTitle() {

    const { isThereAnyPendingUploads, globalPercentage } = usePendingUploads();
    return (
        <div className="flex items-center gap-1.5 text-sm font-medium">
            <UploadCloud className="size-4 text-zinc-400" strokeWidth={1.5} />
            {isThereAnyPendingUploads ? (
                <span className="flex items-baseline gap-1">
                    Enviando{" "}
                    <span className="text-xs text-zinc-400 tabular-nums">
                        {globalPercentage}%
                    </span>
                </span>
            ) : (
                <span>Carregar Arquivos</span>
            )}

        </div>
    )
}
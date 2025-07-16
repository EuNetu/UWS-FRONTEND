import { UploadCloud } from "lucide-react"

export function UploadWidgetTitle(){

    const isThereAnyPendingUpload = true;
    const uploadGlobalPercentage = 70;

    return(
        <div className="flex items-center gap-1.5 text-sm font-medium">
            <UploadCloud className="size-4" strokeWidth={1.5} />
                {isThereAnyPendingUpload ? (
                    <span>
                        Enviando
                        <span className="text-xs text-zinc-400 tabular-nums"> {uploadGlobalPercentage}%</span>
                    </span>
                ) : (
                    <span>Carregar Arquivos</span>
                )}
            
        </div>
    )
}
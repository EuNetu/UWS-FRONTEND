import { UploadWidgetUploadItem } from "./upload-widget-upload-item";

export function UploadWidgetUploadList() {
    const isUploadListEmpty = false;
    return (
        <div className="px-3 flex flex-col gap-3">
            <span className="text-xs font-medium">
                Arquivos carregados{' '}
                <span className="text-zinc-400">(3)</span>
            </span> 
            {isUploadListEmpty ? (
                <span className="text-xs text-zinc-400">Nenhum arquivo carregado</span>
            ) : (
                    <div className = "flex flex-col gap-2">
                        <UploadWidgetUploadItem />
                        <UploadWidgetUploadItem />
                    </div>
            )}
        </div>
    )
}
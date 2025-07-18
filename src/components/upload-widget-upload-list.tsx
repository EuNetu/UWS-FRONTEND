import { UploadWidgetUploadItem } from "./upload-widget-upload-item";

export function UploadWidgetUploadList() {
    return (
        <div className="px-3 flex flex-col gap-3">
            <span className="text-xs font-medium">
                Arquivos carregados{' '}
                <span className="text-zinc-400">(3)</span>
            </span> 
            <div className="flex flex-col gap-2">
                <UploadWidgetUploadItem />
                <UploadWidgetUploadItem />
            </div>
        </div>
    )
}
import { useDropzone } from "react-dropzone"

export function UploadWidgetDropzone() {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        multiple: true,
        accept: {
            'image/jpeg': [],
            'image/png': [],
        },
        onDrop(acceptedFiles) {
            console.log(acceptedFiles)
        }
    })
    return (
        <div className="px-3 flex flex-col gap-3">

            <div 
                data-dragging={isDragActive}
                className="cursor-pointer text-zinc-400 bg-black/20 p-5 rounded-lg border border-zinc-700 border-dashed h-32 flex flex-col items-center justify-center gap-1 hover:border-zinc-600 transition-colors data-[dragging=true]:bg-indigo-500/10 data-[dragging=true]:border-indigo-500 data-[dragging=true]:text-indigo-400"
                {...getRootProps()}
            >
                <input type="file"  {...getInputProps()} />

                <span className="text-xs">Arraste e solte suas imagens aqui ou</span>
                <span className="text-xs underline"> click para abrir e selecionar um arquivo </span>

                <span className="text-xs text-zinc-400">Só é suportado arquivos JPEG e PNG</span>
            </div>
        </div>
    )
}
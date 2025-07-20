import { useDropzone } from "react-dropzone"
import CircularProgressBar from "./ui/circular-progress-bar";
import { motion } from "motion/react";
import { usePendingUploads, useUploads } from "../store/uploads";

export function UploadWidgetDropzone() {
    const amountOfUploads  = useUploads(store => store.uploads.size);
    const addUploads  = useUploads(store => store.addUploads);

    const { isThereAnyPendingUploads, globalPercentage } = usePendingUploads();

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        multiple: true,
        accept: {
            'image/jpeg': [],
            'image/png': [],
        },
        onDrop(acceptedFiles) {
            addUploads(acceptedFiles)
        }
    })
    return (
        <motion.div 
            className="px-3 flex flex-col gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >

            <div 
                data-dragging={isDragActive}
                className="cursor-pointer text-zinc-400 bg-black/20 p-5 rounded-lg border border-zinc-700 border-dashed h-32 flex flex-col items-center justify-center gap-1 hover:border-zinc-600 transition-colors data-[dragging=true]:bg-indigo-500/10 data-[dragging=true]:border-indigo-500 data-[dragging=true]:text-indigo-400"
                {...getRootProps()}
            >
                <input type="file"  {...getInputProps()} />

                {isThereAnyPendingUploads ? (
                    <div>
                        <CircularProgressBar progress={globalPercentage} size={56} strokeWidth={4}/>
                        <span>Enviando {amountOfUploads} arquivos...</span>
                    </div>
                ) : (
                    <>
                        <span className = "text-xs">Arraste e solte suas imagens aqui ou</span>
                        <span className="text-xs underline"> click para abrir e selecionar um arquivo </span>
                    </>
                )}

                <span className="text-xxs text-zinc-400">Suportado apenas arquivos JPEG e PNG</span>
            </div>
        </motion.div>
    )
}
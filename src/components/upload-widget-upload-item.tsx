import * as Progress from "@radix-ui/react-progress";
import { Download, ImageUp, Link2, RefreshCcw, X } from "lucide-react";
import { Button } from "./ui/button";

export function UploadWidgetUploadItem() {
    return (
        <div className="p-3 rounded-lg flex flex-col gap-3 shadow-shape-content bg-white/2 relative overflow-hidden">
            <div className="flex flex-col gap-1">
                <span className="text-xs font-medium flex items-center gap-1">
                    <ImageUp className="size-3 text-zinc-300" strokeWidth={1.5} />
                    <span>sreenshot.png</span>
                </span>

                <span className="text-xxs text-zinc-400 flex gap-1.5 items-center">
                    <span className="line-through">3MB</span>
                    <div className="size-1 rounded-full bg-zinc-700"/>
                    <span>
                        300KB
                        <span className="text-green-400 ml-1">
                            -94%
                        </span>
                    </span>
                    <div className="size-1 rounded-full bg-zinc-700" />
                    <span>45%</span>
                </span>
            </div>

            <Progress.Root className="bg-zinc-800 rounded-full h-1 overflow-hidden">
                <Progress.Indicator className="bg-indigo-500 h-1" style={{ width: '45%' }} />
            </Progress.Root>

            <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                <Button size="icon-sm" >
                    <Download strokeWidth={1.5} className="size-4" />
                    <span className="sr-only">Baixar imagem comprimida</span>
                </Button>
                <Button size="icon-sm" >
                    <Link2 strokeWidth={1.5} className="size-4" />
                    <span className="sr-only">Copiar link</span>
                </Button>
                <Button size="icon-sm" >
                    <RefreshCcw strokeWidth={1.5} className="size-4" />
                    <span className="sr-only">Recarregar arquivo</span>
                </Button>
                <Button size="icon-sm" >
                    <X strokeWidth={1.5} className="size-4" />
                    <span className="sr-only">Cancelar carregamento</span>
                </Button>
            </div>
        </div>
    )
}
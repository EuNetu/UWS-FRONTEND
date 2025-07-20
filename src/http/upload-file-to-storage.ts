import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

interface UploadFileToStorageParams {
    file: File;
}

interface UploadFileToStorageOpts {
    signal?: AbortSignal;
}

export async function uploadFileToStorage({ file }: UploadFileToStorageParams, opts?: UploadFileToStorageOpts) {
    const data = new FormData();
    data.append('file', file);

    const config: AxiosRequestConfig = {
        signal: opts?.signal,
    };

    const response = await axios.post<{ url: string }>('http://localhost:3333/uploads', data, config);

    return { url: response.data.url };
}
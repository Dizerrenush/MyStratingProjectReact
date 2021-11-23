
export async function postData(url = '', data = {}, options: {signal?: AbortSignal,timeout?: number} = {}): Promise<Response> {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        ...options
    });

    return response.json();
}
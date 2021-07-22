export interface InewState {
    post : {
        data : {
            userId: number
            id: number
            title: string
            body: string
        }[],
        error : string
    }
}
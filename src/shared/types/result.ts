export interface Success<T> {
    json(): import("../../modules/chats/types").Chat[] | PromiseLike<import("../../modules/chats/types").Chat[]>;
	status: "success";
	data: T;
}

export interface Error {
	status: "error";
	message?: string;
    code?: number
}

export type Result<S> = Success<S> | Error;

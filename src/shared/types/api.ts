export type SuccessResponse<T> = {
  status: "SUCCESS";
  message: string;
  data: T;
};

export type ErrorResponse = {
  status: "ERROR";
  message: string;
  data: null;
};

export type BaseResponse<T> = SuccessResponse<T> | ErrorResponse;

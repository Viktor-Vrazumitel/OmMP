import { ERROR_INER } from "../type/type"

export const errorAction = (error)=>{
    return {
        type: ERROR_INER,
        payload:error
    }
}
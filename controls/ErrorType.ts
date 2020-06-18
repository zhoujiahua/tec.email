import { type } from "os"

type ErrorInfoType = {
    VM_NOT_CREATED: string;
    VM_NOT_TERMINATED: string;
    VM_NOT_STARTED: string;
    VM_NOT_STOPPED: string;
    VM_NOT_CHECKED: string;
}


enum errorType {
    VM_NOT_CREATED,
    VM_NOT_TERMINATED,
    VM_NOT_STARTED,
    VM_NOT_STOPPED,
    VM_NOT_CHECKED,
}


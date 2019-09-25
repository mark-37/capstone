export class RegisterModel {
    constructor(
        public username: string = '',
        public email: string = '',
        public password1: string = '',
        public password2: string = '',
        public pin: number = null,
        public tos: boolean = false
    ) {}
}
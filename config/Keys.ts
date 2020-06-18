type ReqTokenInfoType = {
    client_id: string;
    client_secret: string;
    grant_type: string;
    username: string;
    password: string;
}

type AdminUserType = {
    id_user: string;
    userName: string;
}

export const getTokenInfo: ReqTokenInfoType = {
    client_id: "TestClient",
    client_secret: "2c5da4eb07ef64ed25ceb2c18758cee4406d719f",
    grant_type: "password",
    username: "Shared.SuperAdmin0",
    password: "SharedSuperAdmin2019"
};

export const getAdminUser: AdminUserType = {
    id_user: '14999',//14995
    userName: 'Jerry'
}
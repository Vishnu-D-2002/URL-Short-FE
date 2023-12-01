import { instance } from "./instance";


const userInst = {
    signUp: async (user) => {
        try {
            console.log('Registering the User...');

            const res = await instance.post('/signup', user);

            if (res.data) {
                console.log('User Registered successfully ',res.data);
            }
            
        } catch (error) {
            console.log('Error While SigningUp',error);
        }
    }
}

export default userInst;
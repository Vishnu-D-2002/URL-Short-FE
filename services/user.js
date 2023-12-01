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
    },

    signIn: async (user) => {
        try {
            console.log('Signing in the User...');

            const res = await instance.post('/signin', user);

            if (res.data){ 
                console.log('User login successfull', res.data);
            }
        } catch (error) {
             console.log('Error While SigningIn',error);
        }
    }
}

export default userInst;
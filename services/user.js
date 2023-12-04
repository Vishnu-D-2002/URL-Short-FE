import { instance } from "./instance";


const userInst = {
    
    signUp: async (user) => {
        try {
            console.log('Registering the User...');

            const res = await instance.post('/signup', user);

            if (res.data) {
                console.log('User Registered successfully ', res.data);
            
                const email = res.data.newUser.email;
                
                const activationMail = await instance.post(`/${email}`, { email });
                if (activationMail) {
                    return console.log('Activation Mail Sent Successfull to your Mail');
                }
                else {
                    return console.log("Can't sent Activation Link");
                }
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
                
                sessionStorage.setItem('loggedInUser', JSON.stringify(res.data));

                return res.data;
            }

        }
        
        catch (error) {
       
            if (error.response) {
                const status = error.response.status;
                if (status === 404) {
                   return console.log('Password is wrong. Please check your password.');
                } else if (status === 400) {
                  return  console.log('Bad Request: ', error.response.data.error);
                } else {
                  return  console.log('Error While SigningUp. Status:', status);
                }
            } 
        }
    },
    
    
}

export default userInst;
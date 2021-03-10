<!-- prettier-ignore -->
<template>
  <form             
    ref="email"
    class="flex justify-between" 
    @submit.stop.prevent="submitForm"
    >
    <div class="relative">
        <input 
            id="email"
            ref="input" 
            v-model="contacts.email"
            autocomplete="nope" 
            class="bg-transparent input border-b border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus active:bg-transparent active:filled focus:border-indigo-600 focus:outline-none active:outline-none" 
            type="text" 
            autofocus
            required
        >
        <label for="email" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base cursor-text">Enter Email Address</label>
    </div>
    <button
    type="submit"
    class="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded"
    @click="() => submitForm()"
    >
        Notify Me
    </button>
</form>
</template>

<!-- eslint-disable -->
<script>

export default {
  data () {
    return {
        contacts: {
            email: "",
        }
    }
  },
  methods: {
      async submitForm(){
        //   console.log(this.email);
        //   console.log(this.$refs);
        await this.$axios.$put ('https://api.sendgrid.com/v3/marketing/contacts', {
            contacts:  [{
                    email: this.contacts.email
            }]
        }, {}
        ).then( response => {
            alert('Succesful, Thank you!', response.data);
        }).catch( err => {
            alert(err.message);
            console.error('it\'s an error Please Check it why here: ', err.response);
            console.error('it\'s an error Please Check it why here: ', err.response.data.message);
        })
    }
  },
  beforeUpdate() {
    let input = document.getElementById("email");
    if(this.email != "") {
        input.classList.add("filled");
    } else {
        input.classList.remove("filled");
    }
  } 
}
</script>
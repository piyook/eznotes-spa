<template>
  <form>
    <div :class="formModeClass">
      <label for="InputEmail">email</label>
      <input
        type="email"
        id="InputEmail"
        :class="{ invalid: !email.isValid }"
        aria-describedby="email"
        placeholder="Enter email"
        v-model.trim="email.val"
        @blur="validateEmail"
      />
      <p v-if="!email.isValid">{{ email.errorMsg }}</p>
    </div>
    <div :class="formModeClass">
      <label for="InputPassword1">password</label>
      <input
        type="password"
        class="form-control"
        id="InputPassword1"
        :class="{ invalid: !password.isValid }"
        placeholder="Password"
        v-model.trim="password.val"
        @blur="validatePassword"
      />
      <p v-if="!password.isValid">{{ password.errorMsg }}</p>
    </div>

    <div :class="formModeClass" v-if="!isLoginMode">
      <label for="InputPassword2">retype password</label>
      <input
        type="password"
        class="form-control"
        id="InputPassword2"
        :class="{ invalid: !retypedPw.isValid }"
        placeholder="Password"
        v-model.trim="retypedPw.val"
        @keyup="validateRetypePassword"
      />
      <p v-if="!retypedPw.isValid">{{ retypedPw.errorMsg }}</p>
    </div>
  </form>
  <button type="submit" class="btn btn-primary" @click.prevent="submitForm">
    <span v-if="isLoginMode"> Login </span>
    <span v-else> Register </span>
  </button>
</template>

<script>
export default {
  props: {
    isLoginMode: Boolean,
  },
  data() {
    return {
      email: {
        val: "",
        isValid: true,
        errorMsg: "",
      },
      password: {
        val: "",
        isValid: true,
        errorMsg: "",
      },
      retypedPw: {
        val: "",
        isValid: true,
        errorMsg: "",
      },
      formIsValid: true,
    };
  },
  computed: {
    formModeClass() {
      if (this.isLoginMode) {
        return { login: true };
      } else {
        return { register: true };
      }
    },
  },
  methods: {
    async submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      if (this.isLoginMode) {
        await this.$store.dispatch({
          type: "login",
          email: this.email.val,
          password: this.password.val,
        });

        this.$router.push("/userhome");
      } else {
        //TODO: submit form to registration API
        alert("submitted registration");
      }
    },
    validateEmail() {
      this.email.isValid = true;
      if (this.email.val === "" || !this.email.val.includes("@")) {
        this.email.isValid = false;
        this.formIsValid = false;
        this.email.errorMsg = "Please Enter a Valid Email Address";
      }
    },
    validatePassword() {
      this.password.isValid = true;
      if (this.password.val === "") {
        this.password.isValid = false;
        this.formIsValid = false;
        this.password.errorMsg = "Please Enter a Password";
      } else if (this.password.val.length < 8) {
        this.password.isValid = false;
        this.formIsValid = false;
        this.password.errorMsg = "Password must be at least 8 characters";
      }
    },
    validateRetypePassword() {
      this.retypedPw.isValid = true;
      if (this.retypedPw.val !== this.password.val) {
        this.retypedPw.isValid = false;
        this.formIsValid = false;
        this.retypedPw.errorMsg = "Retyped Password doesn't match";
      }
    },

    validateForm() {
      this.formIsValid = true;
      this.validateEmail();
      this.validatePassword();
      if (!this.isLoginMode) {
        this.validateRetypePassword();
      }
    },
  },
};
</script>

<style scoped>
label {
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: normal;
  color: #ffffff;
}

input {
  width: 259px;
  height: 29px;
  background-color: #ffffff;
  border: none;
  margin-top: 20px;
  margin-left: 60px;
}

.highlightError {
  background-color: black;
}
input:focus,
button:focus {
  outline: none;
  background-color: #f2f20e;
}

button {
  width: 219px;
  height: 55px;
  margin: 30px 0px;
  border: none;
  background-color: #f2f20e;
  color: black;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: normal;
  color: #000000;
}

button:hover {
  border: 1px solid darkred;
}

.login {
  margin: 20px 0px;
  text-align: right;
  margin-right: 150px;
}

.register {
  margin: 5px 0px;
  text-align: right;
  margin-right: 150px;
}

.invalid {
  border: black 4px solid;
}

button {
  transition: border 1s linear 0s;
}
</style>

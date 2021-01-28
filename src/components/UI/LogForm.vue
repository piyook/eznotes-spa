<template>
  <alert-modal v-bind:is-active="isModalVisible">
    <template v-slot:title>
      <span v-if="isLoginMode">Login Error</span>
      <span v-else>Registration Error</span>
    </template>
    <span v-if="isLoginMode">Please Supply A Valid Email and Password</span>
    <span v-else>Email Address Taken - Please Supply Another</span>
    <template v-slot:yesButton>CANCEL</template>
    <template v-slot:cancelButton>RETRY</template>
  </alert-modal>

  <form>
    <div :class="formModeClass">
      <label for="InputEmail">email</label>
      <input
        type="email"
        autocomplete="on"
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
        autocomplete="on"
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
        autocomplete="off"
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
      modalVisibility: false,
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
    isModalVisible() {
      return this.modalVisibility;
    },
  },
  methods: {
    async submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      if (this.isLoginMode) {
        let result = await this.$store.dispatch({
          type: "login",
          email: this.email.val,
          password: this.password.val,
        });

        if (result.message === "ERROR") {
          await this.authError();
          return;
        }

        this.$router.push("/userhome");
      } else {
        let result = await this.$store.dispatch({
          type: "register",
          email: this.email.val,
          password: this.password.val,
        });

        if (result.message === "ERROR") {
          await this.authError();
          return;
        }

        this.$router.push("/userhome");
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
    async authError() {
      this.modalVisibility = true;
      let modalResponse = await this.$store.dispatch("awaitModalResponse");

      this.modalVisibility = false;
      document.documentElement.style.overflow = "auto";

      if (modalResponse) {
        this.$store.commit("updateAuth", { isLoggedIn: false });
        this.$router.push("/");
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

p {
  color: #f2f20e;
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
  border-radius: 5px;
  background-color: #f2f20e;
  color: black;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: normal;
  color: #000000;
  transition: all 1.5s ease-in-out;
}

button:hover {
  background: black;
  color: #f2f20e;
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

@media only screen and (max-width: 750px) {
  label {
    font-size: 20px;
  }

  input {
    width: 170px;
    font-size: 14px;
  }

  .login {
    /* margin: 20px 0px; */
    text-align: right;
    margin-right: 20px;
  }

  .register {
    /* margin: 5px 0px; */
    text-align: right;
    margin-right: 20px;
  }
}
</style>

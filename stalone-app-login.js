
class StaloneAppLogin extends Polymer.Element {

  static get is() {
      return 'stalone-app-login';
    }

    static get properties() {
      return {
        userName: String,
        userPassword: String,
        userId: String,
        gender: String,

        clearIcon:   { type: String, value: 'coronita:close' },
        showPwdIcon: { type: String, value: 'coronita:visualize' },
        hidePwdIcon: { type: String,value: 'coronita:hide'},
        loggedIn: { type: Boolean, value: false },
        loggingInText: { type: String,value: 'Ingresando...'},
        loggedInText: { type: String, value: 'Ingresado' },

        _loading: { type: Boolean,value: false },
        _loadingText: { type: String, computed: '_computeLoadingText(loggedIn)'}

      };
    }

    _onFormSubmit(e) {
      this._loading = !this._loading;
      this.dispatchEvent(new CustomEvent('request-access', {
        composed: true,
        bubbles: true,
        detail: e.detail
      }));
      console.log(e.detail)
    }

    _computeLoadingText(loggedIn) {
      return loggedIn ? this.loggedInText : this.loggingInText;
    }

  }
customElements.define(StaloneAppLogin.is, StaloneAppLogin);
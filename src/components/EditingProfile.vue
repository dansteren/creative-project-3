<template>
  <div class="component-container">
    <h1>Create your profile</h1>
    <div v-if="!imageUrl" class="image-area">
      <div class="profile-image"></div>
      <input type="file" class="image-upload image-button" name="image-upload" accept=".jpg, .jpeg, .png" @change="updatePreview">
    </div>
    <div v-else class="image-area">
      <img class="profile-image" :src="imageUrl" />
      <button @click="removeImage" class="image-button">Remove image</button>
    </div>
    <div class="form-row">
      <label for="name">Enter your name:</label>
      <input type="text" v-model="name" name="name"/>
    </div>
    <div class="form-row">
      <label for="city">City:</label>
      <input type="text" v-model="city" name="city"/>
      <label for="state">State:</label>
      <input type="text" v-model="state" name="state"/>
    </div>
    <div class="form-row">
      <label for="tagline">Tagline:</label>
      <input type="text" v-model="tagline" name="tagline"/>
    </div>
    <div class="form-row">
      <label for="occupation">Occupation:</label>
      <input type="text" v-model="occupation" name="occupation"/>
    </div>
    <div class="form-row">
      <label for="bio">Bio:</label>
      <input type="text" v-model="bio" name="bio"/>
    </div>
    <div class="form-row">
      <label for="websiteUrl">websiteUrl:</label>
      <input type="text" v-model="websiteUrl" name="websiteUrl"/>
    </div>
    <button class="submit-button" @click="updateUser">Finish</button>
    <div v-if="error" id="error-text">{{error}}</div>
  </div>
</template>

<script>
export default {
  name: 'EditingProfile',
  props: ['person'],
  data() {
    if (!this.person) {
      return {
        imageUrl: '',
        name: '',
        city: '',
        state: '',
        tagline: '',
        occupation: '',
        bio: '',
        websiteUrl: '',
        error: ''
      };
    }
    return { ...this.person, error: '' };
  },
  methods: {
    updateUser() {
      if (
        !this.name ||
        !this.imageUrl ||
        !this.city ||
        !this.state ||
        !this.tagline ||
        !this.occupation ||
        !this.bio ||
        !this.websiteUrl
      ) {
        this.error =
          'Some fields are missing. Make sure you fill out the whole form.';
        return;
      }
      this.error = '';
      let urlContainsHttp =
        this.websiteUrl.includes('http://') ||
        this.websiteUrl.includes('https://');
      this.$emit('finish', {
        name: this.name,
        imageUrl: this.imageUrl,
        city: this.city,
        state: this.state,
        tagline: this.tagline,
        occupation: this.occupation,
        bio: this.bio,
        websiteUrl: urlContainsHttp
          ? this.websiteUrl
          : 'http://' + this.websiteUrl
      });
    },
    updatePreview(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.createImage(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      let vm = this;

      reader.onload = e => {
        vm.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.imageUrl = '';
    }
  }
};
</script>

<style scoped>
.component-container {
  border-radius: 2px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image-area {
  background-color: brown;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
  padding: 16px;
  border-radius: 5px;
  margin: 16px;
}
.image-upload {
  width: 180px;
}
.image-button {
  margin-top: 16px;
}
.profile-image {
  height: 200px;
  width: 200px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
}
.form-row {
  min-width: 400px;
  margin: 8px;
  display: flex;
}
.submit-button {
  align-self: center;
  margin-top: 16px;
  padding: 8px 16px;
}
input[type='text'] {
  flex: 1;
}
h1 {
  margin-bottom: 4px;
}
#error-text {
  color: red;
  margin: 8px;
}
</style>

<template>
  <div class="home-page-container">
    <div id="bar">
    <h1>ProfileCreator.com</h1>
    <div>Make a great profile and impress everyone!</div>
    </div>
    <editing-profile v-if="editing" :person="user" v-on:finish="update"></editing-profile>
    <div v-else>
      <div id="cardHolder">
        <div id="upperHalf">
          <img :src="user.imageUrl">
          <div id="textHolder">
            {{ user.name }}
            <br/>
            {{ user.occupation }} in {{user.city}}, {{user.state}}
          </div>
        </div>
        <hr/>
        <div id="lowerHalf">
          <a :href="user.websiteUrl">Visit my website</a>
          <p>{{ user.tagline }}</p>
          <p>{{ user.bio }}</p>
        </div>
      </div>
      <button class="editing-button" @click="continueEditing">Continue Editing...</button>
    </div>
    <footer>
      <a class="FooterP" href="https://github.com/dansteren/creative-project-3.git">GitHub Repository</a>
    </footer>
  </div>
</template>

<script>
import EditingProfile from '@/components/EditingProfile';
export default {
  name: 'HomePage',
  components: { EditingProfile },
  data() {
    return {
      editing: true,
      user: {
        imageUrl: '',
        name: '',
        occupation: '',
        city: '',
        state: '',
        websiteUrl: '',
        tagline: '',
        bio: ''
      }
    };
  },
  methods: {
    update(user) {
      this.user = user;
      this.editing = false;
    },
    continueEditing() {
      console.log('hello');
      this.editing = !this.editing;
    }
  }
};
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
}
body {
  padding: 0px;
  margin: 0px;
}
</style>

<style scoped>
#bar {
  background-color: #223a5e;
  margin: 0px;
  padding: 10px 0px 10px 25px;
  box-shadow: 0 4px 2px -2px gray;
  color: white;
}
h1 {
  margin: 0px;
}

#cardHolder {
  width: 500px;
  text-align: center;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 1px 5px #616161;
}

#upperHalf {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

#upperHalf img {
  border: 1px solid black;
  width: 80%;
  margin: 25px 0px 15px 0px;
  box-shadow: 0px 1px 5px #616161;
}

#textHolder {
  font-family: 'Karma', serif;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 2px;
}

#lowerHalf {
  display: flex;
  flex-direction: column;
}

#lowerHalf a {
  border-color: black;
  border-width: 2px;
  border-style: solid;
  padding: 7px;
  border-radius: 4px;
  margin: 15px auto 0px auto;
  text-decoration: none;
  color: black;
}
.editing-button {
  display: block;
  margin: 16px auto;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: gray;
  padding: 0px;
}

footer a {
  color: white;
  text-decoration: none;
  font-size: 15px;
  margin-left: 15px;
  font-family: 'Nunito', sans-serif;
}
</style>

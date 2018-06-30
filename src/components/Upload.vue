<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="card-box">
          <div>
            <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
            <div class="mt-3">Selected file: {{file && file.name}}</div>
          </div>
          <b-button type="submit" class="upload-btn">Upload</b-button>
           </div>
        </div>
  </div>
</template>

<script>
  export default {
    name: "Upload",
    data() {
      return {
        file: null,
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello-again {
    font-size: 40px;
    font-weight: bold;
  }

   .card-box {
    background: #fff;
    width: 300px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 40px;
    padding-top: 40px;
    margin-top: 60px;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
    border-radius: 30px 30px 30px 30px;
    -moz-border-radius: 30px 30px 30px 30px;
    -webkit-border-radius: 30px 30px 30px 30px;
    border: 0px solid #000000;
    transition: all 1s;
  }
  
  .card-box:hover {
    transition: all 1s;
    -webkit-box-shadow: 0px 10px 21px -1px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 10px 21px -1px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 10px 21px -1px rgba(0, 0, 0, 0.3);
  }

  .upload-btn {
    width: 100%;
     border-radius: 15px 15px 15px 15px;
    -moz-border-radius: 15px 15px 15px 15px;
    -webkit-border-radius: 15px 15px 15px 15px;
    margin-top: 30px;
  }

.custom-file-label {
    overflow: hidden;
}

</style>

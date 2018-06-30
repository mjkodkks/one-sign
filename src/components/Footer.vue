<template>
  <div class="footer">
    <div class="container">
      <div class="row justify-content-center">
  
        <div class="col-12">
          <div class="row">
            <div class="col-3 col-md-2 text-right">
              Address :
            </div>
            <div class="col-md-10 col-9">
  
              บริษัท วัน ออเทน จำกัด ทะเบียนนิติบุคคลเลขที่ : 0105561069151 ที่อยู่ : 1768 อาคารไทยซัมมิท ทาวเวอร์ ชั้น 16 ถ.เพชรบุรีตัดใหม่ แขวงบางกะปิ เขตห้วยขวาง กรุงเทพมหานคร 10310
  
            </div>
          </div>
          <div class="row">
            <div class="col-3 col-md-2 text-right">
              Tel :
            </div>
            <div class="col-8">
              02-257-7269 
            </div>
          </div>
          <div class="row">
            <div class="col-3 col-md-2 text-right">
              E-mail :
            </div>
            <div class="col-9">
              info@oneauthen.in.th
            </div>
          </div>
        </div>
      </div>
  
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 2%;
    padding-bottom: 2%;
    background: #d60103;
    display: block;
    position: absolute;
    bottom: 0;
    color: #fff;
    font-size: 14px;
  }
  
  .row {
    padding: 0 0 0 0;
  }
  
  .information {
    display: block;
  }
  
  .information>div>ul {
    list-style: none;
    padding: 0;
    display: inline-block;
  }
  
  .information>div>ul:nth-child(2) {
    list-style: none;
    padding-left: 20px;
    font-weight: bolder;
  }
  
  .information>div>ul:nth-child(3) {
    list-style: none;
    padding-left: 20px;
  }
  
  .address {
    text-align: right;
  }

  @media screen and (max-height: 700px ) {
    .footer {
    position: relative;
    }
  }
</style>

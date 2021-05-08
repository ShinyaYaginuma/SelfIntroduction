<template>
  <v-container id="skills">
    <v-row>
      <v-col cols="12" lg="12" md="12" sm="12" align="center">
        <v-card>
          <h3 class="card-header">Qualification</h3>
          <div class="card-body">
            <table class="table" style="margin-bottom: 0px">
              <tbody>
                <tr>
                  <th scope="row">2015/04</th>
                  <td>MTA Network Fundamental</td>
                </tr>
                <tr>
                  <th scope="row">2016/04</th>
                  <td>基本情報処理技術者</td>
                </tr>
                <tr>
                  <th scope="row">2016/09</th>
                  <td>Developing Microsoft Azure Solutions</td>
                </tr>
                <tr>
                  <th scope="row">2018/09</th>
                  <td>
                    Certificate_Oracle Certified Java Programmer, Silver SE 8
                  </td>
                </tr>
                <tr>
                  <th scope="row">2019/06</th>
                  <td>応用情報処理技術者</td>
                </tr>
                <tr>
                  <th scope="row">2019/07</th>
                  <td>Developing Solutions for Microsoft Azure_AZ-203</td>
                </tr>
              </tbody>
            </table>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" lg="12" md="12" sm="12" align="center">
        <div class="card">
          <h3 class="card-header">Programming</h3>
          <ul class="ul-group-programming">
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              C# ( .NET Framework, ASP.NET, WPF )
              <small class="text-muted">4 year</small>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              Java ( Spring, Spring Boot )
              <small class="text-muted">2 year</small>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              Basic knowledge of the Web, Vue.js
              <small class="text-muted">recently ( 2021/5~ )</small>
            </li>
          </ul>
        </div>
      </v-col>
      <v-col cols="12" lg="12" md="12" sm="12" align="center">
        <div class="card">
          <h3 class="card-header">Handleable Software</h3>
          <div class="card-body">
            <v-list-item-group>
              <v-list-item
                class="list-group-item d-flex justify-content-between align-items-center"
                >Visual Studio</v-list-item
              >
              <v-list-item
                class="list-group-item d-flex justify-content-between align-items-center"
                >Eclipse</v-list-item
              >
              <v-list-item
                class="list-group-item d-flex justify-content-between align-items-center"
                >SSMS
              </v-list-item>
              <v-list-item
                class="list-group-item d-flex justify-content-between align-items-center"
                >IIS</v-list-item
              >
              <v-list-item
                class="list-group-item d-flex justify-content-between align-items-center"
                >Teraterm</v-list-item
              >
              <v-list-item
                class="list-group-item d-flex justify-content-between align-items-center"
                >WireShark</v-list-item
              >
              <v-list-item
                class="list-group-item d-flex justify-content-between align-items-center"
                >Hyper-V</v-list-item
              >
            </v-list-item-group>
          </div>
        </div>
      </v-col>
      <div class="col-2"></div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style scoped>
#skills {
  text-align: center;
}
.ul-group-programming {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin: 20px;
  border-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
h3 {
  background: #1de9b6;
  /* #FFFFFF */
  /* #37474F */
}
</style>
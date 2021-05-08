<template>
  <v-container id="skills">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <div class="card">
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
        </div>
        <div class="card">
          <h3 class="card-header">Programming</h3>
          <!-- <div class="card-deck">
              <div class="card">
                <div class="card-body">
                  <p class="card-text">Some more card content</p>
                </div>
                <div class="card-footer">2 days ago</div>
              </div>
              <div class="card">
                <div class="card-body">
                  <p class="card-text">Some more card content</p>
                </div>
                <div class="card-footer">2 days ago</div>
              </div>
              <div class="card">
                <div class="card-body">
                  <p class="card-text">Some more card content</p>
                </div>
                <div class="card-footer">2 days ago</div>
              </div>
            </div> -->
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
        <div class="card">
          <h3 class="card-header">Handleable Software</h3>
          <div class="card-body">
            <v-list-item-group>
              <v-list-item class="list-group-item">Visual Studio</v-list-item>
              <v-list-item class="list-group-item">Eclipse</v-list-item>
              <v-list-item class="list-group-item"
                >SQL Server Management Studio</v-list-item
              >
              <v-list-item class="list-group-item">IIS</v-list-item>
              <v-list-item class="list-group-item">Teraterm</v-list-item>
              <v-list-item class="list-group-item">WireShark</v-list-item>
              <v-list-item class="list-group-item">Hyper-V</v-list-item>
            </v-list-item-group>
          </div>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
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
.card {
  margin: 20px;
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
  background: darkorange;
}
</style>
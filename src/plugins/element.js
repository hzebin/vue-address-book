import Vue from 'vue'
import {
  Button,
  Row,
  Col,
  Input,
  DatePicker,
  Table,
  TableColumn,
  Message,
  Dialog,
  Form,
  FormItem
} from 'element-ui'

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)

Vue.prototype.$message = Message  //这个需要全局挂载到Vue上
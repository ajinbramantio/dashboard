let dataEmployee = [
  {
    id: 1,
    name: 'Bara',
    alamat: 'tebet',
    email: 'bara@gmail.com',
    age: 28,
    salary: 5000000,
    startDate: `21/January/2019`
  },
  {
    id: 2,
    name: 'Shakti',
    alamat: 'kuningan',
    email: 'shakti@gmail.com',
    age: 25,
    salary: 8000000,
    startDate: `21/January/2019`
  },
  {
    id: 3,
    name: 'Ari',
    alamat: 'Depok',
    email: 'shakti@gmail.com',
    age: 25,
    salary: 7000000,
    startDate: `21/January/2019`
  }
]

let count = 3

// element UL
const tableDOM = document.getElementById('list-body')
// console.log(tableDOM)
const DivformAdd = document.getElementById('divform')
// console.log(DivformAdd)
// console.log(FormAdd)

const employee = {
  display: () => {
    tableDOM.innerHTML = ''

    dataEmployee.forEach(data => {
      const reverse = data.salary
        ? data.salary
            .toString()
            .split('')
            .reverse()
            .join('')
        : 0

      const rupiah = reverse
        ? reverse
            .match(/\d{1,3}/g)
            .join('.')
            .split('')
            .reverse()
            .join('')
        : ''

      const date = data.startDate ? data.startDate.split('/') : ''
      const dateString = `${date[0]} - ${date[date.length - 2]} - ${
        date[date.length - 1]
      }`

      // console.log(date)
      const tr = document.createElement('tr')

      tr.innerHTML = `<td>${data.id}</td><td>${data.name}</td><td>${
        data.alamat
      }</td><td>${data.email}</td><td>${
        data.age
      }</td><td>${dateString}</td><td>Rp.${rupiah}</td><td colspan="1"><button type="button" class="btn btn-warning"  data-target="#ModelEdit"
                    data-toggle="modal" onclick="employee.editData(${
                      data.id
                    })"><i class="fa fa-pencil"></i>
        </button></td><td colspan="1"><button type="button" class="btn btn-danger" onclick="employee.remove(${
          data.id
        })"><i class="fa fa-trash-o"></i></button>
        </td>`
      tableDOM.appendChild(tr)
      //   console.log(tr)
    })
  },

  add: event => {
    event.preventDefault()

    const newName = document.getElementById('newNameAdd').value
    const date = document.getElementById('datepicker-add').value

    const data = {
      id: count++,
      name: newName,
      date
    }

    dataEmployee.push(data)
    employee.display()
  },

  editData: editById => {
    // console.log(editById)
    const filterPegawai = dataEmployee.filter(employee => {
      return employee.id === editById
    })
    return filterPegawai
  },

  search: event => {
    event.preventDefault()

    const keyname = document.getElementById('search-text').value
    if (keyname === '') {
      console.log(keyname === '')

      employee.display(dataEmployee)
    } else {
      const resultSearch = dataEmployee.filter(item => {
        //   console.log(item.name.toLowerCase().includes(keyword.toLowerCase()))

        return item.name.toLowerCase().includes(keyname.toLowerCase())
      })
      dataEmployee = resultSearch
      employee.display(dataEmployee)
    }
  },

  remove: ID => {
    let removepegawai = dataEmployee.filter(student => {
      // console.log(student.id, ID)
      return student.id !== ID
    })
    dataEmployee = removepegawai

    employee.display(dataEmployee)
  }
}

employee.display()

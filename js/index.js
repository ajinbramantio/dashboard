let dataEmployee = [
  {
    id: 1,
    name: 'Bara',
    alamat: 'tebet',
    email: 'bara@gmail.com',
    age: 28,
    salary: 5000000,
    startDate: `09/21/2019`
  },
  {
    id: 2,
    name: 'Shakti',
    alamat: 'kuningan',
    email: 'shakti@gmail.com',
    age: 25,
    salary: 8000000,
    startDate: `03/21/2019`
  },
  {
    id: 3,
    name: 'Ari',
    alamat: 'Depok',
    email: 'shakti@gmail.com',
    age: 25,
    salary: 7000000,
    startDate: `12/30/2019`
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
      const dateString = `${date[date.length - 2]} - ${date[0]} - ${
        date[date.length - 1]
      }`

      // console.log(date)
      const tr = document.createElement('tr')

      tr.innerHTML = `<td>${data.id}</td><td>${data.name}</td><td>${
        data.alamat
      }</td><td>${data.email}</td><td>${
        data.age
      }</td><td>${dateString}</td><td>Rp.${rupiah}</td><td colspan="1"><button id ="number" type="button" class="btn btn-warning"  data-target="#ModelEdit"
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
    const addres = document.getElementById('newAddres').value
    const email = document.getElementById('newEmail').value
    const age = document.getElementById('newAge').value
    const date = document.getElementById('datepicker-add').value
    const sallary = document.getElementById('newSallary').value
    // console.log(addres)
    let money = ''
    for (let i = 0; i < sallary.length; i++) {
      if (sallary[i] !== '.') {
        money += sallary[i]
      }
    }
    // console.log(type money)

    if (
      newName == '' ||
      addres === '' ||
      email === '' ||
      age === '' ||
      date === '' ||
      sallary === ''
    ) {
      alert('semua data harus di isi')
    } else {
      const data = {
        id: count++,
        name: newName,
        alamat: addres,
        age,
        email,
        startDate: date,
        salary: money
      }

      dataEmployee.push(data)
      employee.display()
    }
  },

  editData: editId => {
    const employee = dataEmployee.find(employee => {
      return employee.id === editId
    })

    document.getElementById('editId').value = employee.id
    document.getElementById('editName').value = employee.name
    document.getElementById('editAddres').value = employee.alamat
    document.getElementById('editEmail').value = employee.email
    document.getElementById('editAge').value = employee.age
    document.getElementById('datepickerEdit').value = employee.startDate
    document.getElementById('editSallary').value = employee.salary
  },

  updateData: id => {
    const editId = document.getElementById('editId').value
    const updateName = document.getElementById('editName').value
    const updateAddress = document.getElementById('editAddres').value
    const updateEmail = document.getElementById('editEmail').value
    const updateAge = document.getElementById('editAge').value
    const updateDate = document.getElementById('datepickerEdit').value
    const updateSallary = document.getElementById('editSallary').value
    // console.log(updateName)

    let updateDataById = dataEmployee.map(data => {
      let result = ''
      if (data.id == editId) {
        const object = {
          id: data.id,
          name: updateName,
          alamat: updateAddress,
          email: updateEmail,
          age: updateAge,
          startDate: updateDate,
          salary: updateSallary
        }
        // return object
        result = object
        // console.log(object)
      } else {
        result = data
        // console.log(data)
      }
      // data = result
      return result
    })
    dataEmployee = updateDataById
    // console.log(updateDataById)
    employee.display()
  },

  search: event => {
    event.preventDefault()

    const keyname = document.getElementById('search-text').value
    if (keyname === '') {
      // console.log(keyname === '')
      alert('anda belum memasukan text')
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

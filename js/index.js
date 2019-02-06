let datapegawai = [
  {
    id: 1,
    name: 'Bara',
    alamat: 'tebet',
    email: 'bara@gmail.com',
    age: 28,
    price: '5000000',
    startDate: `21/January/2019`
  },
  {
    id: 2,
    name: 'Shakti',
    alamat: 'kuningan',
    email: 'shakti@gmail.com',
    age: 25,
    price: '8000000',
    startDate: `21/January/2019`
  },
  {
    id: 3,
    name: 'Ari',
    alamat: 'Depok',
    email: 'shakti@gmail.com',
    age: 25,
    price: '7000000',
    startDate: `21/January/2019`
  }
]

// element UL
const tableDOM = document.getElementById('list-body')
// console.log(tableDOM)
const DivformAdd = document.getElementById('divform')
// console.log(DivformAdd)
// console.log(FormAdd)

pegawai = {
  display: () => {
    tableDOM.innerHTML = ''
    let count = 1

    datapegawai.forEach(data => {
      var bilangan = data.price

      var reverse = bilangan
          .toString()
          .split('')
          .reverse()
          .join(''),
        rupiah = reverse.match(/\d{1,3}/g)
      rupiah = rupiah
        .join('.')
        .split('')
        .reverse()
        .join('')

      const date = data.startDate.split('/')
      //   console.log(date)
      const tr = document.createElement('tr')
      tr.innerHTML = `<td>${count++}</td><td>${data.name}</td><td>${
        data.alamat
      }</td><td>${data.email}</td><td>${data.age}</td><td>${date[0]} - ${
        date[date.length - 2]
      } - ${
        date[date.length - 1]
      }</td><td>Rp.${rupiah}</td><td colspan="1"><button type="button" class="btn btn-warning"  data-target="#ModelEdit"
                    data-toggle="modal" onclick="pegawai.editData(${
                      data.id
                    })"><i class="fa fa-pencil"></i>
        </button></td><td colspan="1"><button type="button" class="btn btn-danger" onclick="pegawai.remove(${
          data.id
        })"><i class="fa fa-trash-o"></i></button>
        </td>`
      tableDOM.appendChild(tr)
      //   console.log(tr)
    })
  },

  add: () => {
    const newName = document.getElementById('newNameAdd').value
    // console.log(newName)
  },

  editData: editById => {
    // console.log(editById)
    const filterPegawai = datapegawai.filter(pegawai => {
      return pegawai.id === editById
    })
    console.log(filterPegawai)
    return filterPegawai
  },

  search: event => {
    event.preventDefault()

    const keyname = document.getElementById('search-text').value
    if (keyname === '') {
      console.log(keyname === '')

      pegawai.display(datapegawai)
    } else {
      const resultSearch = datapegawai.filter(item => {
        //   console.log(item.name.toLowerCase().includes(keyword.toLowerCase()))

        return item.name.toLowerCase().includes(keyname.toLowerCase())
      })
      datapegawai = resultSearch
      pegawai.display(datapegawai)
    }
  },

  remove: ID => {
    let removepegawai = datapegawai.filter(student => {
      // console.log(student.id, ID)
      return student.id !== ID
    })
    datapegawai = removepegawai

    pegawai.display(datapegawai)
  }
}
let editData = pegawai.editData()
pegawai.display()

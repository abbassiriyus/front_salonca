import React, { Component } from 'react'
import Navbar from './Navbar_page'
import '../css/NewUsers.css'
import Calendar from './Calendar_page'

export default class NewUser extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="new-users-main">
            <div className="calendar-main">
                <Calendar/>
                <div className="calendar-pasi-wone">
                    <p>Рабочие места</p>
                    <table>
  <tr>
    <th className='soz-wone'>Фото</th>
    <th className='soz-wone'>Специализация</th>
    <th className='soz-wone'>Цена в час</th>
  </tr>
  <tr>
    <td> <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2Foqql8UlfhxUmDpxesS8ZENBf42WMmttAS7-WlYiJtPU%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzL2ZmNmY5MTIwLTg0NjEtNDI4MC04ZDAyLThkMDk5ZmFiYTNmMi9lNDY4ODI4Ni1kYzMxLTRjNDUtOGMwOC01ZDYxMjAwZjRhMDMucG5n.jpg&w=1920&q=75" className='table-img' alt="" /> </td>
    <td className='table-sozla'>Визажист, Массажист</td>
    <td className='table-sozla'>2 500 ₽</td>
    <td><a className='qizil-yomayo' href="#" id='media-yopil'>Изменить расписание</a></td>
    <td ><a href="#"  id='media-yopil'>Редактировать</a></td>
  </tr>
  <tr>
  <td> <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2Foqql8UlfhxUmDpxesS8ZENBf42WMmttAS7-WlYiJtPU%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzL2ZmNmY5MTIwLTg0NjEtNDI4MC04ZDAyLThkMDk5ZmFiYTNmMi9lNDY4ODI4Ni1kYzMxLTRjNDUtOGMwOC01ZDYxMjAwZjRhMDMucG5n.jpg&w=1920&q=75" className='table-img' alt="" /> </td>
    <td className='table-sozla'>Визажист, Мастер Ногтевого Сервиса, <br /> Специалист По Наращиванию Ресниц</td>
    <td className='table-sozla'>0 ₽</td>
    <td><a className='qizil-yomayo' href="#"  id='media-yopil'>Изменить расписание</a></td>
    <td><a href="#"  id='media-yopil'>Редактировать</a></td>
  </tr>
  <tr>
    <td><a className='qizil-yomayo' href="#"  id='media-flex'  >Изменить расписание</a></td>
    <td><a  href="#" id='media-flex' >Редактировать</a></td>
  </tr>
</table>
                </div>
                
                <div className="calendar-pasi-wone">
                    <p>Счета и статистика</p>
                    <table>
  <tr>
    <th className='soz-wone'>Дата</th>
    <th className='soz-wone'>Статус</th>
    <th className='soz-wone'>Бронирования</th>
    <th className='soz-wone'>Отмены</th>
    <th className='soz-wone'>Общая сумма</th>
    <th className='soz-wone'>Комиссия</th>
    <th className='soz-wone'>Счёт в pdf</th>
  </tr>

<tr>
    <td className='table-sozla'>1</td>
    <td className='table-sozla'>2</td>
    <td className='table-sozla'>3</td>
    <td className='table-sozla'>4</td>
    <td className='table-sozla'>5</td>
    <td className='table-sozla'>6</td>
    <td className='table-sozla'>7</td>
</tr>

</table>
                </div>

            </div>
            
            <div className="form-main">
                <div className="form-otziv">
                    <div className="otziv-text">
                        <p>Отзывы</p>
                    </div>
                    <div className="otziv-text-min">
                        <p>Отзывов не найдено</p>
                    </div>
                </div>
                <div className="infarmation-main">
                    <div className="inf-block-1">
                        <div className="won-inf">
                            <p>Информация</p>
                            <span>На модерации</span>
                        </div>
                        <div className="two-inf">
                            <button>Выйти</button>
                        </div>
                    </div>
                    <div className="swiper-block-info">
                        <div className="swiper-grid d_f">
                            <div className="swiper-kotta">
                                <img src="https://www.mad4wheels.com/img/free-car-images/mobile/18643/bmw-m5-f90-cs-2022-619130.jpg" alt="" />
                            </div>
                            <div className="swiper-ong">
                                <div className="swiper-mini">
                                    <img src="https://www.mad4wheels.com/img/free-car-images/mobile/18643/bmw-m5-f90-cs-2022-619133.jpg" alt="" />
                                </div>
                                <div className="swiper-mini">
                                    <img src="https://www.mad4wheels.com/img/free-car-images/mobile/18643/bmw-m5-f90-cs-2022-619170.jpg" alt="" />
                                </div>
                                <div className="swiper-mini">
                                    <img src="https://www.avtorinok.ru/cache/photo/pics/bmw/m5-cs/208367-gthumb-gwdata480-ghdata360-gfitdatacrop.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="bnt-inp">
                        <input type="file"/> <br />
                        <button>Фото</button>
                        </div>
                    </div>
                    <div className="opisaniya">
                        <p>Название</p>
                        <input type="text" />
                    </div>
                    <div className="opisaniya-salona">
                        <p>Описание салона</p>
                        <input type="text" />
                    </div>
                    <div className="text-opsinaya">
                        <p id='pasga'>Период аренды</p>
                        <div className="text-ichi-p">
                            <p>Укажите на какой срок вы можете предоставлять места в салоне. Должен быть выбран хотя бы один тип</p>
                        </div>
                    </div>
                    <div className="input-check-la">
                        <div className="check-1">
                            <input type="checkbox"  /> <span>По часам/дням</span>
                        </div>
                        <div className="check-1">
                            <input type="checkbox" /> <span>Долгосрочно</span>
                        </div>
                    </div>
                    <div className="opisaniya-salona-3">
                        <p>Требования к мастеру</p>
                        <input type="text" />
                    </div>
                    <div className="kop-chekboxla">
                        <div className="kop-check-block">
                            <input type="checkbox"  /><span>Есть парковка</span>
                        </div>
                        <div className="kop-check-block">
                            <input type="checkbox"  /><span>Находится в ЖК</span>
                        </div>
                        <div className="kop-check-block">
                            <input type="checkbox"  /><span>Профессиональные материалы по запросу</span>
                        </div>
                        <div className="kop-check-block">
                            <input type="checkbox"  /><span>Уборка рабочих мест</span>
                        </div>
                        <div className="kop-check-block">
                            <input type="checkbox"  /><span>Есть администратор</span>
                        </div>
                        <div className="kop-check-block">
                            <input type="checkbox"  /><span>Аренду можно оплатить картой</span>
                        </div>
                        <div className="kop-check-block">
                            <input type="checkbox"  /><span>Аренда кассы</span>
                        </div>
                        <div className="kop-check-block">
                            <input type="checkbox"  /><span>Зона ожидания для гостей</span>
                        </div>
                        <div className="kop-check-block">
                            <input type="checkbox"  /><span>Чай и кофе бесплатно</span>
                        </div>
                        <div className="kop-check-block">
                            <input type="checkbox"  /><span>Кухня для сотрудников</span>
                        </div>
                        <div className="kop-check-block">
                            <input type="checkbox"  /><span>Бесплатный тест-драйв (1 час)</span>
                        </div>
                    </div>
                    <div className="btn-submit-ha">
                        <button>Сохранить</button>
                        <p>Для смены номера телефона или email напишите нам на <br /> почту space2space@gmail.com</p>
                    </div>
                </div>
                <div className="form-otziv-2">
                    <div className="otziv-text">
                        <p>Скрыть салон</p>
                    </div>
                    <div className="otziv-text-min">
                        <p>Вы можете сделать салон невидимым для мастеров и скрыть его из выдачи</p>
                        <button onClick={()=>document.querySelector(".modal-oyna-newusers").style=`display: flex;`}>Скрыть</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal-oyna-newusers">
            <div className="modal-oyna-ichi-d_g">
                <div className="form-modal">
                    <h6>Вы уверены, что хотите <br /> скрыть салон?</h6>
                    <p>При нажатии на кнопку “Скрыть” забронировать рабочее место в салоне будет невозможно</p>
                    <div className="btn-md">
                        <button>Скрыть</button> <br />
                        <button  onClick={()=>document.querySelector(".modal-oyna-newusers").style=`display: none;`}>Отмена</button>
                    </div>
                    <div className="x-x">
                        <span onClick={()=>document.querySelector(".modal-oyna-newusers").style=`display: none;`}>x</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

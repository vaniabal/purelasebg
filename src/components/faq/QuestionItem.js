import React from "react"

export default function QuestionItem() {
  return (
    <div className="card">
      <div className="card-header">
        <h4>
          <a
            className="accordion-toggle"
            data-toggle="collapse"
            data-parent="#payment"
            href="#collapseOne_payment"
          >
            Какво представлява лазерната епилация?
            <i className="indicator icon-minus float-right" />
          </a>
        </h4>
      </div>
      <div
        id="collapseOne_payment"
        className="collapse show"
        data-parent="#payment"
      >
        <div className="card-body">
          Лазерната епилация е процес, който премахва космите от тялото с
          импулсен лазер. Лазерната топлина деактивира разтежа на косъма.
          Основният принцип на лазерa е селективна фототермолиза (SPTL), т.е.
          картографиране определена дължина на вълната, светлина и ширина на
          импулса, за да се постигне оптимален ефект в целевата тъкан с
          минимален ефект върху околната тъкан. Лазерът може да предизвика
          локализирани увреждания чрез селективно нагряване точката на меланин в
          района, на който причинява растежа на космения фоликул, а не затопляне
          на останалата част от кожата. Светлината се абсорбира от тъмни
          предмети, така че енергията на лазера може да се абсорбира от тъмни
          пигменти на кожата, но с много по-голяма скорост и интензивност.
        </div>
      </div>
    </div>
  )
}

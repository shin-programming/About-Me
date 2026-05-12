document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();

    const Nyear = Number(now.getFullYear());
    const Nmonth = Number(now.getMonth()) + 1;
    const Nday = Number(now.getDate());

    const input_year = document.getElementById('year');
    const input_month = document.getElementById('month');
    const input_day = document.getElementById('day');

    const input_zip = document.getElementById('zip');

    let age;

    for (let i = 1900; i <= Nyear; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        input_year.appendChild(option);
    }

    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        input_month.appendChild(option);
    }

    input_year.addEventListener('change', () => {
        maxday_change();
        age_calc();
    });

    input_month.addEventListener('change', () => {
        maxday_change();
        age_calc();
    });

    input_day.addEventListener('change', () => age_calc());
    input_zip.addEventListener('change', () => zip_search());

    function maxday_change() {
        const Iyear = Number(input_year.value);
        const Imonth = Number(input_month.value);
        while (input_day.options.length > 1) input_day.remove(1);
        if (input_year.value == '' || input_month.value == '') return;

        switch (true) {
            case [1, 3, 5, 7, 8, 10, 12].includes(Imonth):
                for (let i = 1; i <= 31; i++) {
                    const option = document.createElement('option');
                    option.value = i;
                    option.textContent = i;
                    input_day.appendChild(option);
                }

                break;

            case [4, 6, 9, 11].includes(Imonth):
                for (let i = 1; i <= 30; i++) {
                    const option = document.createElement('option');
                    option.value = i;
                    option.textContent = i;
                    input_day.appendChild(option);
                }

                break;

            case Imonth == 2:
                if ((Iyear % 4 == 0 && Iyear % 100 != 0) || Iyear % 400 == 0) {
                    for (let i = 1; i <= 29; i++) {
                        const option = document.createElement('option');
                        option.value = i;
                        option.textContent = i;
                        input_day.appendChild(option);
                    }
                } else {
                    for (let i = 1; i <= 28; i++) {
                        const option = document.createElement('option');
                        option.value = i;
                        option.textContent = i;
                        input_day.appendChild(option);
                    }
                }

                break;
        }
    }

    function age_calc() {
        if (input_year.value == '' || input_month.value == '' || input_day.value == '') return;

        const Iage = document.getElementById('age');
        const Iyear = Number(input_year.value);
        const Imonth = Number(input_month.value);
        const Iday = Number(input_day.value);

        if (Imonth > Nmonth) {
            age = Nyear - Iyear - 1;
        } else if (Imonth < Nmonth) {
            age = Nyear - Iyear
        } else {
            if (Iday > Nday) {
                age = Nyear - Iyear - 1;
            } else if (Iday <= Nday) {
                age = Nyear - Iyear
            }
        }

        Iage.value = age;
    }

    function zip_search() {
        const zipcode = Number(input_zip.value);
        const address1 = document.getElementById('address1');
        const address2 = document.getElementById('address2');
        const address3 = document.getElementById('address3');

        fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`)
            .then(res => res.json())
            .then(data => {
                if (data.results) {
                    const result = data.results[0];
                    address1.value = result.address1;
                    address2.value = result.address2;
                    address3.value = result.address3;
                } else {
                    alert('該当する住所が見つかりませんでした');
                }
            })
            .catch(() => alert('住所の取得に失敗しました'));
    }
});



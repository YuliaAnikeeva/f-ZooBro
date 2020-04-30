<template>
    <div class="container">
        <ul class="progressbar">
            <li class="completed">Выберите <br> формат заказа</li>
            <li class="active">Данные <br> питомца</li>
            <li>Персональные <br> данные</li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'ProgresBar'
  }
</script>

<style lang="scss" scoped>
    .container {
        width: 100%;
    }

    .progressbar {
        display: flex;
        font-size: 10px;
    }

    .progressbar li {
        list-style: none;
        flex: 1;
        position: relative;
        text-align: center;
        cursor: pointer;
        color: #2c3e50 !important;
    }

    .progressbar li:before {
        content: '';
        width: 14px;
        height: 14px;
        line-height: 25px;
        border: 2px solid #bdbdbd;
        border-radius: 100%;
        display: block;
        text-align: center;
        margin: 0 auto 10px auto;
        background-color: #fff;
        padding: 5px;
    }

    .progressbar li:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #bdbdbd;
        top: 13px;
        left: -50%;
        z-index: -1;
    }

    .progressbar li:first-child:after {
        content: none;
    }

    .progressbar li.completed {
        color: #2289b5;
    }

    .progressbar li.completed:before {
        border-color: #2289b5;
        background: #2289b5;
    }

    .progressbar li.completed + li:after {
        background-color: #2289b5;
    }

    .progressbar li.active::before {
        background-color: #2289b5;
        background-clip: content-box;
        border-color: #2289b5;
    }
</style>

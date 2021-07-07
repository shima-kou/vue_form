<template>
  <div class="form-container">
    <div class="form-box">
      <div class="title-wrap">
        <span class="step">STEP1</span>
        <h1 class="title">お客様の情報を入力してください。</h1>
      </div>
      <div class="input-wrapper">
        <div class="box">
          <h2 class="inquiry-title"><span class="line">性別</span></h2>
          <label for="man"> <input id="man" type="radio" name="gender" /> 男性 </label>

          <label for="woman"> <input id="woman" type="radio" name="gender" /> 女性 </label>
        </div>

        <div class="box">
          <h2 class="inquiry-title"><span class="line">生年月日</span></h2>
          <div class="c-select-wrap">
            <select id="year_s" name="yeaar">
              <option value="1971年 (昭和46年)">1971年 （昭和46年）</option>
              <option value="1972年 (昭和47年)">1972年 （昭和47年）</option>
              <option value="1973年 (昭和48年)">1973年 （昭和48年）</option>
              <option value="1974年 (昭和49年)">1974年 （昭和49年）</option>
              <option value="1975年 (昭和50年)">1975年 （昭和50年）</option>
              <option value="1976年 (昭和51年)">1976年 （昭和51年）</option>
              <option value="1977年 (昭和52年)">1977年 （昭和52年）</option>
              <option value="1978年 (昭和53年)">1978年 （昭和53年）</option>
              <option value="1979年 (昭和54年)">1979年 （昭和54年）</option>
              <option value="1980年 (昭和55年)">1980年 （昭和55年）</option>
              <option value="1981年 (昭和56年)">1981年 （昭和56年）</option>
              <option value="1982年 (昭和57年)">1982年 （昭和57年）</option>
              <option value="1983年 (昭和58年)">1983年 （昭和58年）</option>
              <option value="1984年 (昭和59年)">1984年 （昭和59年）</option>
              <option value="1985年 (昭和60年)">1985年 （昭和60年）</option>
              <option value="1986年 (昭和61年)">1986年 （昭和61年）</option>
              <option value="1987年 (昭和62年)">1987年 （昭和62年）</option>
              <option value="1988年 (昭和63年)">1988年 （昭和63年）</option>
              <option value="1989年 (平成元年)">1989年 （平成元年）</option>
              <option value="1990年 (平成2年)">1990年 （平成2年）</option>
              <option value="1991年 (平成3年)">1991年 （平成3年）</option>
              <option value="1992年 (平成4年)">1992年 （平成4年）</option>
              <option value="1993年 (平成5年)">1993年 （平成5年）</option>
              <option value="1994年 (平成6年)">1994年 （平成6年）</option>
              <option value="1995年 (平成7年)">1995年 （平成7年）</option>
              <option value="1996年 (平成8年)">1996年 （平成8年）</option>
              <option value="1997年 (平成9年)">1997年 （平成9年）</option>
              <option value="1998年 (平成10年)">1998年 （平成10年）</option>
              <option value="1999年 (平成11年)">1999年 （平成11年）</option>
              <option value="2000年 (平成12年)">2000年 （平成12年）</option>
              <option value="2001年 (平成13年)">2001年 （平成13年）</option>
              <option value="2002年 (平成14年)">2002年 （平成14年）</option>
              <option value="2003年 (平成15年)">2003年 （平成15年）</option>
              <option value="2004年 (平成16年)">2004年 （平成16年）</option>
              <option value="2005年 (平成17年)">2005年 （平成17年）</option>
              <option value="2006年 (平成18年)">2006年 （平成18年）</option>
              <option value="2007年 (平成19年)">2007年 （平成19年）</option>
              <option value="2008年 (平成20年)">2008年 （平成20年）</option>
              <option value="2009年 (平成21年)">2009年 （平成21年）</option>
              <option value="2010年 (平成22年)">2010年 （平成22年）</option>
              <option value="2011年 (平成23年)">2011年 （平成23年）</option>
              <option value="2012年 (平成24年)">2012年 （平成24年）</option>
              <option value="2013年 (平成25年)">2013年 （平成25年）</option>
              <option value="2014年 (平成26年)">2014年 （平成26年）</option>
              <option value="2015年 (平成27年)">2015年 （平成27年）</option>
              <option value="2016年 (平成28年)">2016年 （平成28年）</option>
              <option value="2017年 (平成29年)">2017年 （平成29年）</option>
              <option value="2018年 (平成30年)">2018年 （平成30年）</option>
              <option value="2019年 (令和元年)">2019年 （令和元年）</option>
              <option value="2020年 (令和2年)">2020年 （令和2年）</option>
              <option value="2021年 (令和3年)">2021年 （令和3年）</option>
            </select>
            年
          </div>

          <div class="c-select-wrap">
            <select id="month_s" name="month">
              <option value="">-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            月
          </div>

          <div class="c-select-wrap">
            <select id="day_s" name="day">
              <option value="">-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            日
          </div>
        </div>
      </div>
    </div>
    <div class="link-wrap justify-content-center">
      <linkButton to="/step2/" message="次へ進む"></linkButton>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import linkButton from '@/components/linkButton.vue';

export default {
  name: 'STEP1',
  components: {
    linkButton,
  },
};
</script>

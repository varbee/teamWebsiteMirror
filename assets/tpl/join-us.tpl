<!-- 加入我们 -->
<div class="join">
	<h2>Join us</h2>
	<form action="" method="post" id="join-us">
		<!-- 个人信息 -->
		<div class="information">
			<div class="label-box">
				<label>姓名</label>
	            <label>性别</label>
	            <label>学校</label>
	            <label>院系/专业/年级</label>
	            <label>联系电话</label>
	            <label>报名组别</label>
			</div>
			<div class="input-box">
				<div class="row">
	                <input type="text" name="name" id="name" required>
	            </div>
	            <div class="row">
	                <label class="sex">
	                	<input name="gender" id="gender_male" value="male" checked="checked" type="radio" required><span class="radio">男</span>
	                </label>
	                <label class="sex">
	                    <input name="gender"  id="gender_female" value="female" type="radio" required><span>女</span>
	                </label>
	            </div>
	            <div class="row">
	                <input type="text" name="school" id="school" required>
	            </div>
	            <div class="row" >
	                <input type="text" placeholder="16字以内" id="grade" name="grade" required>
	            </div>
	            <div class="row" >
	                <input type="tel" id="tel" name="tel" required>
	            </div>
	            <div class="row" >
	            	<select name="group" id="group" required>
	                    <option value="">市场运营</option>
	                    <option value="">产品策划</option>
	                    <option value="">视觉设计</option>
	                    <option value="">技术研发部（前端）</option>
	                    <option value="">技术研发部（后台）</option>
	                    <option value="">技术研发部（移动）</option>
	                </select>
	            </div>
			</div>
		</div>
		<!-- 自我介绍 -->
		 <div class="self-introduce">
            <h3>个人简介</h3>
            <textarea name="selfIntro" id="selfIntro" placeholder="自我介绍/组别意向的来由/个人优势等等" required></textarea>
            <div>
            	 <input type="submit" value="报名" id="submit">
            </div>
           
        </div>
	</form>
</div>

<!-- 底栏 -->
<div class="footer">
	<div class="footer-con">
		<div class="footer-img">
			<a href="#"><img src="../assets/images/hxq_weiboc.png"></a>
			<a href="javascript:void(0);"><img class="hxq_footer_wechat" src="../assets/images/hxq_wechat.png"></a>
			<span><img class="hxq_footer_code" src="../assets/images/hxq_ercode.png" alt="二维码"></span> 
		</div>
					
		<ul>
			<li>Contact us</li>
			<li>400-8388-719</li>
			<li><a href="">contact@campussay.com</a></li>
			<li>渝ICP备16001027号</li>
		</ul>
	</div>
</div>
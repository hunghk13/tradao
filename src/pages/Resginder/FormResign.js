
import React from 'react';
import { Link } from 'react-router-dom';


const FormLogin = () => {
    return (
        <div className='section-login'>
            <div className='container'>
                <div className='col-sm-8 col-sm-offset-2'>
                    <div className='login-form-warp clearfix'>
                        <form acceptCharset='UTF-8' action='/login' id="customer_login" method='post'>
                            <input name='form_type' type='hidden'></input>
                            <div className='col-sm-10 col-sm-offset-1'>
                                <div className='col-sm-12'>
                                    <h2>Đăng nhập</h2>

                                    <input type="text" name="customer[last_name]" id="last_name" class="input-focus" placeholder="Họ"></input>

                                    <input type="text" name="customer[first_name]" id="first_name" class="input-focus" placeholder="Tên"></input>



                                    <input type='text' name='customer[email]' placeholder='Email' className='input-focus email-login'>

                                    </input>
                                    <input type='password' name='customer[password]' placeholder='Password' className='input-focus password-login'>

                                    </input>
                                </div>

                               
                                <div className='sign-up col-sm-7 clearfix'>
                                    <span>Bạn đã có tài khoản ? </span>
                                    <Link to='/login'>Đăng nhập ngay</Link>
                                </div>

                                <div className='col-sm-12 submit-btn'>
                                    <input type='submit' className='taberna-btn bg-color' value='Đăng ký'></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FormLogin;

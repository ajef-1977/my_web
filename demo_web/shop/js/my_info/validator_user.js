$(document).ready(function() {
    // Generate a simple captcha
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    $('#defaultForm').bootstrapValidator({
//        live: 'disabled',
        message: '此值不是有效的',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: '此栏不可空白'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: '此栏不可空白'
                    }
                }
            },
            username: {
                message: '无效的格式',
                validators: {
                    notEmpty: {
                        message: '此栏不可空白'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
						message: '使用者名称必须使用最少6个英文字'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '使用者名只能包含字母与数字'
                    },

                    different: {
                        field: 'password',
                        message: '使用者与密码不能设一致'
                    },
                },
            },
            email: {
                validators: {
                    emailAddress: {
                        message: '无效的格式'
                    },
					notEmpty: {
                        message: '此栏不可空白'
                    },
                },
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '此栏不可空白'
                    },
                    identical: {
                        field: 'confirmPassword',
                        message: '请记得填写确认密码'
                    },
                    different: {
                        field: 'username',
                        message: '与密码不一致'
                    },
					stringLength: {
                        min: 6,
                        max: 30,
						message: '密码必须使用最少6个英文字'
                    },
					regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '使用者名只能包含字母与数字'
                    },
                },
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: '此栏不可空白'
                    },
                    identical: {
                        field: 'password',
                        message: '密码不一致'
                    },
                    different: {
                        field: 'username',
                        message: '密码不一致'
                    },
					stringLength: {
                        min: 6,
                        max: 30,
						message: '密码必须使用最少6个英文字'
                    },
					regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '使用者名只能包含字母与数字'
                    },
                },
            },
            birthday: {
                validators: {
                    date: {
                        format: 'YYYY/MM/DD',
                        message: '无效的格式'
                    },
                },
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: '性别必须选择'
                    },
                },
            },
            'languages[]': {
                validators: {
                    notEmpty: {
                        message: '请指定一种语系'
                    },
                },
            },
            'programs[]': {
                validators: {
                    choice: {
                        min: 2,
                        max: 4,
                        message: 'Please choose 2 - 4 programming languages you are good at'
                    }
                }
            },
            captcha: {
                validators: {
                    callback: {
                        message: '答案错误',
                        callback: function(value, validator) {
                            var items = $('#captchaOperation').html().split(' '), sum = parseInt(items[0]) + parseInt(items[2]);
                            return value == sum;
                        },
                    },
                },
            },
        },
    });

    // Validate the form manually
    $('#validateBtn').click(function() {
        $('#defaultForm').bootstrapValidator('validate');
    });

    $('#resetBtn').click(function() {
        $('#defaultForm').data('bootstrapValidator').resetForm(true);
    });
});

$(document).ready(function() {
    $('button[data-toggle]').on('click', function() {
        var $target = $($(this).attr('data-toggle'));
        $target.toggle();
        if (!$target.is(':visible')) {
            // Enable the submit buttons in case additional fields are not valid
            $('#contactForm').data('bootstrapValidator').disableSubmitButtons(false);
        }
    });

    $('#contactForm').bootstrapValidator();
});
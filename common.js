$(document).ready(function () {
    $('.view-act').off('click').on('click', function (e) {
        e.preventDefault();
        var btn = $(this);
        var id = btn.data('id');

        $.ajax({
            url: "/AjaxData/ProductView",
            data: { id: id },
            type: "POST",
            dataType: "JSON",
            success: function (respone) {

                $("#view-link").removeClass("hidden");
            }
        });
    });
    $('.product-act1').off('click').on('click', function (e) {
        e.preventDefault();
        var btn = $(this);
        var id = btn.data('id');

        $.ajax({
            url: "/AjaxData/ProductAvt",
            data: { id: id },
            type: "POST",
            dataType: "JSON",
            success: function (respone) {
                if (respone == true) {
                    btn.html('<i class="fa fa-check-square"></i>');
                }
                else {
                    btn.html('<i class="fa fa-square-o"></i>');
                }
            }
        });
    });
    //$('.product-act1').off('click').on('click', function (e) {
    //    e.preventDefault();
    //    var btn = $(this);
    //    var id = btn.data('id');

    //    $.ajax({
    //        url: "/AjaxData/ProductAvt",
    //        data: { id: id },
    //        type: "POST",
    //        dataType: "JSON",
    //        success: function (respone) {
    //            if (respone == true) {
    //                btn.html('<i class="fa fa-check-square"></i>');
    //            }
    //            else {
    //                btn.html('<i class="fa fa-square-o"></i>');
    //            }
    //        }
    //    });
    //});
    $('.product-act2').off('click').on('click', function (e) {
        e.preventDefault();
        var btn = $(this);
        var id = btn.data('id');

        $.ajax({
            url: "/AjaxData/ProductAvt2",
            data: { id: id },
            type: "POST",
            dataType: "JSON",
            success: function (respone) {
                if (respone == true) {
                    btn.html('<i class="fa fa-check-square"></i>');
                }
                else {
                    btn.html('<i class="fa fa-square-o"></i>');
                }
            }
        });
    });
    $('.product-act3').off('click').on('click', function (e) {
        e.preventDefault();
        var btn = $(this);
        var id = btn.data('id');

        $.ajax({
            url: "/AjaxData/ProductAvt3",
            data: { id: id },
            type: "POST",
            dataType: "JSON",
            success: function (respone) {
                if (respone == true) {
                    btn.html('<i class="fa fa-check-square"></i>');
                }
                else {
                    btn.html('<i class="fa fa-square-o"></i>');
                }
            }
        });
    });
    $('.check-act').off('click').on('click', function (e) {
        e.preventDefault();
        var btn = $(this);
        var id = btn.data('id');
        var url = "/AjaxData/DoctIsFinish";
        $.post(url, {
            Id: id
        }, function (data) {
            if (data == true) {
                alert("Duyệt văn bản thành công!");
                location.reload();
            } else {
                alert("Duyệt văn bản thất bại!");

            }
        });

    });
    $(".word").fancybox({
        //'width': 1300, // or whatever
        'height': 1200,
        'type': 'iframe'
    });
    //truong phong
    $('#btn-senttp').off('click').on('click', function (e) {
        e.preventDefault();
        debugger;
        var id = $("#Doc_Id").val();
        var e = document.getElementById("Doc_HId");
        var hid2 = e.value;
        var accid = document.getElementById("Doc_Acc1Id").value;
        var acc1name = $("#Doc_Acc1Name").val();

        var ToEDate2 = $("#txtToEDate2").val();
        var toPMbs = $("#ddlToPMbs").val();
        var name2 = $("#Doc_HName").val();
        var Content2 = $("#Doc_Content2").val();
        var form = $("#Doc_PForm").val();
        var url = "/AjaxData/SaveToP1";
        $.post(url, {

            HId: hid2,
            Id: id,
            Content2: Content2,
            PForm: form,
            ExDate: ToEDate2,
            HName: name2,
            ToPMbs: toPMbs.toString(),
            Acc1Id: accid,
            Acc1Name: acc1name
            //    Expr1: chkExpr1
        }, function (data) {
            if (data == true) {
                alert("Lưu dữ liệu thành công!");
                location.reload();
            } else {
                alert("Lưu dữ liệu thất bại!");
                $("#rncontent").show();
                $("#rnloading").hide();
            }
        });
    });
    $('#btn-sent2').off('click').on('click', function (e) {
        e.preventDefault();
        var gmbs = $("#ddlToMbs12").val();
        var mbs = $("#ddlToMbs").val();
        var id = $("#Doc_Id").val();
        //alert("D1:" + dd1 + ", D2:" + dd2);

        var url = "/AjaxData/SaveToMbs";
        $.post(url, {
            Id: id,
            ToGMbs: gmbs,
            ToMbs: mbs

        }, function (data) {
            if (data == true) {
                alert("Lưu dữ liệu thành công!");
                location.reload();
            } else {
                alert("Lưu dữ liệu thất bại!");
                $("#rncontent").show();
                $("#rnloading").hide();
            }
        });
    });
    //truong phong
    $('#btn-sent3').off('click').on('click', function (e) {
        e.preventDefault();
        debugger;
        var id = $("#Doc_Id").val();
        var e = document.getElementById("Doc_HId");
        var hid2 = e.value;
        var accid = document.getElementById("Doc_Acc1Id").value;
        var acc1name = $("#Doc_Acc1Name").val();

        var ToEDate2 = $("#txtToEDate2").val();
        var toPMbs = $("#ddlToPMbs").val();
        var name2 = $("#Doc_HName").val();
        var Content2 = $("#Doc_Content2").val();
        var form = $("#Doc_PForm").val();
        /*    alert(toPMbs);*/
        //var chkExpr1 = $('#chkExpr1').is(":checked")
        //if (hid2 <= 0) {
        //    alert("Vui lòng chọn người xử lý!");
        //    return false;
        //}

        var url = "/AjaxData/SaveToP1";
        $.post(url, {

            HId: hid2,
            Id: id,
            Content2: Content2,
            PForm: form,
            ExDate: ToEDate2,
            HName: name2,
            ToPMbs: toPMbs.toString(),
            Acc1Id: accid,
            Acc1Name: acc1name
            //    Expr1: chkExpr1
        }, function (data) {
            if (data == true) {
                alert("Lưu dữ liệu thành công!");
                location.reload();
            } else {
                alert("Lưu dữ liệu thất bại!");
                $("#rncontent").show();
                $("#rnloading").hide();
            }
        });
    });
    $('#btn-sent4').off('click').on('click', function (e) {
        e.preventDefault();
        debugger;
        var formdata = new FormData(); //FormData object
        var fileInput = document.getElementById('UploadOFile');
        //Iterating through each files selected in fileInput
        for (i = 0; i < fileInput.files.length; i++) {
            //Appending each file to FormData object
            formdata.append(fileInput.files[i].name, fileInput.files[i]);
        }
        var id = $("#Doc_Id").val();
        var Content2 = $("#Doc_FContent5").val();
        //var Content2 = $("#Doc_FContent3").val();FContent5
        var chkExpr1 = $('#Expr1').is(":checked")

        //var url = "/AjaxData/SaveToP1?fid=" + id + "&&content=" + Content2 + "&&ckecp=" + chkExpr1;
        var url = "/AjaxData/SaveToP2?fid=" + id + "&&content=" + Content2 + "&&ckecp=" + chkExpr1;
        //var url = "/AjaxData/SaveToP6?fid=" + id + "&&content=" + Content2 + "&&ckecp=" + chkExpr1;
        $.ajax({
            type: "POST",
            url: url,
            data: formdata,
            dataType: 'json',
            contentType: false,
            processData: false,
            success: function (response) {

                if (response == true) {
                    alert("Lưu dữ liệu thành công!");
                    location.reload();
                } else {
                    alert("Lưu dữ liệu thất bại!");
                    location.reload();
                }
            },
            error: function (error) {
                alert("Lưu dữ liệu thất bại!");
                location.reload();
            }
        });

    });
    $('#btn-sent71').off('click').on('click', function (e) {
        debugger;
        e.preventDefault();
        var formdata = new FormData(); //FormData object
        var fileInput = document.getElementById('UploadOFile71');
        for (i = 0; i < fileInput.files.length; i++) {
            formdata.append(fileInput.files[i].name, fileInput.files[i]);
        }
        var id = $("#Doc_Id").val();
        var Content2 = $("#Doc_FContent71").val();
        var chkExpr1 = $('#Expr7').is(":checked")

        if (parseInt(id) > 0) {
            var url = "/AjaxData/SaveToP71?sid=" + parseInt(id) + "&&scontent=" + Content2 + "&&sckecp=" + chkExpr1;
            $.ajax({
                type: "POST",
                url: url,
                data: formdata,
                dataType: 'json',
                contentType: false,
                processData: false,
                success: function (response) {

                    if (response == true) {
                        alert("Lưu dữ liệu thành công!");
                        location.reload();
                    } else {
                        alert("Lưu dữ liệu thất bại!!!");
                        location.reload();
                    }
                },
                error: function (error) {
                    alert("Error Lưu dữ liệu thất bại!");
                    location.reload();
                }
            });

        }


    });
    $('#btn-sent6').off('click').on('click', function (e) {
        e.preventDefault();
        var formdata = new FormData(); //FormData object
        var fileInput = document.getElementById('UploadOFile1');
        for (i = 0; i < fileInput.files.length; i++) {
            formdata.append(fileInput.files[i].name, fileInput.files[i]);
        }
        var id = $("#Doc_Id").val();
        var Content2 = $("#Doc_FContent4").val();
        var chkExpr1 = $('#Expr2').is(":checked")

        /*  var url = "/AjaxData/SaveToP6";*/
        var url = "/AjaxData/SaveToP6?sid=" + id + "&&scontent=" + Content2 + "&&sckecp=" + chkExpr1;
        $.ajax({
            type: "POST",
            url: url,
            data: formdata,
            dataType: 'json',
            contentType: false,
            processData: false,
            success: function (response) {

                if (response == true) {
                    alert("Lưu dữ liệu thành công!");
                    location.reload();
                } else {
                    alert("Lưu dữ liệu thất bại!");
                    location.reload();
                }
            },
            error: function (error) {
                alert("Lưu dữ liệu thất bại!");
                location.reload();
            }
        });

    });
    $('#btn-sent').off('click').on('click', function (e) {
        e.preventDefault();
        var name2 = $("#Doc_HName2").val();
        var id = $("#Doc_Id").val();
        var content3 = $("#DocFContent3").val();
        var e = document.getElementById("Doc_HId2");
        var hid1 = e.value;

        var url = "/AjaxData/SaveProgess";
        $.post(url, {
            Id: id,
            HId2: hid1,
            HName2: name2,
            Content2: content3

        }, function (data) {
            if (data == true) {
                alert("Lưu dữ liệu thành công!");
                location.reload();
            } else {
                alert("Lưu dữ liệu thất bại!");
                $("#rncontent").show();
                $("#rnloading").hide();
            }
        });

    });
    //Ng xử lý cùng
    $('#btn-sent5').off('click').on('click', function (e) {
        e.preventDefault();
        var name2 = $("#Doc_HName3").val();
        var id = $("#Doc_Id").val();
        var content3 = $("#DocFContent4").val();
        var e = document.getElementById("Doc_HId3");
        var hid3 = e.value;
        var Date3 = $("#txtToEDate3").val();
        var toPMbs = $("#ddlToPMbs5").val();

        // if (hid3 <= 0 ) {
        //    alert("Vui lòng chọn người xử lý cùng!");
        //    return false;
        //}

        var url = "/AjaxData/SaveToP3";

        $.post(url, {
            Id: id,
            HId3: hid3,
            HName3: name2,
            Content3: content3,
            ToPMbs: toPMbs.toString(),
            TEDate3: Date3
        }, function (data) {
            if (data == true) {
                alert("Lưu dữ liệu thành công!");
                location.reload();
            } else {
                alert("Lưu dữ liệu thất bại!");
            }
        });
    });
    $('#btn-sent7').off('click').on('click', function (e) {
        e.preventDefault();
        var name4 = $("#Doc_HName4").val();
        var id = $("#Doc_Id").val();
        var content4 = $("#DocFContent5").val();
        var e = document.getElementById("Doc_HId4");
        var hid4 = e.value;

        if (hid4 <= 0) {
            alert("Vui lòng chọn người tiếp nhận!");
            return false;
        }
        var url = "/AjaxData/SaveToP7";

        $.post(url, {
            Id: id,
            HId4: hid4,
            HName4: name4,
            Content4: content4

        }, function (data) {
            if (data == true) {
                alert("Lưu dữ liệu thành công!");
                location.reload();
            } else {
                alert("Lưu dữ liệu thất bại!");
            }
        });
    });


    //CIG
    $("#ddlCountry").change(function () {
        var id = $('#ddlCountry').val() === "" ? "" : $('#ddlCountry').val();
        if (parseInt(id) > 0) {
            $.get('/AjaxData/GetCOrgs/' + id, function (data) {

                $("#ddlOrg").empty().append(data).trigger('change');
            });
        } else {
            $("#ddlOrg").empty().append('<option value="">- Tổ chức -</option>').trigger('change');
        }
    });
    //$("#ddlCountry").change(function () {
    //    var id = $('#ddlCountry').val() === "" ? "" : $('#ddlCountry').val();
    //    if (parseInt(id) > 0) {
    //        $.get('/AjaxData/GetCOrgs/' + id, function (data) {

    //            $("#ddlOrg").empty().append(data).trigger('change');
    //        });
    //    } else {
    //        $("#ddlOrg").empty().append('<option value="">- Tổ chức -</option>').trigger('change');
    //    }
    //});
    $("#GMbs_OId").change(function () {
        var id = $('#GMbs_OId').val() === "" ? "" : $('#GMbs_OId').val();

        if (parseInt(id) > 0) {
            $.get('/AjaxData/GetByOrg/' + id, function (data) {
                const _sData = DOMPurify.sanitize(data);
                $("#ddlUids").empty().append(_sData).trigger('change');
            });
        } else {
            $("#ddlUids").empty().append('<option value="">- Tổ chức -</option>').trigger('change');
        }
    });
    $('#btn-sentfile').off('click').on('click', function (e) {
        e.preventDefault();
        var formdata = new FormData(); //FormData object
        var fileInput = document.getElementById('Uf_28');
        for (i = 0; i < fileInput.files.length; i++) {
            formdata.append(fileInput.files[i].name, fileInput.files[i]);
        }
        var id = $('#afstkid').val();// @Model.STk.Id;


        /*  var url = "/AjaxData/SaveToP6";*/
        var url = "/AjaxData/SaveToStkfile?id=" + id;
        $.ajax({
            type: "POST",
            url: url,
            data: formdata,
            dataType: 'json',
            contentType: false,
            processData: false,
            success: function (response) {

                if (response == true) {
                    alert("Lưu dữ liệu thành công!");
                    location.reload();
                } else {
                    alert("Lưu dữ liệu thất bại!");
                    location.reload();
                }
            },
            error: function (error) {
                alert("Lưu dữ liệu thất bại!");
                location.reload();
            }
        });

    });
});
function RNDellLd(ids) {
    var id = parseInt(ids);
    if (id > 0) {
        var answer = window.confirm("Bạn muốn xóa các dữ liệu này?");
        if (answer) {
            $.get('/AjaxData/DelLd?id=' + id, function (data) {
                if (data == true) {
                    alert("Xóa thành công !");
                    window.location.reload();
                }
                else {
                    alert("Dữ liệu không tồn tại hoặc đã bị xóa !");
                }
                return false;
            });
        }
    }
    else {
        alert("Dữ liệu không tồn tại hoặc đã bị xóa !");
    }

}
function DeleteFileCPerson(id, fileName, i) {
    var cls = $('#file_' + i);
    $.ajax({
        url: "/AjaxData/DeleteFile",
        data: { id: id, file: fileName },
        dataType: "JSON",
        type: "POST",
        success: function (response) {
            console.log(response);
            cls.hide();
        }
    })
}
//function DeleteFile(id, fileName, i) {
//    var cls = $('#file_' + i);
//    $.ajax({
//        url: "/AjaxData/DeleteFile",
//        data: { id: id, file: fileName },
//        dataType: "JSON",
//        type: "POST",
//        success: function (response) {
//            console.log(response);
//            cls.hide();
//        }
//    })
//}
function getPYs(id) {
    id = parseInt(id);
    $.ajax({
        url: "/CProject/GetPYs/",
        data: { id: id },
        dataType: "JSON",
        type: "POST",
        success: function (res) {
            $("#append").html(res.data);
        }
    })
}
function getCAPYsCProA(id) {
    id = parseInt(id);
    $.ajax({
        url: "/CProA/GetCAPies/",
        data: { id: id },
        dataType: "JSON",
        type: "POST",
        success: function (res) {
            $("#append").html(res.data);
        }
    })
}
function getCAPYs(id) {
    id = parseInt(id);
    $.ajax({
        url: "/CProL/GetCLPies/",
        data: { id: id },
        dataType: "JSON",
        type: "POST",
        success: function (res) {
            const _sData = DOMPurify.sanitize(res.data);
            $("#append").html(_sData);
        }
    })
}
function ShowModalCIG(id) {
    id = parseInt(id);
    //var tag = "popupdata";
    $.ajax({
        url: "/CIG/CIGPopUp/",
        data: { id: id },
        type: "POST",
        success: function (data) {
            const _sData = DOMPurify.sanitize(data);
            $('#popupdata').html(_sData);
            $('#ShowPeople').modal('show');
        }
    })
}
function CigNumber(id) {

    id = parseInt(id);

    $.ajax({
        url: "/AjaxData/CigNumber/",
        data: { id: id },
        type: "POST",
        success: function (result) {
            const _sDatacnum = DOMPurify.sanitize(result.cnum);
            const _sDataCname = DOMPurify.sanitize(result.Cname);
            $('#cignumps_' + id).html(_sDatacnum);
            $('#cigname_' + id).html(_sDataCname);
        }
    })
}
function ShowModalcog(id) {

    id = parseInt(id);
    $.ajax({
        url: "/COG/COGPopUp/",
        data: { id: id },
        type: "POST",
        success: function (data) {
            const _sData = DOMPurify.sanitize(data);
            $('#popupdata').html(_sData);
            $('#ShowPeople').modal('show');
        }
    })
}
function CogNumber(id) {

    id = parseInt(id);

    $.ajax({
        url: "/AjaxData/CogNumber/" + id,
        data: { id: id },
        type: "POST",
        success: function (result) {
            const _sDatacnum = DOMPurify.sanitize(result.cnum);
            const _sDataCname = DOMPurify.sanitize(result.Cname);
            $('#cognumps_' + id).html(_sDatacnum);
            $('#cogname_' + id).html(_sDataCname);
        }
    })
}
function ShowModalCpl(id) {
    id = parseInt(id);
    $.ajax({
        url: "/CProL/CProLPopUp/",
        data: { id: id },
        type: "POST",
        success: function (data) {
            const _sData = DOMPurify.sanitize(data);
            $('#popupdata').html(_sData);
            $('#dialogBroker').modal('show');
        }
    })
}
function ShowModal(id) {
    id = parseInt(id);
    $.ajax({
        url: "/CCoo/RNShowMoreInfo/",
        data: { id: id },
        type: "POST",
        success: function (data) {
            const _sData = DOMPurify.sanitize(data);
            $('#popupdata').html(_sData);
            $('#dialogBroker').modal('show');
        }
    })
}
function ShowProcess3(id) {
    id = parseInt(id);
    $('#Process3').modal('show');

}
//function ShowProcess3(id) {
//    id = parseInt(id);
//    $('#Process3').modal('show');

//}
function Viewact(id) {
    id = parseInt(id);
    $.ajax({
        url: "/AjaxData/ProductView",
        data: { id: id },
        type: "POST",
        dataType: "JSON",
        success: function (respone) {
        }
    });
}
function Viewact2(id) {
    id = parseInt(id);
    $.ajax({
        url: "/AjaxData/ProductView",
        data: { id: id },
        type: "POST",
        dataType: "JSON",
        success: function (respone) {

            location.reload();
        }
    });
    $.ajax({
        url: "/AjaxData/ProductAvt2",
        data: { id: id },
        type: "POST",
        dataType: "JSON",
        success: function (respone) {

            location.reload();
        }
    });

}
function Viewact3(id) {
    id = parseInt(id);
    $.ajax({
        url: "/AjaxData/ProductView",
        data: { id: id },
        type: "POST",
        dataType: "JSON",
        success: function (respone) {

            location.reload();
        }
    });
}
//function Viewact3(id) {
//    id = parseInt(id);
//    $.ajax({
//        url: "/AjaxData/ProductView",
//        data: { id: id },
//        type: "POST",
//        dataType: "JSON",
//        success: function (respone) {

//            location.reload();
//        }
//    });

//}
//function Viewact3(id) {
//    id = parseInt(id);
//    $.ajax({
//        url: "/AjaxData/ProductView",
//        data: { id: id },
//        type: "POST",
//        dataType: "JSON",
//        success: function (respone) {

//            location.reload();
//        }
//    });


//}

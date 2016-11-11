
    function searchAllMember() {
        $.ajax({
            url : "http://localhost:8080/bank/selectAllMember",
            type : "GET",
            dataType : "jsonp",
            jsonp : "callback",
            timeout : 3000,
            data : {
            },
            success : function (result) {
                alert("Search success");
                $("#memberAll").empty();
                $("#memberDetail").empty();
                for(var i =0;i<result.length;i++){

                    var tr = $("<tr></tr>");
                    var memberId = $("<td></td>").text(result[i].memberId);
                    var memberName = $("<td></td>").text(result[i].memberName);
                    var memberAccount = $("<td></td>").text(result[i].memberAccount);
                    var memberBalance = $("<td></td>").text(result[i].memberBalance);

                    tr.append(memberId);
                    tr.append(memberName);
                    tr.append(memberAccount);
                    tr.append(memberBalance);

                    $("#memberAll").append(tr);

                }
            },
            error : function () {

                alert("fail");
                
            }
        });
    }

    function searchMember() {
        if (event.keyCode == 13){
            var id = $("#memberId").val();
            $.ajax({
                url : "http://localhost:8080/bank/selectMember",
                type : "GET",
                dataType : "jsonp",
                jsonp : "callback",
                timeout : 3000,
                data : {
                    id : id
                },
                success : function (result) {
                    alert("Search success");
                    $("#memberDetail").empty();
                    $("#memberAll").empty();
                    for(var i =0;i<result.length;i++){

                        var tr = $("<tr></tr>");
                        var memberId = $("<td></td>").text(result[i].memberId);
                        var memberName = $("<td></td>").text(result[i].memberName);
                        var memberAccount = $("<td></td>").text(result[i].memberAccount);
                        var memberBalance = $("<td></td>").text(result[i].memberBalance);

                        tr.append(memberId);
                        tr.append(memberName);
                        tr.append(memberAccount);
                        tr.append(memberBalance);

                        $("#memberDetail").append(tr);

                    }
                },
                error : function () {

                    alert("fail");

                }
            });

        }
    }

    function inputBalance() {


        var id = $("#depositMemberId").val();
        var money = $("#depositMemberBalance").val();

        $.ajax({
            url : "http://localhost:8080/bank/deposit",
            type : "GET",
            dataType : "jsonp",
            jsonp : "callback",
            timeout : 3000,
            data : {
                memberId : id,
                memberBalance : money
            },
            success : function (result) {
                if(result) {
                    alert("Deposit success");
                    $("#depositMemberBalance").val("");
                    $("#depositMemberId").val("");
                } else {
                    alert("Deposit fail");

                    $("#depositMemberBalance").val("");
                    $("#depositMemberId").val("");
                }

            },
            error : function () {

                alert("Server load fail");

            }
        });
    }

    function withrawBalance() {

        var id = $("#withdrawMemberId").val();
        var money = $("#withdrawMemberBalance").val();

        $.ajax({
            url : "http://localhost:8080/bank/withdraw",
            type : "GET",
            dataType : "jsonp",
            jsonp : "callback",
            timeout : 3000,
            data : {
                memberId : id,
                memberBalance : money
            },
            success : function (result) {
                if(result) {
                    alert("withdraw success");

                    $("#withdrawMemberBalance").val("");
                    $("#withdrawMemberId").val("");
                } else {
                    alert("withdraw fail (잔액을 확인하세요)");

                    $("#withdrawMemberBalance").val("");
                    $("#withdrawMemberId").val("");
                }

            },
            error : function () {

                alert("Server load fail");

            }
        });
    }
    
    function transferBalance() {
        var money = $("#transferBalance").val();
        var sendid = $("#sendMemberId").val();
        var receiveid = $("#receiveMemberId").val();

        $.ajax({
            url : "http://localhost:8080/bank/transfer",
            type : "GET",
            dataType : "jsonp",
            jsonp : "callback",
            timeout : 3000,
            data : {
                sendMemberId : sendid,
                receiveMemberId : receiveid,
                transferBalance : money
            },
            success : function (result) {
                if(result) {
                    alert("transfer success");

                    $("#transferBalance").val("");
                    $("#sendMemberId").val("");
                    $("#receiveMemberId").val("");
                } else {
                    alert("transfer fail ");
                }

            },
            error : function () {

                alert("Server load fail");

                $("#transferBalance").empty();
                $("#sendMemberId").empty();
                $("#receiveMemberId").empty();

            }
        });
    }
    
    function checkMember() {
        var id = $("#checkMemberId").val();
        $.ajax({
            url : "http://localhost:8080/bank/checkMember",
            type : "GET",
            dataType : "jsonp",
            jsonp : "callback",
            timeout : 3000,
            data : {
                id : id
            },
            success : function (result) {
                alert("Search success");
                $("#accountSel").val("");
                for(var i =0;i<result.length;i++){

                    var tr = $("<tr></tr>");
                    var kind = $("<td></td>").text(result[i].kind);
                    var money = $("<td></td>").text(result[i].money);

                    tr.append(kind);
                    tr.append(money);

                    $("#accountSel").append(tr);

                }
            },
            error : function () {

                alert("fail");

            }
        });
    }

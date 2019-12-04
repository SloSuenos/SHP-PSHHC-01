Public Class GetUserInfo
    Implements System.Web.IHttpHandler

    Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Using servercontext As ServerApplicationContext = ServerApplicationContext.CreateContext()
            Dim UserInfo = CStr(servercontext.Application.User.HasPermission(Admins)) & "," & LCase(Replace(servercontext.Application.User.Name, "PSHHC\", "")) & "," & servercontext.Application.User.FullName
            context.Response.ContentType = "text/plain"
            context.Response.Write(UserInfo)
        End Using
    End Sub

    ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class
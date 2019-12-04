
Namespace LightSwitchApplication

    Public Class DailyActivityLog

        Private Sub c_Date_Validate(results As EntityValidationResultsBuilder)
            If Me.c_Date > DateTime.Today Then
                results.AddEntityError("Date cannot be later than today")
            End If
        End Sub
    End Class

End Namespace

Imports System.Text.RegularExpressions
Namespace LightSwitchApplication

    Public Class IntakeForm
        Private Sub HouseHoldNumber_Validate(results As EntityValidationResultsBuilder)
            If Me.HouseHoldNumber <> "" Then
                Dim pattern = "^(?:(?:[+\-]?\$?)|(?:\$?[+\-]?))?(?:(?:\d{1,3}(?:(?:,\d{3})|(?:\d))*(?:\.(?:\d*|\d+[eE][+\-]\d+))?)|(?:\.\d+(?:[eE][+\-]\d+)?))$"
                If Not Regex.IsMatch(Me.HouseHoldNumber, pattern) Then
                    results.AddEntityError("House Hold # must be numeric")

                End If
            End If
        End Sub

        Private Sub c_Property_Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.c_Property) Then
                results.AddEntityError("Property cannot be empty")
            End If

        End Sub
        Private Sub Unit__Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.Unit_) Then
                results.AddEntityError("Unit # cannot be empty")
            End If
        End Sub
        Private Sub DateCaseOpened_Validate(results As EntityValidationResultsBuilder)
            If Me.DateCaseOpened > DateTime.Today Then
                results.AddEntityError("Date Case Opened cannot be later than today")
            End If

        End Sub

        Private Sub BirthDate_Validate(results As EntityValidationResultsBuilder)
            If Me.BirthDate > DateTime.Today Then
                results.AddEntityError("Birth Date cannot be later than today")
            End If

        End Sub

        Private Sub DateCaseClosed_Validate(results As EntityValidationResultsBuilder)
            If Me.DateCaseClosed > DateTime.Today Then
                results.AddEntityError("Date Case Closed cannot be later than today")
            End If
        End Sub

        Private Sub LastName_Validate(results As EntityValidationResultsBuilder)
            If Not String.IsNullOrEmpty(Me.LastName) Then
                Me.LastName = Char.ToUpper(Me.LastName(0)) + Me.LastName.Substring(1)
            End If

        End Sub

        Private Sub FirstName_Validate(results As EntityValidationResultsBuilder)
            If Not String.IsNullOrEmpty(Me.FirstName) Then
                Me.FirstName = Char.ToUpper(Me.FirstName(0)) + Me.FirstName.Substring(1)
            End If

        End Sub
        Private Sub Ethnicity2_Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.Ethnicity2) Then
                results.AddPropertyError("Ethnicity cannot be empty")
            End If
        End Sub

        Private Sub Race_Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.Race) Then
                results.AddPropertyError("Race cannot be empty")
            End If
        End Sub

        'Private Sub ServiceProvider1_Validate(results As EntityValidationResultsBuilder)
        '    If IsNothing(Me.ServiceProvider1) Then
        '        results.AddPropertyError("Service Provider cannot be empty")
        '    End If

        'End Sub
        Private Sub ReferralType_Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.ReferralType) Then
                results.AddPropertyError("Referral Type cannot be empty")
            End If
        End Sub

        Private Sub ReferralSource_Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.ReferralSource) Then
                results.AddPropertyError("Referral Source cannot be empty")
            End If

        End Sub

        Private Sub DisabilityStatus_Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.DisabilityStatus) Then
                results.AddPropertyError("Disability Status cannot be empty")
            End If
        End Sub

        Private Sub DisablityCatagory_Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.DisablityCatagory) Then
                results.AddPropertyError("Disablity Catagory cannot be empty")
            End If
        End Sub

        Private Sub DisabilityRequiresAssistance_Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.DisabilityRequiresAssistance) Then
                results.AddPropertyError("Disability Requires Assistance cannot be empty")
            End If
        End Sub

        Private Sub SupplementalNutritionAssistanceProgram_Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.SupplementalNutritionAssistanceProgram) Then
                results.AddPropertyError("Supplemental Nutrition Assistance Program cannot be empty")
            End If
        End Sub

        Private Sub TemporaryAssistanceToNeedyFamilies_Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.TemporaryAssistanceToNeedyFamilies) Then
                results.AddPropertyError("Temporary Assistance To Needy Families cannot be empty")
            End If

        End Sub

        Private Sub SupplementalSecurityIncome_Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.SupplementalSecurityIncome) Then
                results.AddPropertyError("Supplemental Security Income cannot be empty")
            End If
        End Sub

        Private Sub SocialSecurityDisabilityInsurance_Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.SocialSecurityDisabilityInsurance) Then
                results.AddPropertyError("Social Security Disability Insurance cannot be empty")
            End If
        End Sub

        Private Sub SubstanceAbuseTreatment_Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.SubstanceAbuseTreatment) Then
                results.AddPropertyError("Substance Abuse Treatment cannot be empty")
            End If
        End Sub

        Private Sub PrimaryHealthCareProvider_Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.PrimaryHealthCareProvider) Then
                results.AddPropertyError("Primary HealthCare Provider cannot be empty")
            End If
        End Sub

        Private Sub HighestEducationLevel_Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.HighestEducationLevel) Then
                results.AddPropertyError("Highest Education Level cannot be empty")
            End If
        End Sub

        Private Sub Veteran2_Validate(results As EntityValidationResultsBuilder)
            If IsNothing(Me.Veteran2) Then
                results.AddPropertyError("Veteran cannot be empty")
            End If
        End Sub
    End Class

End Namespace
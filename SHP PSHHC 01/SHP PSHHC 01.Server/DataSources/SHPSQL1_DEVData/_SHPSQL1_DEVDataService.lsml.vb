'Imports System.Linq.Expressions


Namespace LightSwitchApplication

    Public Class SHPSQL1_DEVDataService

        Private Sub DailyActivityLogs_Validate(entity As DailyActivityLog, results As EntitySetValidationResultsBuilder)
            If entity.CounselingServices = False And entity.CaseManagment = False Then
                results.AddEntityError("Case Management, Counseling Service, or both must be selected.")
            End If
        End Sub

        '---------------------------------------------------------------------------
        Private Sub Log_Addendums_Inserting(entity As Log_Addendum)
            entity.ServiceProvider = GetUser()
        End Sub

        Private Sub IntakeForms_Inserting(entity As IntakeForm) 'Used on AddEditIntakeForm
            entity.Active = True
            entity.InternalDate = Now
            entity.UID = Guid.NewGuid()
            If Not IsAdmin() Then 'Provider automatically inserted if user is not an admin.
            entity.ServiceProvider1 = GetUser() 'runs a query to return the user's record from the service providers table. Returns whole record.
            End If
        End Sub
        Private Sub IntakeForms_Updating(entity As IntakeForm) 'Used on EditIntakeForm and Discharge
            If entity.Active = True Then 'Don't want to update SP if user is discharging. If discharging, Active should be set to false.
                If Not IsAdmin() Then 'Provider automatically changed to current user if user is not an admin.
                    entity.ServiceProvider1 = GetUser() 'runs a query to return the user's record from the service providers table. Returns whole record.
                End If
            Else
                If entity.DischargingSP Is Nothing Then ' Don't want to change the SP if someone is editing the discharge info
                    entity.DischargingSP = GetUser() 'runs a query to return the user's record from the service providers table. Returns whole record.
                End If
            End If
            updateLog(entity, "Updated")
        End Sub
        Private Sub IntakeForms_Validate(entity As IntakeForm, results As EntitySetValidationResultsBuilder)
            If entity.Active = False Then 'set to false by dischargeclients form javascript client side
                If entity.DateCaseClosed Is Nothing Then
                    entity.Details.DiscardChanges()
                    results.AddEntityError("Date Case Closed cannot be empty")
                    entity.Active = True
                ElseIf entity.StatusAtDischarge Is Nothing Then
                    entity.Details.DiscardChanges()
                    results.AddEntityError("Status at Discharge cannot be empty")
                    entity.Active = True
                End If
            End If
        End Sub
        Private Sub DailyActivityLogs_Inserting(entity As DailyActivityLog) 'Automatically inserts current user as service provider when creating new dailyactivitylog
            entity.InternalDate = Now
            entity.SignedOff = False
            entity.ServiceProvider1 = GetUser()
            entity.Designation = entity.ServiceProvider1.Designation 'Sets the activites' designation to current designation of the service provider.
        End Sub
        'Puts username of person signing off into signedoffby field.
        Private Sub DailyActivityLogs_Updating(entity As DailyActivityLog)
            If IsAdmin() Then
                If entity.SignedOff = True Then
                    entity.SignedOffBy = LCase(Replace(Application.User.Name, "PSHHC\", ""))
                ElseIf entity.SignedOff = False Then
                    entity.SignedOffBy = ""
                End If
            End If

        End Sub
        '---------------------------------------------------------------------------
        'generic function gets username from login creds, Parses out the domain stuff, runs query to find service provider record and returns whole service provider record as getuser
        Private Function GetUser() As Object
            GetUser = Me.DataWorkspace.SHPSQL1_DEVData.GetUserID(LCase(Replace(Application.User.Name, "PSHHC\", "")))
        End Function

        'Public Function GetUserFullName(entity As ServiceProvider) As String
        '    entity = Me.DataWorkspace.SHPSQL1_DEVData.GetUserID(LCase(Replace(Me.Application.User.Name, "PSHHC\", "")))
        '    GetUserFullName = entity.FullName
        'End Function

        Private Function IsAdmin() As Boolean 'generic function used to check if user is an admin
            'IsAdmin = False
            IsAdmin = Me.Application.User.HasPermission(Permissions.Admins)
        End Function

        '---------------------------------------------------------------------------
        Private Sub DailyActivityLogs_CanRead(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.HCS)
        End Sub
        Private Sub DailyActivityLogs_CanInsert(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.HCS)
        End Sub
        Private Sub DailyActivityLogs_CanUpdate(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.Admins)
        End Sub
        Private Sub IntakeForms_CanInsert(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.HCS)
        End Sub

        Private Sub IntakeForms_CanRead(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.HCS)
        End Sub

        Private Sub IntakeForms_CanUpdate(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.HCS)
        End Sub

        Private Sub Log_Addendums_CanInsert(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.HCS)
        End Sub

        Private Sub Log_Addendums_CanRead(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.HCS)
        End Sub

        Private Sub Log_Addendums_CanUpdate(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.HCS)
        End Sub

        Private Sub Properties_CanInsert(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.Admins)
        End Sub

        Private Sub Properties_CanDelete(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.Admins)
        End Sub

        Private Sub Properties_CanUpdate(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.Admins)
        End Sub

        Private Sub Properties_CanRead(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.HCS)
        End Sub

        Private Sub ServiceProviders_CanRead(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.HCS)
        End Sub

        Private Sub ServiceProviders_CanInsert(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.Admins)
        End Sub

        Private Sub ServiceProviders_CanUpdate(ByRef result As Boolean)
            result = Me.Application.User.HasPermission(Permissions.Admins)
        End Sub

        Private Sub DailyActivityLogsQuery_PreprocessQuery(Advocacy As Boolean?, Assessment As Boolean?, BenefitsEntitlementsInsurance As Boolean?, c_Date As Date?, c_Date1 As Date?, CaseManagment As Boolean?, ConflictResolution As Boolean?, CounselingServices As Boolean?, CouplesCounseling As Boolean?, CrisisIntervention As Boolean?, DomesticViolencePrevention As Boolean?, EmploymentOrEducation As Boolean?, FamilyCounseling As Boolean?, FamilySupport As Boolean?, FinanciaManagment As Boolean?, FoodBank As Boolean?, GangPrevention As Boolean?, GriefCounseling As Boolean?, GroupCounseling As Boolean?, HealthcareServices As Boolean?, HomelessnessPrevention As Boolean?, Homemaker As Boolean?, HomeManagement As Boolean?, HoursSpent As Double?, IndividualCounseling As Boolean?, LeaseEducation As Boolean?, LegalIssues As Boolean?, Meals As Boolean?, MedicalEquipment As Boolean?, MentalHealthServices As Boolean?, MonitoringServices As Boolean?, Nutrition As Boolean?, ServiceProviderID As Integer?, SubstanceAbuse As Boolean?, TransferToAlternateHousingOrHospital As Boolean?, Transportation As Boolean?, FairHousingandCivilRightsAssistance As Boolean?, GeneralInfoReferral As Boolean?, IsolationIntervention As Boolean?, Outreach As Boolean?, ResidentCouncils As Boolean?, TaxPrepServices As Boolean?, TranslationInterpretation As Boolean?, FoodAssistance As Boolean?, Property_ID As Integer?, City As String, County As String, Notes As String, QRun As Boolean?, ByRef query As IQueryable(Of DailyActivityLog))
            If Not QRun Or IsNothing(QRun) Then
                query = From c In query Where 0 = 1
            End If
        End Sub

        Private Sub IntakeForms_Inserted(entity As IntakeForm)
            updateLog(entity, "Inserted")
        End Sub


        Private Sub updateLog(entity As IntakeForm, changedType As String)
            Dim change = entity.IntakeLogs.AddNew()
            change.IntakeForm = entity
            change.Updated = Now()
            change.ChangedBy = Application.User.FullName
            If changedType = "Inserted" Then
                change.ChangeType = changedType
                Dim newvals = "Inserted Values:"
                For Each prop In entity.Details.Properties.All().
                    OfType(Of Microsoft.LightSwitch.Details.IEntityStorageProperty)()
                    If prop.Name <> "ID" Then
                        If prop.Value <> Nothing Then
                            If prop.Value.ToString <> "None" Then
                                newvals += String.Format("{0}{1}: {2}", vbCrLf, prop.Name, prop.Value)
                            End If
                        End If
                    End If
                Next
                change.NewValues = newvals
            ElseIf changedType = "Updated" Then
                change.ChangeType = changedType
                Dim newvals = "New Values:"
                Dim oldvals = "Original Values:"
                For Each prop In entity.Details.Properties.All().
                     OfType(Of Microsoft.LightSwitch.Details.IEntityStorageProperty)()
                    If prop.Name <> "ID" Then
                        If Not Object.Equals(prop.Value, prop.OriginalValue) Then
                            oldvals += String.Format("{0}{1}: {2}", vbCrLf, prop.Name, prop.OriginalValue)
                            newvals += String.Format("{0}{1}: {2}", vbCrLf, prop.Name, prop.Value)
                        End If
                    End If
                Next
                change.OrigonalValues = oldvals
                change.NewValues = newvals
                'ElseIf changedType = "Deleted" Then
                '    change.ChangeType = changedType
                '    Dim oldvals = "Deleted Values:"
                '    For Each prop In entity.Details.Properties.All().
                '        OfType(Of Microsoft.LightSwitch.Details.IEntityStorageProperty)()
                '        If prop.Name <> "ID" Then
                '            oldvals += String.Format("{0}{1}: {2}", vbCrLf, prop.Name, prop.Value)
                '        End If
                '    Next
                '    change.OrigonalValues = oldvals
            End If
        End Sub
    End Class
End Namespace
# Security Specification for Strong Kiddies School Website

## 1. Data Invariants
- An application must always start with 'Pending' status.
- Applications and inquiries are immutable by the public once submitted.
- Only verified admins can access sensitive parent and child data.
- Timestamps must be server-generated.

## 2. The "Dirty Dozen" Payloads (Attacks)
1. **Status Spoofing**: Attempt to create an application with `status: 'Accepted'`.
2. **Identity Spoofing**: Attempt to update an application's parent email after submission.
3. **Ghost Fields**: Inject `isVerified: true` into a new application.
4. **Massive ID**: Use a 2KB string as a document ID.
5. **PII Leak**: A non-admin trying to list all applications.
6. **Timeline Warp**: Providing a `createdAt` date in the past.
7. **Malicious Content**: Injecting 5MB of text into an inquiry message.
8. **Orphaned Writes**: Creating an application with missing required fields.
9. **Admin Escalation**: Trying to write to the `admins` collection.
10. **Data Type Poisoning**: Sending a number where a string is expected for `parentName`.
11. **Email Spoofing**: Sending an invalid email format.
12. **Status Bypass**: Attempting to delete a reviewed application as a public user.

## 3. Deployment Summary
The `firestore.rules` file contains mitigations for all the above attacks using strict schema validation, `isAdmin()` checks, and `isValidId()` guards.

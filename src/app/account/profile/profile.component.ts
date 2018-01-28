import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  controls = [
    { 'type': 'name', 'name': '昵称', 'value': 'Roger-罗杰', icon: 'edit' },
    { 'type': 'email', 'name': '电子邮件', 'value': 'FinnShen@outlook.com', icon: 'edit' },
    { 'type': 'phone', 'name': '手机号', 'value': '15726816914', icon: 'edit' },
    { 'type': 'gender', 'name': '性别', 'value': '保密', icon: 'edit' },
    { 'type': 'birth', 'name': '生日', 'value': '1994-02-09', icon: 'edit' },
    { 'type': 'job', 'name': '职业', 'value': '', icon: 'edit' },
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onEdit(data: any) {
    let dialogRef = this.dialog.open(ProfileDialogComponent, {
      width: '250px',
      data: Object.assign({}, data)
    })
    dialogRef.afterClosed().subscribe(result => {
      this.changeValue(result);
    })
  }

  changeValue(data: any) {
    if (!data) {
      // means user cancle the change
      return
    }
    this.controls.forEach((element, index) => {
      if (element.type === data.type) {
        this.controls[index] = data;
      }
    });
  }

}

@Component({
  templateUrl: './profile.dialog.html'
})
export class ProfileDialogComponent {
  showInput = false;
  showGender = false;
  showBirth = false;
  genderOptions = [
    { 'value': '男', 'desc': '男'},
    { 'value': '女', 'desc': '女'},
    { 'value': '保密', 'desc': '保密'},
  ]
  maxDate = new Date();
  constructor(private dialogRef: MatDialogRef<ProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    switch (data.type) {
      case 'gender':
        this.showGender = true;
        break;
      case 'birth':
        this.showBirth = true;
        break
      default:
        this.showInput = true;
        break;
    }
  }

  compareGender(g1, g2) {
    return g1 && g2 ? g1 === g2 : false;
  }
}

<template>
    <input  type="file" ref="input" @change=handleChange($event) :multiple="multiple" :accept="accept"></input>
</template>
<script>
import ajax from './ajax';
function noop() {};
export default {
  props: {
    action: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'file'
    },
    data: Object,
    headers: {
      type: Object,
      default() {
        return {};
      }
    },
    multiple: Boolean,
    withCredentials: {
      type: Boolean,
      default: false
    },

    accept: String,
    onStart: {
      type: Function,
      default: noop
    },
    onProgress:  {
      type: Function,
      default: noop
    },
    onSuccess:  {
      type: Function,
      default: noop
    },
    onError:  {
      type: Function,
      default: noop
    },
    beforeUpload:  {
      type: Function,
      default: noop
    },
    onRemove: {
      type: Function,
      default: function() {}
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    httpRequest: Function
  },
  methods: {
    isImage(str) {
      return str.indexOf('image') !== -1;
    },
    handleChange(ev) {
      const files = ev.target.files;

      if (!files) return;
      this.uploadFiles(files);
      this.$refs.input.value = null;
    },
    uploadFiles(files) {
      let postFiles = Array.prototype.slice.call(files);
      if (!this.multiple) { postFiles = postFiles.slice(0, 1); }

      if (postFiles.length === 0) { return; }

      postFiles.forEach(rawFile => {
        if (!this.thumbnailMode || this.isImage(rawFile.type)) {
          this.onStart(rawFile);
          if (this.autoUpload) this.upload(rawFile);
        }
      });
    },
    upload(rawFile, file) {
      if (!this.beforeUpload) {
        return this.post(rawFile);
      }

      const before = this.beforeUpload(rawFile);
      if (before && before.then) {
        before.then(processedFile => {
          if (Object.prototype.toString.call(processedFile) === '[object File]') {
            this.post(processedFile);
          } else {
            this.post(rawFile);
          }
        }, () => {
          if (file) this.onRemove(file);
        });
      } else if (before !== false) {
        this.post(rawFile);
      } else {
        if (file) this.onRemove(file);
      }
    },
    post(rawFile) {
      const request = this.httpRequest || ajax;
      request({
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: rawFile,
        data: this.data,
        filename: this.name,
        action: this.action,
        onProgress: e => {
          this.onProgress(e, rawFile);
        },
        onSuccess: res => {
          this.onSuccess(res, rawFile);
        },
        onError: err => {
          this.onError(err, rawFile);
        }
      });
    },
    handleClick() {
      this.$refs.input.click();
    }
  }
};
</script>

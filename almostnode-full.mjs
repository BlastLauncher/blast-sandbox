var __defProp = Object.defineProperty;
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};
var __esm = (fn2, res, err) => () => {
  if (fn2)
    try {
      res = fn2(fn2 = 0);
    } catch (e) {
      err = [e];
    }
  if (err)
    throw err[0];
  return res;
};

// .cache/browser-demo/deps/node_modules/brotli-wasm/pkg.web/brotli_wasm.js
var exports_brotli_wasm = {};
__export(exports_brotli_wasm, {
  BrotliStreamResult: () => BrotliStreamResult,
  BrotliStreamResultCode: () => BrotliStreamResultCode,
  CompressStream: () => CompressStream,
  DecompressStream: () => DecompressStream,
  compress: () => compress,
  decompress: () => decompress,
  default: () => brotli_wasm_default
});
function getObject(idx) {
  return heap[idx];
}
function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
    cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachegetUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
function addHeapObject(obj) {
  if (heap_next === heap.length)
    heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === undefined) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr = malloc(buf.length);
    getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
  }
  let len = arg.length;
  let ptr = malloc(len);
  const mem = getUint8Memory0();
  let offset = 0;
  for (;offset < len; offset++) {
    const code2 = arg.charCodeAt(offset);
    if (code2 > 127)
      break;
    mem[ptr + offset] = code2;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function getInt32Memory0() {
  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
    cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachegetInt32Memory0;
}
function dropObject(idx) {
  if (idx < 36)
    return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1);
  getUint8Memory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function addBorrowedObject(obj) {
  if (stack_pointer == 1)
    throw new Error("out of js stack");
  heap[--stack_pointer] = obj;
  return stack_pointer;
}
function getArrayU8FromWasm0(ptr, len) {
  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
function compress(buf, raw_options) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passArray8ToWasm0(buf, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.compress(retptr, ptr0, len0, addBorrowedObject(raw_options));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    var r3 = getInt32Memory0()[retptr / 4 + 3];
    if (r3) {
      throw takeObject(r2);
    }
    var v1 = getArrayU8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v1;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    heap[stack_pointer++] = undefined;
  }
}
function decompress(buf) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passArray8ToWasm0(buf, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.decompress(retptr, ptr0, len0);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    var r3 = getInt32Memory0()[retptr / 4 + 3];
    if (r3) {
      throw takeObject(r2);
    }
    var v1 = getArrayU8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v1;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}
function isLikeNone(x) {
  return x === undefined || x === null;
}

class BrotliStreamResult {
  static __wrap(ptr) {
    const obj = Object.create(BrotliStreamResult.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_brotlistreamresult_free(ptr);
  }
  get code() {
    const ret = wasm.__wbg_get_brotlistreamresult_code(this.ptr);
    return ret >>> 0;
  }
  set code(arg0) {
    wasm.__wbg_set_brotlistreamresult_code(this.ptr, arg0);
  }
  get buf() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_brotlistreamresult_buf(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_free(r0, r1 * 1);
      return v0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set buf(arg0) {
    const ptr0 = passArray8ToWasm0(arg0, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_brotlistreamresult_buf(this.ptr, ptr0, len0);
  }
  get input_offset() {
    const ret = wasm.__wbg_get_brotlistreamresult_input_offset(this.ptr);
    return ret >>> 0;
  }
  set input_offset(arg0) {
    wasm.__wbg_set_brotlistreamresult_input_offset(this.ptr, arg0);
  }
}

class CompressStream {
  static __wrap(ptr) {
    const obj = Object.create(CompressStream.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_compressstream_free(ptr);
  }
  constructor(quality) {
    const ret = wasm.compressstream_new(!isLikeNone(quality), isLikeNone(quality) ? 0 : quality);
    return CompressStream.__wrap(ret);
  }
  compress(input_opt, output_size) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      var ptr0 = isLikeNone(input_opt) ? 0 : passArray8ToWasm0(input_opt, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.compressstream_compress(retptr, this.ptr, ptr0, len0, output_size);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return BrotliStreamResult.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  total_out() {
    const ret = wasm.compressstream_total_out(this.ptr);
    return ret >>> 0;
  }
}

class DecompressStream {
  static __wrap(ptr) {
    const obj = Object.create(DecompressStream.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_decompressstream_free(ptr);
  }
  constructor() {
    const ret = wasm.decompressstream_new();
    return DecompressStream.__wrap(ret);
  }
  decompress(input, output_size) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passArray8ToWasm0(input, wasm.__wbindgen_malloc);
      const len0 = WASM_VECTOR_LEN;
      wasm.decompressstream_decompress(retptr, this.ptr, ptr0, len0, output_size);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return BrotliStreamResult.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  total_out() {
    const ret = wasm.decompressstream_total_out(this.ptr);
    return ret >>> 0;
  }
}
async function load(module2, imports) {
  if (typeof Response === "function" && module2 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module2, imports);
      } catch (e) {
        if (module2.headers.get("Content-Type") != "application/wasm") {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module2.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module2, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module: module2 };
    } else {
      return instance;
    }
  }
}
async function init(input) {
  if (typeof input === "undefined") {
    input = new URL("brotli_wasm_bg.wasm", import.meta.url);
  }
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbindgen_is_undefined = function(arg0) {
    const ret = getObject(arg0) === undefined;
    return ret;
  };
  imports.wbg.__wbindgen_is_object = function(arg0) {
    const val = getObject(arg0);
    const ret = typeof val === "object" && val !== null;
    return ret;
  };
  imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
    const ret = new Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_json_serialize = function(arg0, arg1) {
    const obj = getObject(arg1);
    const ret = JSON.stringify(obj === undefined ? null : obj);
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  };
  imports.wbg.__wbg_new_693216e109162396 = function() {
    const ret = new Error;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_stack_0ddaca5d1abfb52f = function(arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  };
  imports.wbg.__wbg_error_09919627ac0992f5 = function(arg0, arg1) {
    try {
      console.error(getStringFromWasm0(arg0, arg1));
    } finally {
      wasm.__wbindgen_free(arg0, arg1);
    }
  };
  imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
  };
  imports.wbg.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };
  if (typeof input === "string" || typeof Request === "function" && input instanceof Request || typeof URL === "function" && input instanceof URL) {
    input = fetch(input);
  }
  const { instance, module: module2 } = await load(await input, imports);
  wasm = instance.exports;
  init.__wbindgen_wasm_module = module2;
  return wasm;
}
var wasm, heap, cachedTextDecoder, cachegetUint8Memory0 = null, heap_next, WASM_VECTOR_LEN = 0, cachedTextEncoder, encodeString, cachegetInt32Memory0 = null, stack_pointer = 32, BrotliStreamResultCode, brotli_wasm_default;
var init_brotli_wasm = __esm(() => {
  heap = new Array(32).fill(undefined);
  heap.push(undefined, null, true, false);
  cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
  cachedTextDecoder.decode();
  heap_next = heap.length;
  cachedTextEncoder = new TextEncoder("utf-8");
  encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
  } : function(arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
      read: arg.length,
      written: buf.length
    };
  };
  BrotliStreamResultCode = Object.freeze({ ResultSuccess: 1, "1": "ResultSuccess", NeedsMoreInput: 2, "2": "NeedsMoreInput", NeedsMoreOutput: 3, "3": "NeedsMoreOutput" });
  brotli_wasm_default = init;
});

// .cache/browser-demo/deps/node_modules/brotli-wasm/index.web.js
var index_web_default;
var init_index_web = __esm(() => {
  init_brotli_wasm();
  index_web_default = brotli_wasm_default().then(() => exports_brotli_wasm);
});

// .cache/browser-demo/almost-src/utils/hash.ts
function simpleHash(str) {
  let hash = 0;
  for (let i = 0;i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash.toString(36);
}

// .cache/browser-demo/almost-src/utils/binary-encoding.ts
var CHUNK = 8192;
function uint8ToBase64(bytes) {
  const parts = [];
  for (let i = 0;i < bytes.length; i += CHUNK) {
    parts.push(String.fromCharCode.apply(null, Array.from(bytes.subarray(i, i + CHUNK))));
  }
  return btoa(parts.join(""));
}
function base64ToUint8(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0;i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
function uint8ToHex(bytes) {
  const hex = new Array(bytes.length);
  for (let i = 0;i < bytes.length; i++) {
    hex[i] = bytes[i].toString(16).padStart(2, "0");
  }
  return hex.join("");
}
function uint8ToBinaryString(bytes) {
  const parts = [];
  for (let i = 0;i < bytes.length; i += CHUNK) {
    parts.push(String.fromCharCode.apply(null, Array.from(bytes.subarray(i, i + CHUNK))));
  }
  return parts.join("");
}

// .cache/browser-demo/almost-src/virtual-fs.ts
function createNodeError(code2, syscall, path, message) {
  const errno = {
    ENOENT: -2,
    ENOTDIR: -20,
    EISDIR: -21,
    EEXIST: -17,
    ENOTEMPTY: -39
  };
  const messages = {
    ENOENT: "no such file or directory",
    ENOTDIR: "not a directory",
    EISDIR: "is a directory",
    EEXIST: "file already exists",
    ENOTEMPTY: "directory not empty"
  };
  const err = new Error(message || `${code2}: ${messages[code2]}, ${syscall} '${path}'`);
  err.code = code2;
  err.errno = errno[code2];
  err.syscall = syscall;
  err.path = path;
  return err;
}

class VirtualFS {
  root;
  encoder = new TextEncoder;
  decoder = new TextDecoder;
  watchers = new Map;
  eventListeners = new Map;
  constructor() {
    this.root = {
      type: "directory",
      children: new Map,
      mtime: Date.now()
    };
  }
  on(event, listener) {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, new Set);
    }
    this.eventListeners.get(event).add(listener);
    return this;
  }
  off(event, listener) {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      listeners.delete(listener);
    }
    return this;
  }
  emit(event, ...args) {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      for (const listener of listeners) {
        try {
          listener(...args);
        } catch (err) {
          console.error("Error in VFS event listener:", err);
        }
      }
    }
  }
  toSnapshot() {
    const files = [];
    this.serializeNode("/", this.root, files);
    return { files };
  }
  serializeNode(path, node, files) {
    if (node.type === "file") {
      let content = "";
      if (node.content && node.content.length > 0) {
        content = uint8ToBase64(node.content);
      }
      files.push({ path, type: "file", content });
    } else if (node.type === "directory") {
      files.push({ path, type: "directory" });
      if (node.children) {
        for (const [name, child] of node.children) {
          const childPath = path === "/" ? `/${name}` : `${path}/${name}`;
          this.serializeNode(childPath, child, files);
        }
      }
    }
  }
  static fromSnapshot(snapshot) {
    const vfs2 = new VirtualFS;
    const sortedFiles = snapshot.files.map((entry, i) => ({ entry, depth: entry.path.split("/").length, i })).sort((a, b) => a.depth - b.depth || a.i - b.i).map((x) => x.entry);
    for (const entry of sortedFiles) {
      if (entry.path === "/")
        continue;
      if (entry.type === "directory") {
        vfs2.mkdirSync(entry.path, { recursive: true });
      } else if (entry.type === "file") {
        let content;
        if (entry.content) {
          content = base64ToUint8(entry.content);
        } else {
          content = new Uint8Array(0);
        }
        const parentPath = entry.path.substring(0, entry.path.lastIndexOf("/")) || "/";
        if (parentPath !== "/" && !vfs2.existsSync(parentPath)) {
          vfs2.mkdirSync(parentPath, { recursive: true });
        }
        vfs2.writeFileSyncInternal(entry.path, content, false);
      }
    }
    return vfs2;
  }
  writeFileSyncInternal(path, data, emitEvent) {
    const normalized = this.normalizePath(path);
    const parentPath = this.getParentPath(normalized);
    const basename = this.getBasename(normalized);
    if (!basename) {
      throw new Error(`EISDIR: illegal operation on a directory, '${path}'`);
    }
    const parent = this.ensureDirectory(parentPath);
    const existed = parent.children.has(basename);
    const content = typeof data === "string" ? this.encoder.encode(data) : data;
    parent.children.set(basename, {
      type: "file",
      content,
      mtime: Date.now()
    });
    if (emitEvent) {
      this.notifyWatchers(normalized, existed ? "change" : "rename");
      this.emit("change", normalized, typeof data === "string" ? data : this.decoder.decode(data));
    }
  }
  normalizePath(path) {
    if (!path.startsWith("/")) {
      path = "/" + path;
    }
    const parts = path.split("/").filter(Boolean);
    const resolved = [];
    for (const part of parts) {
      if (part === "..") {
        resolved.pop();
      } else if (part !== ".") {
        resolved.push(part);
      }
    }
    return "/" + resolved.join("/");
  }
  getPathSegments(path) {
    return this.normalizePath(path).split("/").filter(Boolean);
  }
  getParentPath(path) {
    const normalized = this.normalizePath(path);
    const lastSlash = normalized.lastIndexOf("/");
    return lastSlash <= 0 ? "/" : normalized.slice(0, lastSlash);
  }
  getBasename(path) {
    const normalized = this.normalizePath(path);
    const lastSlash = normalized.lastIndexOf("/");
    return normalized.slice(lastSlash + 1);
  }
  getNode(path) {
    const segments = this.getPathSegments(path);
    let current = this.root;
    for (const segment of segments) {
      if (current.type !== "directory" || !current.children) {
        return;
      }
      const child = current.children.get(segment);
      if (!child) {
        return;
      }
      current = child;
    }
    return current;
  }
  ensureDirectory(path) {
    const segments = this.getPathSegments(path);
    let current = this.root;
    for (const segment of segments) {
      if (!current.children) {
        current.children = new Map;
      }
      let child = current.children.get(segment);
      if (!child) {
        child = { type: "directory", children: new Map, mtime: Date.now() };
        current.children.set(segment, child);
      } else if (child.type !== "directory") {
        throw new Error(`ENOTDIR: not a directory, '${path}'`);
      }
      current = child;
    }
    return current;
  }
  existsSync(path) {
    return this.getNode(path) !== undefined;
  }
  statSync(path) {
    const node = this.getNode(path);
    if (!node) {
      throw createNodeError("ENOENT", "stat", path);
    }
    const size = node.type === "file" ? node.content?.length || 0 : 0;
    const mtime = node.mtime;
    return {
      isFile: () => node.type === "file",
      isDirectory: () => node.type === "directory",
      isSymbolicLink: () => false,
      isBlockDevice: () => false,
      isCharacterDevice: () => false,
      isFIFO: () => false,
      isSocket: () => false,
      size,
      mode: node.type === "directory" ? 493 : 420,
      mtime: new Date(mtime),
      atime: new Date(mtime),
      ctime: new Date(mtime),
      birthtime: new Date(mtime),
      mtimeMs: mtime,
      atimeMs: mtime,
      ctimeMs: mtime,
      birthtimeMs: mtime,
      nlink: 1,
      uid: 1000,
      gid: 1000,
      dev: 0,
      ino: 0,
      rdev: 0,
      blksize: 4096,
      blocks: Math.ceil(size / 512)
    };
  }
  lstatSync(path) {
    return this.statSync(path);
  }
  readFileSync(path, encoding) {
    const node = this.getNode(path);
    if (!node) {
      throw createNodeError("ENOENT", "open", path);
    }
    if (node.type !== "file") {
      throw createNodeError("EISDIR", "read", path);
    }
    const content = node.content || new Uint8Array(0);
    if (encoding === "utf8" || encoding === "utf-8") {
      return this.decoder.decode(content);
    }
    return content;
  }
  writeFileSync(path, data) {
    this.writeFileSyncInternal(path, data, true);
  }
  mkdirSync(path, options2) {
    const normalized = this.normalizePath(path);
    if (options2?.recursive) {
      this.ensureDirectory(normalized);
      return;
    }
    const parentPath = this.getParentPath(normalized);
    const basename = this.getBasename(normalized);
    if (!basename) {
      return;
    }
    const parent = this.getNode(parentPath);
    if (!parent) {
      throw createNodeError("ENOENT", "mkdir", parentPath);
    }
    if (parent.type !== "directory") {
      throw createNodeError("ENOTDIR", "mkdir", parentPath);
    }
    if (parent.children.has(basename)) {
      throw createNodeError("EEXIST", "mkdir", path);
    }
    parent.children.set(basename, {
      type: "directory",
      children: new Map,
      mtime: Date.now()
    });
  }
  readdirSync(path) {
    const node = this.getNode(path);
    if (!node) {
      throw createNodeError("ENOENT", "scandir", path);
    }
    if (node.type !== "directory") {
      throw createNodeError("ENOTDIR", "scandir", path);
    }
    return Array.from(node.children.keys());
  }
  unlinkSync(path) {
    const normalized = this.normalizePath(path);
    const parentPath = this.getParentPath(normalized);
    const basename = this.getBasename(normalized);
    const parent = this.getNode(parentPath);
    if (!parent || parent.type !== "directory") {
      throw createNodeError("ENOENT", "unlink", path);
    }
    const node = parent.children.get(basename);
    if (!node) {
      throw createNodeError("ENOENT", "unlink", path);
    }
    if (node.type !== "file") {
      throw createNodeError("EISDIR", "unlink", path);
    }
    parent.children.delete(basename);
    this.notifyWatchers(normalized, "rename");
    this.emit("delete", normalized);
  }
  rmdirSync(path) {
    const normalized = this.normalizePath(path);
    const parentPath = this.getParentPath(normalized);
    const basename = this.getBasename(normalized);
    if (!basename) {
      throw new Error(`EPERM: operation not permitted, '${path}'`);
    }
    const parent = this.getNode(parentPath);
    if (!parent || parent.type !== "directory") {
      throw createNodeError("ENOENT", "rmdir", path);
    }
    const node = parent.children.get(basename);
    if (!node) {
      throw createNodeError("ENOENT", "rmdir", path);
    }
    if (node.type !== "directory") {
      throw createNodeError("ENOTDIR", "rmdir", path);
    }
    if (node.children.size > 0) {
      throw createNodeError("ENOTEMPTY", "rmdir", path);
    }
    parent.children.delete(basename);
  }
  renameSync(oldPath, newPath) {
    const normalizedOld = this.normalizePath(oldPath);
    const normalizedNew = this.normalizePath(newPath);
    const oldParentPath = this.getParentPath(normalizedOld);
    const oldBasename = this.getBasename(normalizedOld);
    const newParentPath = this.getParentPath(normalizedNew);
    const newBasename = this.getBasename(normalizedNew);
    const oldParent = this.getNode(oldParentPath);
    if (!oldParent || oldParent.type !== "directory") {
      throw createNodeError("ENOENT", "rename", oldPath);
    }
    const node = oldParent.children.get(oldBasename);
    if (!node) {
      throw createNodeError("ENOENT", "rename", oldPath);
    }
    const newParent = this.ensureDirectory(newParentPath);
    oldParent.children.delete(oldBasename);
    newParent.children.set(newBasename, node);
    this.notifyWatchers(normalizedOld, "rename");
    this.notifyWatchers(normalizedNew, "rename");
  }
  readFile(path, optionsOrCallback, callback) {
    const actualCallback = typeof optionsOrCallback === "function" ? optionsOrCallback : callback;
    const options2 = typeof optionsOrCallback === "object" ? optionsOrCallback : undefined;
    try {
      const data = options2?.encoding ? this.readFileSync(path, options2.encoding) : this.readFileSync(path);
      if (actualCallback) {
        setTimeout(() => actualCallback(null, data), 0);
      }
    } catch (err) {
      if (actualCallback) {
        setTimeout(() => actualCallback(err), 0);
      }
    }
  }
  stat(path, callback) {
    try {
      const stats = this.statSync(path);
      setTimeout(() => callback(null, stats), 0);
    } catch (err) {
      setTimeout(() => callback(err), 0);
    }
  }
  lstat(path, callback) {
    this.stat(path, callback);
  }
  readdir(path, optionsOrCallback, callback) {
    const actualCallback = typeof optionsOrCallback === "function" ? optionsOrCallback : callback;
    try {
      const files = this.readdirSync(path);
      if (actualCallback) {
        setTimeout(() => actualCallback(null, files), 0);
      }
    } catch (err) {
      if (actualCallback) {
        setTimeout(() => actualCallback(err), 0);
      }
    }
  }
  realpath(path, callback) {
    try {
      const resolved = this.realpathSync(path);
      setTimeout(() => callback(null, resolved), 0);
    } catch (err) {
      setTimeout(() => callback(err), 0);
    }
  }
  realpathSync(path) {
    const normalized = this.normalizePath(path);
    if (!this.existsSync(normalized)) {
      throw createNodeError("ENOENT", "realpath", path);
    }
    return normalized;
  }
  watch(filename2, optionsOrListener, listener) {
    const normalized = this.normalizePath(filename2);
    let options2 = {};
    let actualListener;
    if (typeof optionsOrListener === "function") {
      actualListener = optionsOrListener;
    } else if (optionsOrListener) {
      options2 = optionsOrListener;
      actualListener = listener;
    } else {
      actualListener = listener;
    }
    const entry = {
      listener: actualListener || (() => {}),
      recursive: options2.recursive || false,
      closed: false
    };
    if (!this.watchers.has(normalized)) {
      this.watchers.set(normalized, new Set);
    }
    this.watchers.get(normalized).add(entry);
    const watcher = {
      close: () => {
        entry.closed = true;
        const watcherSet = this.watchers.get(normalized);
        if (watcherSet) {
          watcherSet.delete(entry);
          if (watcherSet.size === 0) {
            this.watchers.delete(normalized);
          }
        }
      },
      ref: () => watcher,
      unref: () => watcher
    };
    return watcher;
  }
  notifyWatchers(path, eventType) {
    const normalized = this.normalizePath(path);
    const basename = this.getBasename(normalized);
    const directWatchers = this.watchers.get(normalized);
    if (directWatchers) {
      for (const entry of directWatchers) {
        if (!entry.closed) {
          try {
            entry.listener(eventType, basename);
          } catch (err) {
            console.error("Error in file watcher:", err);
          }
        }
      }
    }
    let currentPath = this.getParentPath(normalized);
    let relativePath = basename;
    while (currentPath) {
      const parentWatchers = this.watchers.get(currentPath);
      if (parentWatchers) {
        for (const entry of parentWatchers) {
          if (!entry.closed) {
            const isDirectChild = this.getParentPath(normalized) === currentPath;
            if (entry.recursive || isDirectChild) {
              try {
                entry.listener(eventType, relativePath);
              } catch (err) {
                console.error("Error in file watcher:", err);
              }
            }
          }
        }
      }
      if (currentPath === "/")
        break;
      relativePath = this.getBasename(currentPath) + "/" + relativePath;
      currentPath = this.getParentPath(currentPath);
    }
  }
  accessSync(path, mode) {
    if (!this.existsSync(path)) {
      throw createNodeError("ENOENT", "access", path);
    }
  }
  access(path, modeOrCallback, callback) {
    const actualCallback = typeof modeOrCallback === "function" ? modeOrCallback : callback;
    try {
      this.accessSync(path);
      if (actualCallback)
        setTimeout(() => actualCallback(null), 0);
    } catch (err) {
      if (actualCallback)
        setTimeout(() => actualCallback(err), 0);
    }
  }
  copyFileSync(src, dest) {
    const content = this.readFileSync(src);
    this.writeFileSync(dest, content);
  }
  createReadStream(path) {
    const self = this;
    const listeners = {};
    const stream = {
      on(event, cb) {
        if (!listeners[event])
          listeners[event] = [];
        listeners[event].push(cb);
        return stream;
      },
      pipe(dest) {
        return dest;
      }
    };
    setTimeout(() => {
      try {
        const data = self.readFileSync(path);
        listeners["data"]?.forEach((cb) => cb(data));
        listeners["end"]?.forEach((cb) => cb());
      } catch (err) {
        listeners["error"]?.forEach((cb) => cb(err));
      }
    }, 0);
    return stream;
  }
  createWriteStream(path) {
    const self = this;
    const chunks = [];
    const listeners = {};
    const encoder = new TextEncoder;
    return {
      write(data) {
        const chunk = typeof data === "string" ? encoder.encode(data) : data;
        chunks.push(chunk);
        return true;
      },
      end(data) {
        if (data) {
          const chunk = typeof data === "string" ? encoder.encode(data) : data;
          chunks.push(chunk);
        }
        const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
        const combined = new Uint8Array(totalLength);
        let offset = 0;
        for (const chunk of chunks) {
          combined.set(chunk, offset);
          offset += chunk.length;
        }
        self.writeFileSync(path, combined);
        listeners["finish"]?.forEach((cb) => cb());
        listeners["close"]?.forEach((cb) => cb());
      },
      on(event, cb) {
        if (!listeners[event])
          listeners[event] = [];
        listeners[event].push(cb);
        return this;
      }
    };
  }
}

// .cache/browser-demo/almost-src/shims/fs.ts
var _decoder = new TextDecoder;
var _encoder = new TextEncoder;

class Dirent {
  name;
  _isDirectory;
  _isFile;
  constructor(name, isDirectory, isFile) {
    this.name = name;
    this._isDirectory = isDirectory;
    this._isFile = isFile;
  }
  isDirectory() {
    return this._isDirectory;
  }
  isFile() {
    return this._isFile;
  }
  isBlockDevice() {
    return false;
  }
  isCharacterDevice() {
    return false;
  }
  isFIFO() {
    return false;
  }
  isSocket() {
    return false;
  }
  isSymbolicLink() {
    return false;
  }
}
function createBuffer(data) {
  const buffer = data;
  Object.defineProperty(buffer, "toString", {
    value: function(encoding) {
      if (encoding === "utf8" || encoding === "utf-8" || !encoding) {
        return _decoder.decode(this);
      }
      if (encoding === "base64") {
        return uint8ToBase64(this);
      }
      if (encoding === "hex") {
        return uint8ToHex(this);
      }
      throw new Error(`Unsupported encoding: ${encoding}`);
    },
    writable: true,
    configurable: true
  });
  return buffer;
}
function toPath(pathLike, getCwd) {
  let path;
  if (typeof pathLike === "string") {
    path = pathLike;
  } else if (pathLike instanceof URL) {
    if (pathLike.protocol === "file:") {
      path = decodeURIComponent(pathLike.pathname);
    } else {
      throw new Error(`Unsupported URL protocol: ${pathLike.protocol}`);
    }
  } else if (Buffer.isBuffer(pathLike)) {
    path = pathLike.toString("utf8");
  } else if (pathLike && typeof pathLike === "object" && "toString" in pathLike) {
    path = String(pathLike);
  } else {
    throw new TypeError(`Path must be a string, URL, or Buffer. Received: ${typeof pathLike}`);
  }
  if (!path.startsWith("/") && getCwd) {
    const cwd = getCwd();
    path = cwd.endsWith("/") ? cwd + path : cwd + "/" + path;
  }
  return path;
}
var fdMap = new Map;
var nextFd = 3;
var callTracker = {
  statSync: new Map,
  readdirSync: new Map,
  lastReset: Date.now()
};
function trackCall(method, path) {
  const now = Date.now();
  if (now - callTracker.lastReset > 500) {
    callTracker.statSync.clear();
    callTracker.readdirSync.clear();
    callTracker.lastReset = now;
  }
  const map = callTracker[method];
  const count = (map.get(path) || 0) + 1;
  map.set(path, count);
  if (count === 10 && path.includes("_generated")) {
    console.warn(`[fs] ${method} called ${count}x on ${path}`);
    const err = new Error;
    console.log(`[fs] Stack at ${count} calls:`, err.stack?.split(`
`).slice(1, 10).join(`
`));
  }
  if (count === 50) {
    console.warn(`[fs] Potential infinite loop: ${method} called ${count}+ times on ${path}`);
  }
}
function createFsShim(vfs2, getCwd) {
  const resolvePath = (pathLike) => toPath(pathLike, getCwd);
  const constants = {
    F_OK: 0,
    R_OK: 4,
    W_OK: 2,
    X_OK: 1
  };
  const promises = {
    readFile(pathLike, encodingOrOptions) {
      return new Promise((resolve, reject) => {
        try {
          const path = resolvePath(pathLike);
          let encoding;
          if (typeof encodingOrOptions === "string") {
            encoding = encodingOrOptions;
          } else if (encodingOrOptions?.encoding) {
            encoding = encodingOrOptions.encoding;
          }
          if (encoding === "utf8" || encoding === "utf-8") {
            resolve(vfs2.readFileSync(path, "utf8"));
          } else {
            resolve(createBuffer(vfs2.readFileSync(path)));
          }
        } catch (err) {
          reject(err);
        }
      });
    },
    writeFile(pathLike, data) {
      return new Promise((resolve, reject) => {
        try {
          vfs2.writeFileSync(resolvePath(pathLike), data);
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    },
    stat(pathLike) {
      return new Promise((resolve, reject) => {
        try {
          const path = typeof pathLike === "string" ? pathLike : resolvePath(pathLike);
          resolve(vfs2.statSync(path));
        } catch (err) {
          reject(err);
        }
      });
    },
    lstat(pathLike) {
      return this.stat(resolvePath(pathLike));
    },
    readdir(pathLike, options2) {
      return new Promise((resolve, reject) => {
        try {
          const path = resolvePath(pathLike);
          const entries = vfs2.readdirSync(path);
          const opts = typeof options2 === "string" ? {} : options2;
          if (opts?.withFileTypes) {
            const dirents = entries.map((name) => {
              const entryPath = path.endsWith("/") ? path + name : path + "/" + name;
              let isDir = false;
              let isFile = false;
              try {
                const stat = vfs2.statSync(entryPath);
                isDir = stat.isDirectory();
                isFile = stat.isFile();
              } catch {
                isFile = true;
              }
              return new Dirent(name, isDir, isFile);
            });
            resolve(dirents);
          } else {
            resolve(entries);
          }
        } catch (err) {
          reject(err);
        }
      });
    },
    mkdir(pathLike, options2) {
      return new Promise((resolve, reject) => {
        try {
          vfs2.mkdirSync(resolvePath(pathLike), options2);
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    },
    unlink(pathLike) {
      return new Promise((resolve, reject) => {
        try {
          vfs2.unlinkSync(resolvePath(pathLike));
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    },
    rmdir(path) {
      return new Promise((resolve, reject) => {
        try {
          vfs2.rmdirSync(path);
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    },
    rename(oldPath, newPath) {
      return new Promise((resolve, reject) => {
        try {
          vfs2.renameSync(oldPath, newPath);
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    },
    access(path, mode) {
      return new Promise((resolve, reject) => {
        try {
          vfs2.accessSync(path, mode);
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    },
    realpath(path) {
      return new Promise((resolve, reject) => {
        try {
          resolve(vfs2.realpathSync(path));
        } catch (err) {
          reject(err);
        }
      });
    },
    copyFile(src, dest) {
      return new Promise((resolve, reject) => {
        try {
          vfs2.copyFileSync(src, dest);
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    }
  };
  return {
    readFileSync(pathLike, encodingOrOptions) {
      const path = resolvePath(pathLike);
      let encoding;
      if (typeof encodingOrOptions === "string") {
        encoding = encodingOrOptions;
      } else if (encodingOrOptions?.encoding) {
        encoding = encodingOrOptions.encoding;
      }
      if (encoding === "utf8" || encoding === "utf-8") {
        return vfs2.readFileSync(path, "utf8");
      }
      const data = vfs2.readFileSync(path);
      return createBuffer(data);
    },
    writeFileSync(pathLike, data) {
      if (typeof pathLike === "number") {
        const fd = pathLike;
        const entry = fdMap.get(fd);
        if (!entry) {
          const err = new Error(`EBADF: bad file descriptor, write`);
          err.code = "EBADF";
          err.errno = -9;
          throw err;
        }
        const bytes = typeof data === "string" ? _encoder.encode(data) : data;
        entry.content = new Uint8Array(bytes);
        entry.position = bytes.length;
        return;
      }
      const path = resolvePath(pathLike);
      vfs2.writeFileSync(path, data);
    },
    existsSync(pathLike) {
      return vfs2.existsSync(resolvePath(pathLike));
    },
    mkdirSync(pathLike, options2) {
      const path = resolvePath(pathLike);
      vfs2.mkdirSync(path, options2);
    },
    readdirSync(pathLike, options2) {
      const path = resolvePath(pathLike);
      trackCall("readdirSync", path);
      const entries = vfs2.readdirSync(path);
      const opts = typeof options2 === "string" ? { encoding: options2 } : options2;
      if (opts?.withFileTypes) {
        const dirents = entries.map((name) => {
          const entryPath = path.endsWith("/") ? path + name : path + "/" + name;
          let isDir = false;
          let isFile = false;
          try {
            const stat = vfs2.statSync(entryPath);
            isDir = stat.isDirectory();
            isFile = stat.isFile();
          } catch {
            isFile = true;
          }
          return new Dirent(name, isDir, isFile);
        });
        if (path.includes("_generated")) {
          console.log(`[fs] readdirSync(${path}, withFileTypes) -> [${dirents.map((d) => d.name).join(", ")}]`);
        }
        return dirents;
      }
      if (path.includes("_generated")) {
        console.log(`[fs] readdirSync(${path}) -> [${entries.join(", ")}]`);
      }
      return entries;
    },
    statSync(pathLike) {
      const origPath = typeof pathLike === "string" ? pathLike : String(pathLike);
      const path = resolvePath(pathLike);
      trackCall("statSync", path);
      const result = vfs2.statSync(path);
      if (path.includes("_generated")) {
        const wasRemapped = origPath !== path;
        console.log(`[fs] statSync(${origPath}${wasRemapped ? " -> " + path : ""}) -> isDir: ${result.isDirectory()}`);
      }
      return result;
    },
    lstatSync(pathLike) {
      return vfs2.lstatSync(resolvePath(pathLike));
    },
    fstatSync(fd) {
      const entry = fdMap.get(fd);
      if (!entry) {
        const err = new Error(`EBADF: bad file descriptor, fstat`);
        err.code = "EBADF";
        err.errno = -9;
        throw err;
      }
      return vfs2.statSync(entry.path);
    },
    openSync(pathLike, flags, _mode) {
      const path = resolvePath(pathLike);
      const flagStr = typeof flags === "number" ? "r" : flags;
      const exists = vfs2.existsSync(path);
      const isWriteMode = flagStr.includes("w") || flagStr.includes("a");
      const isReadMode = flagStr.includes("r") && !flagStr.includes("+");
      if (!exists && isReadMode) {
        const err = new Error(`ENOENT: no such file or directory, open '${path}'`);
        err.code = "ENOENT";
        err.errno = -2;
        err.path = path;
        throw err;
      }
      let content;
      if (exists && !flagStr.includes("w")) {
        content = vfs2.readFileSync(path);
      } else {
        content = new Uint8Array(0);
        if (isWriteMode) {
          const parentPath = path.substring(0, path.lastIndexOf("/")) || "/";
          if (!vfs2.existsSync(parentPath)) {
            vfs2.mkdirSync(parentPath, { recursive: true });
          }
        }
      }
      const fd = nextFd++;
      fdMap.set(fd, {
        path,
        position: flagStr.includes("a") ? content.length : 0,
        flags: flagStr,
        content: new Uint8Array(content)
      });
      return fd;
    },
    closeSync(fd) {
      const entry = fdMap.get(fd);
      if (!entry) {
        return;
      }
      if (entry.flags.includes("w") || entry.flags.includes("a") || entry.flags.includes("+")) {
        vfs2.writeFileSync(entry.path, entry.content);
      }
      fdMap.delete(fd);
    },
    readSync(fd, buffer, offset, length, position) {
      const entry = fdMap.get(fd);
      if (!entry) {
        const err = new Error(`EBADF: bad file descriptor, read`);
        err.code = "EBADF";
        err.errno = -9;
        throw err;
      }
      const readPos = position !== null ? position : entry.position;
      const bytesToRead = Math.min(length, entry.content.length - readPos);
      if (bytesToRead <= 0) {
        return 0;
      }
      for (let i = 0;i < bytesToRead; i++) {
        buffer[offset + i] = entry.content[readPos + i];
      }
      if (position === null) {
        entry.position += bytesToRead;
      }
      return bytesToRead;
    },
    writeSync(fd, buffer, offset, length, position) {
      const entry = fdMap.get(fd);
      if (!entry) {
        const err = new Error(`EBADF: bad file descriptor, write`);
        err.code = "EBADF";
        err.errno = -9;
        throw err;
      }
      let data;
      if (typeof buffer === "string") {
        data = _encoder.encode(buffer);
        offset = 0;
        length = data.length;
      } else {
        data = buffer;
        offset = offset ?? 0;
        length = length ?? data.length - offset;
      }
      const writePos = position !== null && position !== undefined ? position : entry.position;
      const endPos = writePos + length;
      if (endPos > entry.content.length) {
        const newContent = new Uint8Array(endPos);
        newContent.set(entry.content);
        entry.content = newContent;
      }
      for (let i = 0;i < length; i++) {
        entry.content[writePos + i] = data[offset + i];
      }
      if (position === null || position === undefined) {
        entry.position = endPos;
      }
      return length;
    },
    ftruncateSync(fd, len = 0) {
      const entry = fdMap.get(fd);
      if (!entry) {
        const err = new Error(`EBADF: bad file descriptor, ftruncate`);
        err.code = "EBADF";
        err.errno = -9;
        throw err;
      }
      if (len < entry.content.length) {
        entry.content = entry.content.slice(0, len);
      } else if (len > entry.content.length) {
        const newContent = new Uint8Array(len);
        newContent.set(entry.content);
        entry.content = newContent;
      }
    },
    fsyncSync(_fd) {},
    fdatasyncSync(_fd) {},
    mkdtempSync(prefix) {
      const suffix = Math.random().toString(36).slice(2, 8);
      const tempDir = `${prefix}${suffix}`;
      const resolvedPath2 = resolvePath(tempDir);
      vfs2.mkdirSync(resolvedPath2, { recursive: true });
      return resolvedPath2;
    },
    rmSync(pathLike, options2) {
      const path = resolvePath(pathLike);
      if (!vfs2.existsSync(path)) {
        if (options2?.force)
          return;
        throw createNodeError("ENOENT", "rm", path);
      }
      const stats = vfs2.statSync(path);
      if (stats.isDirectory()) {
        if (options2?.recursive) {
          const entries = vfs2.readdirSync(path);
          for (const entry of entries) {
            const entryPath = path.endsWith("/") ? path + entry : path + "/" + entry;
            this.rmSync(entryPath, options2);
          }
          vfs2.rmdirSync(path);
        } else {
          throw createNodeError("EISDIR", "rm", path);
        }
      } else {
        vfs2.unlinkSync(path);
      }
    },
    unlinkSync(pathLike) {
      const path = resolvePath(pathLike);
      if (path.includes("_generated")) {
        console.log(`[fs] unlinkSync(${path})`);
      }
      vfs2.unlinkSync(path);
    },
    rmdirSync(pathLike) {
      vfs2.rmdirSync(resolvePath(pathLike));
    },
    renameSync(oldPathLike, newPathLike) {
      vfs2.renameSync(resolvePath(oldPathLike), resolvePath(newPathLike));
    },
    realpathSync: Object.assign(function realpathSync(pathLike) {
      return vfs2.realpathSync(resolvePath(pathLike));
    }, {
      native(pathLike) {
        return vfs2.realpathSync(resolvePath(pathLike));
      }
    }),
    accessSync(pathLike, _mode) {
      vfs2.accessSync(resolvePath(pathLike));
    },
    copyFileSync(srcLike, destLike) {
      const src = resolvePath(srcLike);
      const dest = resolvePath(destLike);
      const data = vfs2.readFileSync(src);
      vfs2.writeFileSync(dest, data);
    },
    watch(pathLike, optionsOrListener, listener) {
      return vfs2.watch(resolvePath(pathLike), optionsOrListener, listener);
    },
    readFile(pathLike, optionsOrCallback, callback) {
      const path = resolvePath(pathLike);
      vfs2.readFile(path, optionsOrCallback, callback);
    },
    stat(pathLike, callback) {
      vfs2.stat(resolvePath(pathLike), callback);
    },
    lstat(pathLike, callback) {
      vfs2.lstat(resolvePath(pathLike), callback);
    },
    readdir(pathLike, optionsOrCallback, callback) {
      const cb = typeof optionsOrCallback === "function" ? optionsOrCallback : callback;
      const opts = typeof optionsOrCallback === "function" ? undefined : optionsOrCallback;
      const path = resolvePath(pathLike);
      try {
        const entries = vfs2.readdirSync(path);
        if (opts?.withFileTypes) {
          const dirents = entries.map((name) => {
            const entryPath = path.endsWith("/") ? path + name : path + "/" + name;
            let isDir = false;
            let isFile = false;
            try {
              const stat = vfs2.statSync(entryPath);
              isDir = stat.isDirectory();
              isFile = stat.isFile();
            } catch {
              isFile = true;
            }
            return new Dirent(name, isDir, isFile);
          });
          cb?.(null, dirents);
        } else {
          cb?.(null, entries);
        }
      } catch (err) {
        cb?.(err);
      }
    },
    realpath(pathLike, callback) {
      vfs2.realpath(resolvePath(pathLike), callback);
    },
    access(pathLike, modeOrCallback, callback) {
      vfs2.access(resolvePath(pathLike), modeOrCallback, callback);
    },
    createReadStream(pathLike) {
      return vfs2.createReadStream(resolvePath(pathLike));
    },
    createWriteStream(pathLike) {
      return vfs2.createWriteStream(resolvePath(pathLike));
    },
    promises,
    constants
  };
}

// .cache/browser-demo/almost-src/shims/path.ts
var exports_path = {};
__export(exports_path, {
  basename: () => basename,
  default: () => path_default,
  delimiter: () => delimiter,
  dirname: () => dirname2,
  extname: () => extname,
  format: () => format,
  isAbsolute: () => isAbsolute,
  join: () => join,
  normalize: () => normalize,
  parse: () => parse,
  posix: () => posix,
  relative: () => relative,
  resolve: () => resolve,
  sep: () => sep,
  win32: () => win32
});
var sep = "/";
var delimiter = ":";
function normalize(path) {
  if (!path)
    return ".";
  const isAbsolute2 = path.startsWith("/");
  const parts = path.split("/").filter(Boolean);
  const resolved = [];
  for (const part of parts) {
    if (part === "..") {
      if (resolved.length > 0 && resolved[resolved.length - 1] !== "..") {
        resolved.pop();
      } else if (!isAbsolute2) {
        resolved.push("..");
      }
    } else if (part !== ".") {
      resolved.push(part);
    }
  }
  let result = resolved.join("/");
  if (isAbsolute2) {
    result = "/" + result;
  }
  return result || ".";
}
function join(...paths) {
  if (paths.length === 0)
    return ".";
  return normalize(paths.filter(Boolean).join("/"));
}
function resolve(...paths) {
  let resolvedPath2 = "";
  for (let i = paths.length - 1;i >= 0 && !resolvedPath2.startsWith("/"); i--) {
    const path = paths[i];
    if (!path)
      continue;
    resolvedPath2 = path + (resolvedPath2 ? "/" + resolvedPath2 : "");
  }
  if (!resolvedPath2.startsWith("/")) {
    const cwd = typeof globalThis !== "undefined" && globalThis.process && typeof globalThis.process.cwd === "function" ? globalThis.process.cwd() : "/";
    resolvedPath2 = cwd + (resolvedPath2 ? "/" + resolvedPath2 : "");
  }
  return normalize(resolvedPath2);
}
function isAbsolute(path) {
  return path.startsWith("/");
}
function dirname2(path) {
  if (!path)
    return ".";
  const normalized = normalize(path);
  const lastSlash = normalized.lastIndexOf("/");
  if (lastSlash === -1)
    return ".";
  if (lastSlash === 0)
    return "/";
  return normalized.slice(0, lastSlash);
}
function basename(path, ext) {
  if (!path)
    return "";
  const normalized = normalize(path);
  let base = normalized.slice(normalized.lastIndexOf("/") + 1);
  if (ext && base.endsWith(ext)) {
    base = base.slice(0, -ext.length);
  }
  return base;
}
function extname(path) {
  const base = basename(path);
  const dotIndex = base.lastIndexOf(".");
  if (dotIndex <= 0)
    return "";
  return base.slice(dotIndex);
}
function relative(from, to) {
  from = resolve(from);
  to = resolve(to);
  if (from === to)
    return "";
  const fromParts = from.split("/").filter(Boolean);
  const toParts = to.split("/").filter(Boolean);
  let commonLength = 0;
  for (let i = 0;i < Math.min(fromParts.length, toParts.length); i++) {
    if (fromParts[i] !== toParts[i])
      break;
    commonLength++;
  }
  const upCount = fromParts.length - commonLength;
  const remainingPath = toParts.slice(commonLength);
  const result = [...Array(upCount).fill(".."), ...remainingPath];
  return result.join("/") || ".";
}
function parse(path) {
  const normalized = normalize(path);
  const isAbs = isAbsolute(normalized);
  const dir = dirname2(normalized);
  const base = basename(normalized);
  const ext = extname(normalized);
  const name = base.slice(0, base.length - ext.length);
  return {
    root: isAbs ? "/" : "",
    dir,
    base,
    ext,
    name
  };
}
function format(pathObject) {
  const dir = pathObject.dir || pathObject.root || "";
  const base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
  if (!dir)
    return base;
  if (dir === pathObject.root)
    return dir + base;
  return dir + "/" + base;
}
var posix = {
  sep,
  delimiter,
  normalize,
  join,
  resolve,
  isAbsolute,
  dirname: dirname2,
  basename,
  extname,
  relative,
  parse,
  format
};
var win32 = {
  sep: "\\",
  delimiter: ";",
  normalize,
  join,
  resolve,
  isAbsolute,
  dirname: dirname2,
  basename,
  extname,
  relative,
  parse,
  format
};
var path_default = {
  sep,
  delimiter,
  normalize,
  join,
  resolve,
  isAbsolute,
  dirname: dirname2,
  basename,
  extname,
  relative,
  parse,
  format,
  posix,
  win32
};

// .cache/browser-demo/almost-src/shims/events.ts
var kEvents = Symbol("events");
var kMaxListeners = Symbol("maxListeners");

class EventEmitter {
  [kEvents];
  [kMaxListeners];
  _getEvents() {
    const self = this;
    if (!self[kEvents]) {
      self[kEvents] = new Map;
    }
    return self[kEvents];
  }
  on(event, listener) {
    return this.addListener(event, listener);
  }
  addListener(event, listener) {
    const events = this._getEvents();
    if (!events.has(event)) {
      events.set(event, []);
    }
    events.get(event).push(listener);
    return this;
  }
  once(event, listener) {
    const onceWrapper = (...args) => {
      this.removeListener(event, onceWrapper);
      listener.apply(this, args);
    };
    return this.addListener(event, onceWrapper);
  }
  off(event, listener) {
    return this.removeListener(event, listener);
  }
  removeListener(event, listener) {
    const events = this._getEvents();
    const listeners = events.get(event);
    if (listeners) {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
    return this;
  }
  removeAllListeners(event) {
    const events = this._getEvents();
    if (event) {
      events.delete(event);
    } else {
      events.clear();
    }
    return this;
  }
  emit(event, ...args) {
    const events = this._getEvents();
    const listeners = events.get(event);
    if (!listeners || listeners.length === 0) {
      if (event === "error") {
        const err = args[0];
        if (err instanceof Error) {
          throw err;
        }
        throw new Error("Unhandled error event");
      }
      return false;
    }
    for (const listener of [...listeners]) {
      try {
        listener.apply(this, args);
      } catch (err) {
        console.error("Error in event listener:", err);
      }
    }
    return true;
  }
  listeners(event) {
    const events = this._getEvents();
    return [...events.get(event) || []];
  }
  rawListeners(event) {
    return this.listeners(event);
  }
  listenerCount(event) {
    const events = this._getEvents();
    return events.get(event)?.length || 0;
  }
  eventNames() {
    const events = this._getEvents();
    return [...events.keys()];
  }
  setMaxListeners(n) {
    this[kMaxListeners] = n;
    return this;
  }
  getMaxListeners() {
    return this[kMaxListeners] || 10;
  }
  prependListener(event, listener) {
    const events = this._getEvents();
    if (!events.has(event)) {
      events.set(event, []);
    }
    events.get(event).unshift(listener);
    return this;
  }
  prependOnceListener(event, listener) {
    const onceWrapper = (...args) => {
      this.removeListener(event, onceWrapper);
      listener.apply(this, args);
    };
    return this.prependListener(event, onceWrapper);
  }
  static listenerCount(emitter, event) {
    return emitter.listenerCount(event);
  }
}
var events = EventEmitter;
events.EventEmitter = EventEmitter;
events.once = async (emitter, event) => {
  return new Promise((resolve, reject) => {
    const onEvent = (...args) => {
      emitter.removeListener("error", onError);
      resolve(args);
    };
    const onError = (...args) => {
      emitter.removeListener(event, onEvent);
      reject(args[0]);
    };
    emitter.once(event, onEvent);
    emitter.once("error", onError);
  });
};
events.on = (emitter, event) => {
  const iterator = {
    async next() {
      return new Promise((resolve) => {
        emitter.once(event, (...args) => resolve({ value: args, done: false }));
      });
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
  return iterator;
};
events.getEventListeners = (emitter, event) => emitter.listeners(event);
events.listenerCount = (emitter, event) => emitter.listenerCount(event);
var events_default = events;

// .cache/browser-demo/almost-src/shims/process.ts
function createProcessStream(isWritable, writeImpl) {
  const emitter = new EventEmitter;
  const stream = {
    isTTY: false,
    on(event, listener) {
      emitter.on(event, listener);
      return stream;
    },
    once(event, listener) {
      emitter.once(event, listener);
      return stream;
    },
    off(event, listener) {
      emitter.off(event, listener);
      return stream;
    },
    emit(event, ...args) {
      return emitter.emit(event, ...args);
    },
    addListener(event, listener) {
      emitter.addListener(event, listener);
      return stream;
    },
    removeListener(event, listener) {
      emitter.removeListener(event, listener);
      return stream;
    },
    removeAllListeners(event) {
      emitter.removeAllListeners(event);
      return stream;
    },
    setMaxListeners(n) {
      emitter.setMaxListeners(n);
      return stream;
    },
    getMaxListeners() {
      return emitter.getMaxListeners();
    },
    listenerCount(event) {
      return emitter.listenerCount(event);
    },
    listeners(event) {
      return emitter.listeners(event);
    },
    rawListeners(event) {
      return emitter.rawListeners(event);
    },
    prependListener(event, listener) {
      emitter.prependListener(event, listener);
      return stream;
    },
    prependOnceListener(event, listener) {
      emitter.prependOnceListener(event, listener);
      return stream;
    },
    eventNames() {
      return emitter.eventNames();
    },
    pause() {
      return stream;
    },
    resume() {
      return stream;
    },
    setEncoding(_encoding) {
      return stream;
    },
    write(_data, _encoding, callback) {
      if (callback)
        queueMicrotask(callback);
      return true;
    },
    end(_data, callback) {
      if (callback)
        queueMicrotask(callback);
    },
    read() {
      return null;
    },
    setRawMode(_mode) {
      return stream;
    }
  };
  if (isWritable && writeImpl) {
    stream.write = (data, _encoding, callback) => {
      const result = writeImpl(typeof data === "string" ? data : data.toString());
      if (callback)
        queueMicrotask(callback);
      return result;
    };
  }
  return stream;
}
function createProcess(options2) {
  let currentDir2 = options2?.cwd || "/";
  const env = {
    NODE_ENV: "development",
    PATH: "/usr/local/bin:/usr/bin:/bin",
    HOME: "/",
    ...options2?.env
  };
  const emitter = new EventEmitter;
  const startTime = Date.now();
  const proc = {
    env,
    cwd() {
      if (!proc._cwdCallCount)
        proc._cwdCallCount = 0;
      proc._cwdCallCount++;
      if (proc._cwdCallCount <= 5 || proc._cwdCallCount % 100 === 0) {
        console.log(`[process] cwd() called (${proc._cwdCallCount}x), returning:`, currentDir2);
      }
      return currentDir2;
    },
    chdir(directory) {
      console.log("[process] chdir called:", directory, "from:", currentDir2);
      if (!directory.startsWith("/")) {
        directory = currentDir2 + "/" + directory;
      }
      currentDir2 = directory;
      console.log("[process] chdir result:", currentDir2);
    },
    platform: "linux",
    version: "v20.0.0",
    versions: { node: "20.0.0", v8: "11.3.244.8", uv: "1.44.2" },
    argv: ["node", "/index.js"],
    argv0: "node",
    execPath: "/usr/local/bin/node",
    execArgv: [],
    pid: 1,
    ppid: 0,
    exit(code2 = 0) {
      emitter.emit("exit", code2);
      if (options2?.onExit) {
        options2.onExit(code2);
      }
      throw new Error(`Process exited with code ${code2}`);
    },
    nextTick(callback, ...args) {
      queueMicrotask(() => callback(...args));
    },
    stdout: createProcessStream(true, (data) => {
      if (options2?.onStdout) {
        options2.onStdout(data);
      } else {
        console.log(data);
      }
      return true;
    }),
    stderr: createProcessStream(true, (data) => {
      if (options2?.onStderr) {
        options2.onStderr(data);
      } else {
        console.error(data);
      }
      return true;
    }),
    stdin: createProcessStream(false),
    hrtime: Object.assign(function hrtime(time) {
      const now = performance.now();
      const seconds = Math.floor(now / 1000);
      const nanoseconds = Math.floor(now % 1000 * 1e6);
      if (time) {
        const diffSeconds = seconds - time[0];
        const diffNanos = nanoseconds - time[1];
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanoseconds];
    }, {
      bigint: () => BigInt(Math.floor(performance.now() * 1e6))
    }),
    memoryUsage() {
      return {
        rss: 50 * 1024 * 1024,
        heapTotal: 30 * 1024 * 1024,
        heapUsed: 20 * 1024 * 1024,
        external: 1 * 1024 * 1024,
        arrayBuffers: 0
      };
    },
    uptime() {
      return (Date.now() - startTime) / 1000;
    },
    cpuUsage() {
      return { user: 0, system: 0 };
    },
    on(event, listener) {
      emitter.on(event, listener);
      return proc;
    },
    once(event, listener) {
      emitter.once(event, listener);
      return proc;
    },
    off(event, listener) {
      emitter.off(event, listener);
      return proc;
    },
    emit(event, ...args) {
      return emitter.emit(event, ...args);
    },
    addListener(event, listener) {
      emitter.addListener(event, listener);
      return proc;
    },
    removeListener(event, listener) {
      emitter.removeListener(event, listener);
      return proc;
    },
    removeAllListeners(event) {
      emitter.removeAllListeners(event);
      return proc;
    },
    listeners(event) {
      return emitter.listeners(event);
    },
    listenerCount(event) {
      return emitter.listenerCount(event);
    },
    prependListener(event, listener) {
      emitter.prependListener(event, listener);
      return proc;
    },
    prependOnceListener(event, listener) {
      emitter.prependOnceListener(event, listener);
      return proc;
    },
    eventNames() {
      return emitter.eventNames();
    },
    setMaxListeners(n) {
      emitter.setMaxListeners(n);
      return proc;
    },
    getMaxListeners() {
      return emitter.getMaxListeners();
    }
  };
  return proc;
}
var process2 = createProcess();

// .cache/browser-demo/almost-src/shims/http.ts
var exports_http = {};
__export(exports_http, {
  Agent: () => Agent,
  ClientRequest: () => ClientRequest,
  IncomingMessage: () => IncomingMessage,
  METHODS: () => METHODS,
  STATUS_CODES: () => STATUS_CODES,
  Server: () => Server2,
  ServerResponse: () => ServerResponse,
  _createClientRequest: () => _createClientRequest,
  _createWsFrame: () => _createWsFrame,
  _parseWsFrame: () => _parseWsFrame,
  _registerServer: () => _registerServer,
  _unregisterServer: () => _unregisterServer,
  createServer: () => createServer2,
  default: () => http_default,
  get: () => get,
  getAllServers: () => getAllServers,
  getServer: () => getServer,
  globalAgent: () => globalAgent,
  request: () => request,
  setServerCloseCallback: () => setServerCloseCallback,
  setServerListenCallback: () => setServerListenCallback
});

// .cache/browser-demo/almost-src/shims/stream.ts
var _encoder2 = new TextEncoder;
var _decoder2 = new TextDecoder("utf-8");

class Readable extends EventEmitter {
  _buffer = [];
  _ended = false;
  _flowing = false;
  _endEmitted = false;
  readable = true;
  readableEnded = false;
  readableFlowing = null;
  constructor() {
    super();
  }
  _addListenerInternal(event, listener) {
    EventEmitter.prototype.addListener.call(this, event, listener);
    return this;
  }
  on(event, listener) {
    this._addListenerInternal(event, listener);
    if (event === "data" && !this._flowing) {
      queueMicrotask(() => {
        if (this.listenerCount("data") > 0 && !this._flowing) {
          this.resume();
        }
      });
    }
    return this;
  }
  addListener(event, listener) {
    return this.on(event, listener);
  }
  push(chunk) {
    if (chunk === null) {
      this._ended = true;
      this.readableEnded = true;
      this.readable = false;
      if (this._flowing && this._buffer.length === 0 && !this._endEmitted) {
        this._endEmitted = true;
        queueMicrotask(() => this.emit("end"));
      }
      return false;
    }
    const buffer = typeof chunk === "string" ? Buffer.from(chunk) : chunk;
    this._buffer.push(buffer);
    if (this._flowing) {
      queueMicrotask(() => {
        this._flushBuffer();
      });
    }
    return true;
  }
  _flushBuffer() {
    while (this._buffer.length > 0 && this._flowing) {
      const data = this._buffer.shift();
      this.emit("data", data);
    }
    if (this._ended && this._buffer.length === 0 && !this._endEmitted) {
      this._endEmitted = true;
      this.emit("end");
    }
  }
  read(size) {
    if (this._buffer.length === 0) {
      return null;
    }
    if (size === undefined) {
      const result = Buffer.concat(this._buffer);
      this._buffer = [];
      return result;
    }
    const chunks = [];
    let remaining = size;
    while (remaining > 0 && this._buffer.length > 0) {
      const chunk = this._buffer[0];
      if (chunk.length <= remaining) {
        chunks.push(this._buffer.shift());
        remaining -= chunk.length;
      } else {
        chunks.push(chunk.slice(0, remaining));
        this._buffer[0] = chunk.slice(remaining);
        remaining = 0;
      }
    }
    return chunks.length > 0 ? Buffer.concat(chunks) : null;
  }
  resume() {
    this._flowing = true;
    this.readableFlowing = true;
    this._flushBuffer();
    return this;
  }
  pause() {
    this._flowing = false;
    this.readableFlowing = false;
    return this;
  }
  pipe(destination) {
    this.on("data", (chunk) => {
      destination.write(chunk);
    });
    this.on("end", () => {
      destination.end();
    });
    this.resume();
    return destination;
  }
  unpipe(destination) {
    this.removeAllListeners("data");
    this.removeAllListeners("end");
    return this;
  }
  setEncoding(encoding) {
    return this;
  }
  destroy(error) {
    this._buffer = [];
    this._ended = true;
    this.readable = false;
    if (error) {
      this.emit("error", error);
    }
    this.emit("close");
    return this;
  }
  static from(iterable, options2) {
    const readable = new Readable;
    (async () => {
      try {
        for await (const chunk of iterable) {
          if (chunk !== null && chunk !== undefined) {
            const data = typeof chunk === "string" ? Buffer.from(chunk) : chunk;
            readable.push(data);
          }
        }
        readable.push(null);
      } catch (err) {
        readable.destroy(err);
      }
    })();
    return readable;
  }
}

class Writable extends EventEmitter {
  _chunks = [];
  _ended = false;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  constructor() {
    super();
  }
  write(chunk, encodingOrCallback, callback) {
    if (this._ended) {
      const error = new Error("write after end");
      if (typeof encodingOrCallback === "function") {
        encodingOrCallback(error);
      } else if (callback) {
        callback(error);
      }
      return false;
    }
    const buffer = typeof chunk === "string" ? Buffer.from(chunk) : chunk;
    this._chunks.push(buffer);
    const cb = typeof encodingOrCallback === "function" ? encodingOrCallback : callback;
    if (cb) {
      queueMicrotask(() => cb(null));
    }
    return true;
  }
  end(chunkOrCallback, encodingOrCallback, callback) {
    if (typeof chunkOrCallback === "function") {
      callback = chunkOrCallback;
    } else if (chunkOrCallback !== undefined) {
      this.write(chunkOrCallback);
    }
    if (typeof encodingOrCallback === "function") {
      callback = encodingOrCallback;
    }
    this._ended = true;
    this.writable = false;
    this.writableEnded = true;
    queueMicrotask(() => {
      this.writableFinished = true;
      this.emit("finish");
      if (callback) {
        callback();
      }
    });
    return this;
  }
  getBuffer() {
    return Buffer.concat(this._chunks);
  }
  getBufferAsString(encoding = "utf8") {
    return this.getBuffer().toString(encoding);
  }
  destroy(error) {
    this._chunks = [];
    this._ended = true;
    this.writable = false;
    if (error) {
      this.emit("error", error);
    }
    this.emit("close");
    return this;
  }
  cork() {}
  uncork() {}
  setDefaultEncoding(encoding) {
    return this;
  }
}

class Duplex extends Readable {
  _writeChunks = [];
  _writeEnded = false;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  write(chunk, encodingOrCallback, callback) {
    if (this._writeEnded) {
      return false;
    }
    const buffer = typeof chunk === "string" ? Buffer.from(chunk) : chunk;
    this._writeChunks.push(buffer);
    const cb = typeof encodingOrCallback === "function" ? encodingOrCallback : callback;
    if (cb) {
      queueMicrotask(() => cb(null));
    }
    return true;
  }
  end(chunkOrCallback, encodingOrCallback, callback) {
    if (typeof chunkOrCallback === "function") {
      callback = chunkOrCallback;
    } else if (chunkOrCallback !== undefined) {
      this.write(chunkOrCallback);
    }
    this._writeEnded = true;
    this.writable = false;
    this.writableEnded = true;
    queueMicrotask(() => {
      this.writableFinished = true;
      this.emit("finish");
      if (callback) {
        callback();
      }
    });
    return this;
  }
}

class PassThrough extends Duplex {
  constructor() {
    super();
  }
  write(chunk, encodingOrCallback, callback) {
    const buffer = typeof chunk === "string" ? Buffer.from(chunk) : chunk;
    this.push(buffer);
    const cb = typeof encodingOrCallback === "function" ? encodingOrCallback : callback;
    if (cb) {
      queueMicrotask(() => cb(null));
    }
    return true;
  }
}

class Transform extends Duplex {
  constructor() {
    super();
  }
  _transform(chunk, encoding, callback) {
    callback(null, chunk);
  }
  _flush(callback) {
    callback(null);
  }
  write(chunk, encodingOrCallback, callback) {
    const buffer = typeof chunk === "string" ? Buffer.from(chunk) : chunk;
    const encoding = typeof encodingOrCallback === "string" ? encodingOrCallback : "utf8";
    const cb = typeof encodingOrCallback === "function" ? encodingOrCallback : callback;
    this._transform(buffer, encoding, (error, data) => {
      if (error) {
        if (cb)
          cb(error);
        return;
      }
      if (data) {
        this.push(data);
      }
      if (cb)
        cb(null);
    });
    return true;
  }
  end(chunkOrCallback, encodingOrCallback, callback) {
    this._flush((error, data) => {
      if (data) {
        this.push(data);
      }
    });
    return super.end(chunkOrCallback, encodingOrCallback, callback);
  }
}

class Stream extends EventEmitter {
  pipe(destination) {
    return destination;
  }
}
Stream.Readable = Readable;
Stream.Writable = Writable;
Stream.Duplex = Duplex;
Stream.Transform = Transform;
Stream.PassThrough = PassThrough;
Stream.Stream = Stream;
Stream.from = Readable.from;
var promises = {
  pipeline: async (...streams) => {
    return Promise.resolve();
  },
  finished: async (stream) => {
    return Promise.resolve();
  }
};
function pipeline(...args) {
  const callback = args[args.length - 1];
  if (typeof callback === "function") {
    setTimeout(() => callback(), 0);
  }
  return args[args.length - 2] || args[0];
}
function finished(stream, callback) {
  setTimeout(() => callback(), 0);
  return () => {};
}

class BufferPolyfill extends Uint8Array {
  static BYTES_PER_ELEMENT = 1;
  static from(value, encodingOrMapfn, thisArg) {
    if (typeof encodingOrMapfn === "function") {
      const arrayLike = value;
      const mapped = Array.from(arrayLike, encodingOrMapfn, thisArg);
      return new BufferPolyfill(mapped);
    }
    const data = value;
    const encoding = encodingOrMapfn;
    if (Array.isArray(data)) {
      return new BufferPolyfill(data);
    }
    if (typeof data === "string") {
      const enc = (encoding || "utf8").toLowerCase();
      if (enc === "base64" || enc === "base64url") {
        let base64 = data;
        if (enc === "base64url") {
          base64 = data.replace(/-/g, "+").replace(/_/g, "/");
          while (base64.length % 4 !== 0) {
            base64 += "=";
          }
        }
        const binary = atob(base64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0;i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        return new BufferPolyfill(bytes);
      }
      if (enc === "hex") {
        const bytes = new Uint8Array(data.length / 2);
        for (let i = 0;i < data.length; i += 2) {
          bytes[i / 2] = parseInt(data.slice(i, i + 2), 16);
        }
        return new BufferPolyfill(bytes);
      }
      if (enc === "latin1" || enc === "binary") {
        const bytes = new Uint8Array(data.length);
        for (let i = 0;i < data.length; i++) {
          bytes[i] = data.charCodeAt(i) & 255;
        }
        return new BufferPolyfill(bytes);
      }
      const bytes = _encoder2.encode(data);
      return new BufferPolyfill(bytes);
    }
    if (data instanceof ArrayBuffer) {
      return new BufferPolyfill(data);
    }
    return new BufferPolyfill(data);
  }
  static alloc(size, fill) {
    const buffer = new BufferPolyfill(size);
    if (fill !== undefined) {
      buffer.fill(fill);
    }
    return buffer;
  }
  static allocUnsafe(size) {
    return new BufferPolyfill(size);
  }
  static allocUnsafeSlow(size) {
    return new BufferPolyfill(size);
  }
  static concat(buffers) {
    const totalLength = buffers.reduce((sum, buf) => sum + buf.length, 0);
    const result = new BufferPolyfill(totalLength);
    let offset = 0;
    for (const buf of buffers) {
      result.set(buf, offset);
      offset += buf.length;
    }
    return result;
  }
  static isBuffer(obj) {
    return obj instanceof BufferPolyfill || obj instanceof Uint8Array;
  }
  static isEncoding(encoding) {
    return ["utf8", "utf-8", "ascii", "latin1", "binary", "base64", "base64url", "hex"].includes(encoding.toLowerCase());
  }
  static byteLength(string, encoding) {
    const enc = (encoding || "utf8").toLowerCase();
    if (enc === "base64" || enc === "base64url") {
      const base64 = string.replace(/[=]/g, "");
      return Math.floor(base64.length * 3 / 4);
    }
    if (enc === "hex") {
      return string.length / 2;
    }
    return _encoder2.encode(string).length;
  }
  toString(encoding = "utf8") {
    const enc = (encoding || "utf8").toLowerCase();
    if (enc === "base64") {
      return uint8ToBase64(this);
    }
    if (enc === "base64url") {
      return uint8ToBase64(this).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    }
    if (enc === "hex") {
      return uint8ToHex(this);
    }
    if (enc === "latin1" || enc === "binary") {
      return uint8ToBinaryString(this);
    }
    return _decoder2.decode(this);
  }
  slice(start, end) {
    return new BufferPolyfill(super.slice(start, end));
  }
  subarray(start, end) {
    return new BufferPolyfill(super.subarray(start, end));
  }
  write(string, offset) {
    const bytes = _encoder2.encode(string);
    this.set(bytes, offset || 0);
    return bytes.length;
  }
  copy(target, targetStart, sourceStart, sourceEnd) {
    const src = this.subarray(sourceStart || 0, sourceEnd);
    target.set(src, targetStart || 0);
    return src.length;
  }
  compare(otherBuffer) {
    const len = Math.min(this.length, otherBuffer.length);
    for (let i = 0;i < len; i++) {
      if (this[i] < otherBuffer[i])
        return -1;
      if (this[i] > otherBuffer[i])
        return 1;
    }
    if (this.length < otherBuffer.length)
      return -1;
    if (this.length > otherBuffer.length)
      return 1;
    return 0;
  }
  equals(otherBuffer) {
    return this.compare(otherBuffer) === 0;
  }
  toJSON() {
    return {
      type: "Buffer",
      data: Array.from(this)
    };
  }
  hasOwnProperty(prop) {
    return Object.prototype.hasOwnProperty.call(this, prop);
  }
  readUInt8(offset) {
    return this[offset];
  }
  readUInt16BE(offset) {
    return this[offset] << 8 | this[offset + 1];
  }
  readUInt16LE(offset) {
    return this[offset] | this[offset + 1] << 8;
  }
  readUInt32BE(offset) {
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  }
  readUInt32LE(offset) {
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  }
  writeUInt8(value, offset) {
    this[offset] = value & 255;
    return offset + 1;
  }
  writeUInt16BE(value, offset) {
    this[offset] = value >> 8 & 255;
    this[offset + 1] = value & 255;
    return offset + 2;
  }
  writeUInt16LE(value, offset) {
    this[offset] = value & 255;
    this[offset + 1] = value >> 8 & 255;
    return offset + 2;
  }
  writeUInt32BE(value, offset) {
    this[offset] = value >> 24 & 255;
    this[offset + 1] = value >> 16 & 255;
    this[offset + 2] = value >> 8 & 255;
    this[offset + 3] = value & 255;
    return offset + 4;
  }
  writeUInt32LE(value, offset) {
    this[offset] = value & 255;
    this[offset + 1] = value >> 8 & 255;
    this[offset + 2] = value >> 16 & 255;
    this[offset + 3] = value >> 24 & 255;
    return offset + 4;
  }
  readUint8(offset) {
    return this.readUInt8(offset);
  }
  readUint16BE(offset) {
    return this.readUInt16BE(offset);
  }
  readUint16LE(offset) {
    return this.readUInt16LE(offset);
  }
  readUint32BE(offset) {
    return this.readUInt32BE(offset);
  }
  readUint32LE(offset) {
    return this.readUInt32LE(offset);
  }
  writeUint8(value, offset) {
    return this.writeUInt8(value, offset);
  }
  writeUint16BE(value, offset) {
    return this.writeUInt16BE(value, offset);
  }
  writeUint16LE(value, offset) {
    return this.writeUInt16LE(value, offset);
  }
  writeUint32BE(value, offset) {
    return this.writeUInt32BE(value, offset);
  }
  writeUint32LE(value, offset) {
    return this.writeUInt32LE(value, offset);
  }
  readInt8(offset) {
    const val = this[offset];
    return val & 128 ? val - 256 : val;
  }
  readInt16BE(offset) {
    const val = this.readUInt16BE(offset);
    return val & 32768 ? val - 65536 : val;
  }
  readInt16LE(offset) {
    const val = this.readUInt16LE(offset);
    return val & 32768 ? val - 65536 : val;
  }
  readInt32BE(offset) {
    const val = this.readUInt32BE(offset);
    return val | 0;
  }
  readInt32LE(offset) {
    const val = this.readUInt32LE(offset);
    return val | 0;
  }
  writeInt8(value, offset) {
    this[offset] = value & 255;
    return offset + 1;
  }
  writeInt16BE(value, offset) {
    return this.writeUInt16BE(value & 65535, offset);
  }
  writeInt16LE(value, offset) {
    return this.writeUInt16LE(value & 65535, offset);
  }
  writeInt32BE(value, offset) {
    return this.writeUInt32BE(value >>> 0, offset);
  }
  writeInt32LE(value, offset) {
    return this.writeUInt32LE(value >>> 0, offset);
  }
  readBigUInt64LE(offset) {
    const lo = BigInt(this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24) & 0xffffffffn;
    const hi = BigInt(this[offset + 4] | this[offset + 5] << 8 | this[offset + 6] << 16 | this[offset + 7] << 24) & 0xffffffffn;
    return lo | hi << 32n;
  }
  readBigUInt64BE(offset) {
    const hi = BigInt(this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]) & 0xffffffffn;
    const lo = BigInt(this[offset + 4] << 24 | this[offset + 5] << 16 | this[offset + 6] << 8 | this[offset + 7]) & 0xffffffffn;
    return lo | hi << 32n;
  }
  readBigInt64LE(offset) {
    const val = this.readBigUInt64LE(offset);
    if (val >= 0x8000000000000000n) {
      return val - 0x10000000000000000n;
    }
    return val;
  }
  readBigInt64BE(offset) {
    const val = this.readBigUInt64BE(offset);
    if (val >= 0x8000000000000000n) {
      return val - 0x10000000000000000n;
    }
    return val;
  }
  writeBigUInt64LE(value, offset) {
    const lo = value & 0xffffffffn;
    const hi = value >> 32n & 0xffffffffn;
    this[offset] = Number(lo & 0xffn);
    this[offset + 1] = Number(lo >> 8n & 0xffn);
    this[offset + 2] = Number(lo >> 16n & 0xffn);
    this[offset + 3] = Number(lo >> 24n & 0xffn);
    this[offset + 4] = Number(hi & 0xffn);
    this[offset + 5] = Number(hi >> 8n & 0xffn);
    this[offset + 6] = Number(hi >> 16n & 0xffn);
    this[offset + 7] = Number(hi >> 24n & 0xffn);
    return offset + 8;
  }
  writeBigUInt64BE(value, offset) {
    const lo = value & 0xffffffffn;
    const hi = value >> 32n & 0xffffffffn;
    this[offset] = Number(hi >> 24n & 0xffn);
    this[offset + 1] = Number(hi >> 16n & 0xffn);
    this[offset + 2] = Number(hi >> 8n & 0xffn);
    this[offset + 3] = Number(hi & 0xffn);
    this[offset + 4] = Number(lo >> 24n & 0xffn);
    this[offset + 5] = Number(lo >> 16n & 0xffn);
    this[offset + 6] = Number(lo >> 8n & 0xffn);
    this[offset + 7] = Number(lo & 0xffn);
    return offset + 8;
  }
  writeBigInt64LE(value, offset) {
    const unsigned = value < 0n ? value + 0x10000000000000000n : value;
    return this.writeBigUInt64LE(unsigned, offset);
  }
  writeBigInt64BE(value, offset) {
    const unsigned = value < 0n ? value + 0x10000000000000000n : value;
    return this.writeBigUInt64BE(unsigned, offset);
  }
  readBigUint64LE(offset) {
    return this.readBigUInt64LE(offset);
  }
  readBigUint64BE(offset) {
    return this.readBigUInt64BE(offset);
  }
  writeBigUint64LE(value, offset) {
    return this.writeBigUInt64LE(value, offset);
  }
  writeBigUint64BE(value, offset) {
    return this.writeBigUInt64BE(value, offset);
  }
  readFloatLE(offset) {
    const view = new DataView(this.buffer, this.byteOffset + offset, 4);
    return view.getFloat32(0, true);
  }
  readFloatBE(offset) {
    const view = new DataView(this.buffer, this.byteOffset + offset, 4);
    return view.getFloat32(0, false);
  }
  readDoubleLE(offset) {
    const view = new DataView(this.buffer, this.byteOffset + offset, 8);
    return view.getFloat64(0, true);
  }
  readDoubleBE(offset) {
    const view = new DataView(this.buffer, this.byteOffset + offset, 8);
    return view.getFloat64(0, false);
  }
  writeFloatLE(value, offset) {
    const view = new DataView(this.buffer, this.byteOffset + offset, 4);
    view.setFloat32(0, value, true);
    return offset + 4;
  }
  writeFloatBE(value, offset) {
    const view = new DataView(this.buffer, this.byteOffset + offset, 4);
    view.setFloat32(0, value, false);
    return offset + 4;
  }
  writeDoubleLE(value, offset) {
    const view = new DataView(this.buffer, this.byteOffset + offset, 8);
    view.setFloat64(0, value, true);
    return offset + 8;
  }
  writeDoubleBE(value, offset) {
    const view = new DataView(this.buffer, this.byteOffset + offset, 8);
    view.setFloat64(0, value, false);
    return offset + 8;
  }
  readUIntLE(offset, byteLength) {
    let val = 0;
    let mul = 1;
    for (let i = 0;i < byteLength; i++) {
      val += this[offset + i] * mul;
      mul *= 256;
    }
    return val;
  }
  readUintLE(offset, byteLength) {
    return this.readUIntLE(offset, byteLength);
  }
  readUIntBE(offset, byteLength) {
    let val = 0;
    let mul = 1;
    for (let i = byteLength - 1;i >= 0; i--) {
      val += this[offset + i] * mul;
      mul *= 256;
    }
    return val;
  }
  readUintBE(offset, byteLength) {
    return this.readUIntBE(offset, byteLength);
  }
  readIntLE(offset, byteLength) {
    let val = this.readUIntLE(offset, byteLength);
    const limit = Math.pow(2, byteLength * 8 - 1);
    if (val >= limit) {
      val -= Math.pow(2, byteLength * 8);
    }
    return val;
  }
  readIntBE(offset, byteLength) {
    let val = this.readUIntBE(offset, byteLength);
    const limit = Math.pow(2, byteLength * 8 - 1);
    if (val >= limit) {
      val -= Math.pow(2, byteLength * 8);
    }
    return val;
  }
  writeUIntLE(value, offset, byteLength) {
    let val = value;
    for (let i = 0;i < byteLength; i++) {
      this[offset + i] = val & 255;
      val = Math.floor(val / 256);
    }
    return offset + byteLength;
  }
  writeUintLE(value, offset, byteLength) {
    return this.writeUIntLE(value, offset, byteLength);
  }
  writeUIntBE(value, offset, byteLength) {
    let val = value;
    for (let i = byteLength - 1;i >= 0; i--) {
      this[offset + i] = val & 255;
      val = Math.floor(val / 256);
    }
    return offset + byteLength;
  }
  writeUintBE(value, offset, byteLength) {
    return this.writeUIntBE(value, offset, byteLength);
  }
  writeIntLE(value, offset, byteLength) {
    let val = value;
    if (val < 0) {
      val += Math.pow(2, byteLength * 8);
    }
    return this.writeUIntLE(val, offset, byteLength);
  }
  writeIntBE(value, offset, byteLength) {
    let val = value;
    if (val < 0) {
      val += Math.pow(2, byteLength * 8);
    }
    return this.writeUIntBE(val, offset, byteLength);
  }
  swap16() {
    const len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (let i = 0;i < len; i += 2) {
      const a = this[i];
      this[i] = this[i + 1];
      this[i + 1] = a;
    }
    return this;
  }
  swap32() {
    const len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (let i = 0;i < len; i += 4) {
      const a = this[i];
      const b = this[i + 1];
      this[i] = this[i + 3];
      this[i + 1] = this[i + 2];
      this[i + 2] = b;
      this[i + 3] = a;
    }
    return this;
  }
  swap64() {
    const len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (let i = 0;i < len; i += 8) {
      const a = this[i];
      const b = this[i + 1];
      const c = this[i + 2];
      const d = this[i + 3];
      this[i] = this[i + 7];
      this[i + 1] = this[i + 6];
      this[i + 2] = this[i + 5];
      this[i + 3] = this[i + 4];
      this[i + 4] = d;
      this[i + 5] = c;
      this[i + 6] = b;
      this[i + 7] = a;
    }
    return this;
  }
}
if (typeof globalThis.Buffer === "undefined") {
  globalThis.Buffer = BufferPolyfill;
}
Stream.pipeline = pipeline;
Stream.finished = finished;
Stream.promises = promises;
var stream_default = Stream;

// .cache/browser-demo/almost-src/shims/net.ts
var exports_net = {};
__export(exports_net, {
  Server: () => Server,
  Socket: () => Socket,
  connect: () => connect,
  createConnection: () => createConnection,
  createServer: () => createServer,
  default: () => net_default,
  isIP: () => isIP,
  isIPv4: () => isIPv4,
  isIPv6: () => isIPv6
});
class Socket extends Duplex {
  _connecting = false;
  _connected = false;
  _destroyed = false;
  _remoteAddress = "";
  _remotePort = 0;
  _localAddress = "127.0.0.1";
  _localPort = 0;
  localAddress = "127.0.0.1";
  localPort = 0;
  remoteAddress;
  remotePort;
  remoteFamily;
  connecting = false;
  destroyed = false;
  readyState = "closed";
  constructor(options2) {
    super();
  }
  connect(portOrOptions, hostOrCallback, callback) {
    let port;
    let host = "127.0.0.1";
    let cb;
    if (typeof portOrOptions === "number") {
      port = portOrOptions;
      if (typeof hostOrCallback === "string") {
        host = hostOrCallback;
        cb = callback;
      } else {
        cb = hostOrCallback;
      }
    } else {
      port = portOrOptions.port;
      host = portOrOptions.host || "127.0.0.1";
      cb = typeof hostOrCallback === "function" ? hostOrCallback : callback;
    }
    this._connecting = true;
    this.connecting = true;
    this._remoteAddress = host;
    this._remotePort = port;
    this.remoteAddress = host;
    this.remotePort = port;
    this.remoteFamily = "IPv4";
    this.readyState = "opening";
    queueMicrotask(() => {
      this._connecting = false;
      this._connected = true;
      this.connecting = false;
      this.readyState = "open";
      this.emit("connect");
      if (cb)
        cb();
    });
    return this;
  }
  address() {
    if (!this._connected)
      return null;
    return {
      address: this._localAddress,
      family: "IPv4",
      port: this._localPort
    };
  }
  setEncoding(encoding) {
    return this;
  }
  setTimeout(timeout, callback) {
    if (callback) {
      this.once("timeout", callback);
    }
    return this;
  }
  setNoDelay(noDelay) {
    return this;
  }
  setKeepAlive(enable, initialDelay) {
    return this;
  }
  ref() {
    return this;
  }
  unref() {
    return this;
  }
  destroy(error) {
    if (this._destroyed)
      return this;
    this._destroyed = true;
    this._connected = false;
    this.destroyed = true;
    this.readyState = "closed";
    if (error) {
      this.emit("error", error);
    }
    queueMicrotask(() => {
      this.emit("close", !!error);
    });
    return this;
  }
  _receiveData(data) {
    const buffer = typeof data === "string" ? BufferPolyfill.from(data) : data;
    this.push(buffer);
  }
  _receiveEnd() {
    this.push(null);
  }
}

class Server extends EventEmitter {
  _listening = false;
  _address = null;
  _connections = new Set;
  _maxConnections = Infinity;
  listening = false;
  maxConnections;
  constructor(optionsOrConnectionListener, connectionListener) {
    super();
    let listener;
    if (typeof optionsOrConnectionListener === "function") {
      listener = optionsOrConnectionListener;
    } else {
      listener = connectionListener;
    }
    if (listener) {
      this.on("connection", listener);
    }
  }
  listen(portOrOptions, hostOrCallback, backlogOrCallback, callback) {
    let port = 0;
    let host = "0.0.0.0";
    let cb;
    if (typeof portOrOptions === "number") {
      port = portOrOptions;
      if (typeof hostOrCallback === "string") {
        host = hostOrCallback;
        if (typeof backlogOrCallback === "function") {
          cb = backlogOrCallback;
        } else {
          cb = callback;
        }
      } else if (typeof hostOrCallback === "function") {
        cb = hostOrCallback;
      } else if (typeof hostOrCallback === "number") {
        cb = typeof backlogOrCallback === "function" ? backlogOrCallback : callback;
      } else {
        if (typeof backlogOrCallback === "function") {
          cb = backlogOrCallback;
        } else if (typeof callback === "function") {
          cb = callback;
        }
      }
    } else if (portOrOptions) {
      port = portOrOptions.port || 0;
      host = portOrOptions.host || "0.0.0.0";
      cb = typeof hostOrCallback === "function" ? hostOrCallback : callback;
    }
    if (port === 0) {
      port = 3000 + Math.floor(Math.random() * 1000);
    }
    this._address = {
      address: host,
      family: "IPv4",
      port
    };
    this._listening = true;
    this.listening = true;
    queueMicrotask(() => {
      this.emit("listening");
      if (cb)
        cb();
    });
    return this;
  }
  address() {
    return this._address;
  }
  close(callback) {
    this._listening = false;
    this.listening = false;
    for (const socket of this._connections) {
      socket.destroy();
    }
    this._connections.clear();
    queueMicrotask(() => {
      this.emit("close");
      if (callback)
        callback();
    });
    return this;
  }
  getConnections(callback) {
    callback(null, this._connections.size);
  }
  ref() {
    return this;
  }
  unref() {
    return this;
  }
  _handleConnection(socket) {
    if (!this._listening) {
      socket.destroy();
      return;
    }
    this._connections.add(socket);
    socket.on("close", () => {
      this._connections.delete(socket);
    });
    this.emit("connection", socket);
  }
}
function createServer(optionsOrConnectionListener, connectionListener) {
  return new Server(optionsOrConnectionListener, connectionListener);
}
function createConnection(portOrOptions, hostOrCallback, callback) {
  const socket = new Socket;
  return socket.connect(portOrOptions, hostOrCallback, callback);
}
var connect = createConnection;
function isIP(input) {
  if (/^(\d{1,3}\.){3}\d{1,3}$/.test(input)) {
    return 4;
  }
  if (/^([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}$/.test(input)) {
    return 6;
  }
  return 0;
}
function isIPv4(input) {
  return isIP(input) === 4;
}
function isIPv6(input) {
  return isIP(input) === 6;
}
var net_default = {
  Socket,
  Server,
  createServer,
  createConnection,
  connect,
  isIP,
  isIPv4,
  isIPv6
};

// .cache/browser-demo/almost-src/shims/crypto.ts
var exports_crypto = {};
__export(exports_crypto, {
  KeyObject: () => KeyObject,
  constants: () => constants,
  createHash: () => createHash,
  createHmac: () => createHmac,
  createPrivateKey: () => createPrivateKey,
  createPublicKey: () => createPublicKey,
  createSecretKey: () => createSecretKey,
  createSign: () => createSign,
  createVerify: () => createVerify,
  default: () => crypto_default,
  getCiphers: () => getCiphers,
  getHashes: () => getHashes,
  getRandomValues: () => getRandomValues,
  pbkdf2: () => pbkdf2,
  pbkdf2Sync: () => pbkdf2Sync,
  randomBytes: () => randomBytes,
  randomFillSync: () => randomFillSync,
  randomInt: () => randomInt,
  randomUUID: () => randomUUID,
  sign: () => sign,
  timingSafeEqual: () => timingSafeEqual,
  verify: () => verify
});
function randomBytes(size) {
  const array = new Uint8Array(size);
  crypto.getRandomValues(array);
  return BufferPolyfill.from(array);
}
function randomFillSync(buffer, offset, size) {
  const start = offset || 0;
  const len = size !== undefined ? size : buffer.length - start;
  const view = new Uint8Array(buffer.buffer, buffer.byteOffset + start, len);
  crypto.getRandomValues(view);
  return buffer;
}
function randomUUID() {
  return crypto.randomUUID();
}
function randomInt(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  const range = max - min;
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return min + array[0] % range;
}
function getRandomValues(array) {
  return crypto.getRandomValues(array);
}
function createHash(algorithm) {
  return new Hash(algorithm);
}

class Hash {
  algorithm;
  data = [];
  constructor(algorithm) {
    this.algorithm = normalizeHashAlgorithm(algorithm);
  }
  update(data, encoding) {
    let buffer;
    if (typeof data === "string") {
      if (encoding === "base64") {
        buffer = BufferPolyfill.from(atob(data));
      } else {
        buffer = BufferPolyfill.from(data);
      }
    } else {
      buffer = BufferPolyfill.from(data);
    }
    this.data.push(buffer);
    return this;
  }
  async digestAsync(encoding) {
    const combined = concatBuffers(this.data);
    const dataBuffer = new Uint8Array(combined).buffer;
    const hashBuffer = await crypto.subtle.digest(this.algorithm, dataBuffer);
    return encodeResult(new Uint8Array(hashBuffer), encoding);
  }
  digest(encoding) {
    const combined = concatBuffers(this.data);
    const hash = syncHash(combined, this.algorithm);
    return encodeResult(hash, encoding);
  }
}
function createHmac(algorithm, key) {
  return new Hmac(algorithm, key);
}

class Hmac {
  algorithm;
  key;
  data = [];
  constructor(algorithm, key) {
    this.algorithm = normalizeHashAlgorithm(algorithm);
    this.key = typeof key === "string" ? BufferPolyfill.from(key) : key;
  }
  update(data, encoding) {
    const buffer = typeof data === "string" ? BufferPolyfill.from(data) : data;
    this.data.push(buffer);
    return this;
  }
  async digestAsync(encoding) {
    const combined = concatBuffers(this.data);
    const keyBuffer = new Uint8Array(this.key).buffer;
    const dataBuffer = new Uint8Array(combined).buffer;
    const cryptoKey = await crypto.subtle.importKey("raw", keyBuffer, { name: "HMAC", hash: this.algorithm }, false, ["sign"]);
    const signature = await crypto.subtle.sign("HMAC", cryptoKey, dataBuffer);
    return encodeResult(new Uint8Array(signature), encoding);
  }
  digest(encoding) {
    const combined = concatBuffers(this.data);
    const hash = syncHmac(combined, this.key, this.algorithm);
    return encodeResult(hash, encoding);
  }
}
async function pbkdf2Async(password, salt, iterations, keylen, digest) {
  const passwordBuffer = typeof password === "string" ? BufferPolyfill.from(password) : password instanceof Uint8Array ? password : BufferPolyfill.from(password);
  const saltBuffer = typeof salt === "string" ? BufferPolyfill.from(salt) : salt instanceof Uint8Array ? salt : BufferPolyfill.from(salt);
  const passwordArrayBuffer = new Uint8Array(passwordBuffer).buffer;
  const saltArrayBuffer = new Uint8Array(saltBuffer).buffer;
  const key = await crypto.subtle.importKey("raw", passwordArrayBuffer, "PBKDF2", false, ["deriveBits"]);
  const derivedBits = await crypto.subtle.deriveBits({
    name: "PBKDF2",
    salt: saltArrayBuffer,
    iterations,
    hash: normalizeHashAlgorithm(digest)
  }, key, keylen * 8);
  return BufferPolyfill.from(derivedBits);
}
function pbkdf2(password, salt, iterations, keylen, digest, callback) {
  pbkdf2Async(password, salt, iterations, keylen, digest).then((key) => callback(null, key)).catch((err) => callback(err, BufferPolyfill.alloc(0)));
}
function pbkdf2Sync(password, salt, iterations, keylen, digest) {
  const passwordBuffer = typeof password === "string" ? BufferPolyfill.from(password) : password;
  const saltBuffer = typeof salt === "string" ? BufferPolyfill.from(salt) : salt;
  const hashAlg = normalizeHashAlgorithm(digest);
  let hashLen;
  if (hashAlg.includes("512")) {
    hashLen = 64;
  } else if (hashAlg.includes("384")) {
    hashLen = 48;
  } else if (hashAlg.includes("1") || hashAlg === "SHA-1") {
    hashLen = 20;
  } else {
    hashLen = 32;
  }
  const numBlocks = Math.ceil(keylen / hashLen);
  const derivedKey = new Uint8Array(numBlocks * hashLen);
  for (let blockNum = 1;blockNum <= numBlocks; blockNum++) {
    const blockNumBuf = new Uint8Array(4);
    blockNumBuf[0] = blockNum >>> 24 & 255;
    blockNumBuf[1] = blockNum >>> 16 & 255;
    blockNumBuf[2] = blockNum >>> 8 & 255;
    blockNumBuf[3] = blockNum & 255;
    const saltWithBlock = new Uint8Array(saltBuffer.length + 4);
    saltWithBlock.set(saltBuffer);
    saltWithBlock.set(blockNumBuf, saltBuffer.length);
    let u = syncHmac(saltWithBlock, passwordBuffer, hashAlg);
    const block = new Uint8Array(u);
    for (let i = 1;i < iterations; i++) {
      u = syncHmac(u, passwordBuffer, hashAlg);
      for (let j = 0;j < block.length; j++) {
        block[j] ^= u[j];
      }
    }
    derivedKey.set(block, (blockNum - 1) * hashLen);
  }
  return BufferPolyfill.from(derivedKey.slice(0, keylen));
}
function sign(algorithm, data, key, callback) {
  const keyInfo = extractKeyInfo(key);
  const alg = algorithm || keyInfo.algorithm;
  if (!alg) {
    const error = new Error("Algorithm must be specified");
    if (callback) {
      callback(error, null);
      return;
    }
    throw error;
  }
  if (callback) {
    signAsync(alg, data, keyInfo).then((sig) => callback(null, sig)).catch((err) => callback(err, null));
    return;
  }
  const result = signSync(alg, data, keyInfo);
  return result;
}
function verify(algorithm, data, key, signature, callback) {
  const keyInfo = extractKeyInfo(key);
  const alg = algorithm || keyInfo.algorithm;
  if (!alg) {
    const error = new Error("Algorithm must be specified");
    if (callback) {
      callback(error, false);
      return;
    }
    throw error;
  }
  if (callback) {
    verifyAsync(alg, data, keyInfo, signature).then((result) => callback(null, result)).catch((err) => callback(err, false));
    return;
  }
  return verifySync(alg, data, keyInfo, signature);
}
function createSign(algorithm) {
  return new Sign(algorithm);
}
function createVerify(algorithm) {
  return new Verify(algorithm);
}

class Sign extends EventEmitter {
  algorithm;
  data = [];
  constructor(algorithm) {
    super();
    this.algorithm = algorithm;
  }
  update(data, encoding) {
    const buffer = typeof data === "string" ? BufferPolyfill.from(data) : data;
    this.data.push(buffer);
    return this;
  }
  sign(privateKey, outputEncoding) {
    const combined = concatBuffers(this.data);
    const keyInfo = extractKeyInfo(privateKey);
    const signature = signSync(this.algorithm, combined, keyInfo);
    if (outputEncoding === "base64") {
      return btoa(String.fromCharCode(...signature));
    }
    if (outputEncoding === "hex") {
      return Array.from(signature).map((b) => b.toString(16).padStart(2, "0")).join("");
    }
    return signature;
  }
}

class Verify extends EventEmitter {
  algorithm;
  data = [];
  constructor(algorithm) {
    super();
    this.algorithm = algorithm;
  }
  update(data, encoding) {
    const buffer = typeof data === "string" ? BufferPolyfill.from(data) : data;
    this.data.push(buffer);
    return this;
  }
  verify(publicKey, signature, signatureEncoding) {
    const combined = concatBuffers(this.data);
    const keyInfo = extractKeyInfo(publicKey);
    let sig;
    if (typeof signature === "string") {
      if (signatureEncoding === "base64") {
        sig = BufferPolyfill.from(atob(signature));
      } else if (signatureEncoding === "hex") {
        sig = BufferPolyfill.from(signature.match(/.{2}/g).map((byte) => parseInt(byte, 16)));
      } else {
        sig = BufferPolyfill.from(signature);
      }
    } else {
      sig = signature;
    }
    return verifySync(this.algorithm, combined, keyInfo, sig);
  }
}

class KeyObject {
  _keyData;
  _type;
  _algorithm;
  constructor(type, keyData, algorithm) {
    this._type = type;
    this._keyData = keyData;
    this._algorithm = algorithm;
  }
  get type() {
    return this._type;
  }
  get asymmetricKeyType() {
    if (this._type === "secret")
      return;
    if (this._algorithm?.includes("RSA"))
      return "rsa";
    if (this._algorithm?.includes("EC") || this._algorithm?.includes("ES"))
      return "ec";
    if (this._algorithm?.includes("Ed"))
      return "ed25519";
    return;
  }
  get symmetricKeySize() {
    if (this._type !== "secret")
      return;
    if (this._keyData instanceof Uint8Array) {
      return this._keyData.length * 8;
    }
    return;
  }
  export(options2) {
    if (this._keyData instanceof Uint8Array) {
      return BufferPolyfill.from(this._keyData);
    }
    throw new Error("Cannot export CryptoKey synchronously");
  }
}
function createSecretKey(key, encoding) {
  const keyBuffer = typeof key === "string" ? BufferPolyfill.from(key, encoding) : key;
  return new KeyObject("secret", keyBuffer);
}
function createPublicKey(key) {
  const keyInfo = extractKeyInfo(key);
  return new KeyObject("public", keyInfo.keyData, keyInfo.algorithm);
}
function createPrivateKey(key) {
  const keyInfo = extractKeyInfo(key);
  return new KeyObject("private", keyInfo.keyData, keyInfo.algorithm);
}
function timingSafeEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let result = 0;
  for (let i = 0;i < a.length; i++) {
    result |= a[i] ^ b[i];
  }
  return result === 0;
}
function getCiphers() {
  return ["aes-128-cbc", "aes-256-cbc", "aes-128-gcm", "aes-256-gcm"];
}
function getHashes() {
  return ["sha1", "sha256", "sha384", "sha512"];
}
var constants = {
  SSL_OP_ALL: 0,
  RSA_PKCS1_PADDING: 1,
  RSA_PKCS1_OAEP_PADDING: 4,
  RSA_PKCS1_PSS_PADDING: 6
};
function normalizeHashAlgorithm(alg) {
  const normalized = alg.toUpperCase().replace(/[^A-Z0-9]/g, "");
  switch (normalized) {
    case "SHA1":
      return "SHA-1";
    case "SHA256":
      return "SHA-256";
    case "SHA384":
      return "SHA-384";
    case "SHA512":
      return "SHA-512";
    case "MD5":
      return "MD5";
    default:
      return alg;
  }
}
function getWebCryptoAlgorithm(nodeAlgorithm) {
  const alg = nodeAlgorithm.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (alg.includes("RSA")) {
    if (alg.includes("PSS")) {
      const hash = alg.match(/SHA(\d+)/)?.[0] || "SHA-256";
      return { name: "RSA-PSS", hash: `SHA-${hash.replace("SHA", "")}` };
    }
    const hash = alg.match(/SHA(\d+)/)?.[0] || "SHA-256";
    return { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${hash.replace("SHA", "")}` };
  }
  if (alg.startsWith("ES") || alg.includes("ECDSA")) {
    const bits = alg.match(/\d+/)?.[0] || "256";
    const hash = bits === "512" ? "SHA-512" : bits === "384" ? "SHA-384" : "SHA-256";
    return { name: "ECDSA", hash };
  }
  if (alg.includes("ED25519") || alg === "EDDSA") {
    return { name: "Ed25519" };
  }
  if (alg.includes("HS") || alg.includes("HMAC")) {
    const bits = alg.match(/\d+/)?.[0] || "256";
    return { name: "HMAC", hash: `SHA-${bits}` };
  }
  return { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" };
}
function extractKeyInfo(key) {
  if (key instanceof KeyObject) {
    return {
      keyData: key._keyData,
      algorithm: key._algorithm,
      type: key._type,
      format: "raw"
    };
  }
  if (typeof key === "object" && "key" in key) {
    return extractKeyInfo(key.key);
  }
  const keyStr = typeof key === "string" ? key : key.toString();
  if (keyStr.includes("-----BEGIN")) {
    const isPrivate = keyStr.includes("PRIVATE");
    const isPublic = keyStr.includes("PUBLIC");
    const base64 = keyStr.replace(/-----BEGIN [^-]+-----/, "").replace(/-----END [^-]+-----/, "").replace(/\s/g, "");
    const keyData = BufferPolyfill.from(atob(base64));
    let algorithm;
    if (keyStr.includes("RSA"))
      algorithm = "RSA-SHA256";
    else if (keyStr.includes("EC"))
      algorithm = "ES256";
    else if (keyStr.includes("ED25519"))
      algorithm = "Ed25519";
    return {
      keyData,
      algorithm,
      type: isPrivate ? "private" : isPublic ? "public" : "secret",
      format: "pem"
    };
  }
  const keyData = typeof key === "string" ? BufferPolyfill.from(key) : key;
  return {
    keyData,
    type: "secret",
    format: "raw"
  };
}
function concatBuffers(buffers) {
  const totalLength = buffers.reduce((acc, arr) => acc + arr.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const buf of buffers) {
    result.set(buf, offset);
    offset += buf.length;
  }
  return result;
}
function encodeResult(data, encoding) {
  if (encoding === "hex") {
    return Array.from(data).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  if (encoding === "base64") {
    return btoa(String.fromCharCode(...data));
  }
  return BufferPolyfill.from(data);
}
function syncHash(data, algorithm) {
  let size;
  if (algorithm.includes("512")) {
    size = 64;
  } else if (algorithm.includes("384")) {
    size = 48;
  } else if (algorithm.includes("1") || algorithm === "SHA-1") {
    size = 20;
  } else {
    size = 32;
  }
  const result = new Uint8Array(size);
  let h1 = 3735928559;
  let h2 = 1103547991;
  for (let i = 0;i < data.length; i++) {
    h1 = Math.imul(h1 ^ data[i], 2654435761);
    h2 = Math.imul(h2 ^ data[i], 1597334677);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
  for (let i = 0;i < size; i++) {
    const mix = i < size / 2 ? h1 : h2;
    result[i] = mix >>> i % 4 * 8 & 255;
    h1 = Math.imul(h1, 1103515245) + 12345;
    h2 = Math.imul(h2, 1103515245) + 12345;
  }
  return result;
}
function syncHmac(data, key, algorithm) {
  const combined = new Uint8Array(key.length + data.length);
  combined.set(key, 0);
  combined.set(data, key.length);
  return syncHash(combined, algorithm);
}
async function signAsync(algorithm, data, keyInfo) {
  const webCryptoAlg = getWebCryptoAlgorithm(algorithm);
  try {
    const cryptoKey = await importKey(keyInfo, webCryptoAlg, ["sign"]);
    const signatureAlg = webCryptoAlg.hash ? { name: webCryptoAlg.name, hash: webCryptoAlg.hash } : { name: webCryptoAlg.name };
    const dataBuffer = new Uint8Array(data).buffer;
    const signature = await crypto.subtle.sign(signatureAlg, cryptoKey, dataBuffer);
    return BufferPolyfill.from(signature);
  } catch (error) {
    console.warn("WebCrypto sign failed, using fallback:", error);
    return signSync(algorithm, data, keyInfo);
  }
}
async function verifyAsync(algorithm, data, keyInfo, signature) {
  const webCryptoAlg = getWebCryptoAlgorithm(algorithm);
  try {
    const cryptoKey = await importKey(keyInfo, webCryptoAlg, ["verify"]);
    const verifyAlg = webCryptoAlg.hash ? { name: webCryptoAlg.name, hash: webCryptoAlg.hash } : { name: webCryptoAlg.name };
    const sigBuffer = new Uint8Array(signature).buffer;
    const dataBuffer = new Uint8Array(data).buffer;
    return await crypto.subtle.verify(verifyAlg, cryptoKey, sigBuffer, dataBuffer);
  } catch (error) {
    console.warn("WebCrypto verify failed, using fallback:", error);
    return verifySync(algorithm, data, keyInfo, signature);
  }
}
function signSync(algorithm, data, keyInfo) {
  const keyData = keyInfo.keyData instanceof Uint8Array ? keyInfo.keyData : new Uint8Array(0);
  const combined = new Uint8Array(keyData.length + data.length);
  combined.set(keyData, 0);
  combined.set(data, keyData.length);
  const hash = syncHash(combined, algorithm);
  return BufferPolyfill.from(hash);
}
function verifySync(algorithm, data, keyInfo, signature) {
  const expectedSig = signSync(algorithm, data, keyInfo);
  return timingSafeEqual(BufferPolyfill.from(signature), expectedSig);
}
async function importKey(keyInfo, algorithm, usages) {
  if (keyInfo.keyData instanceof CryptoKey) {
    return keyInfo.keyData;
  }
  const keyData = keyInfo.keyData;
  const keyBuffer = new Uint8Array(keyData).buffer;
  if (keyInfo.format === "pem") {
    const format = keyInfo.type === "private" ? "pkcs8" : "spki";
    const importAlg = algorithm.name === "ECDSA" ? { name: "ECDSA", namedCurve: "P-256" } : algorithm.name === "Ed25519" ? { name: "Ed25519" } : { name: algorithm.name, hash: algorithm.hash || "SHA-256" };
    return await crypto.subtle.importKey(format, keyBuffer, importAlg, true, usages);
  }
  if (keyInfo.type === "secret") {
    return await crypto.subtle.importKey("raw", keyBuffer, { name: algorithm.name, hash: algorithm.hash }, true, usages);
  }
  throw new Error(`Unsupported key format: ${keyInfo.format}`);
}
var crypto_default = {
  randomBytes,
  randomFillSync,
  randomUUID,
  randomInt,
  getRandomValues,
  createHash,
  createHmac,
  createSign,
  createVerify,
  sign,
  verify,
  pbkdf2,
  pbkdf2Sync,
  timingSafeEqual,
  getCiphers,
  getHashes,
  constants,
  KeyObject,
  createSecretKey,
  createPublicKey,
  createPrivateKey
};

// .cache/browser-demo/almost-src/shims/http.ts
var _isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
var _BrowserWebSocket = _isBrowser && typeof globalThis.WebSocket === "function" ? globalThis.WebSocket : null;

class IncomingMessage extends Readable {
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = false;
  headers = {};
  rawHeaders = [];
  trailers = {};
  rawTrailers = [];
  method;
  url;
  statusCode;
  statusMessage;
  socket;
  _body = null;
  constructor(socket) {
    super();
    this.socket = socket || new Socket;
  }
  setTimeout(msecs, callback) {
    if (callback) {
      this.once("timeout", callback);
    }
    return this;
  }
  destroy(error) {
    super.destroy(error);
    return this;
  }
  _setBody(body) {
    if (body === null) {
      this._body = null;
    } else {
      this._body = typeof body === "string" ? BufferPolyfill.from(body) : body;
    }
    if (this._body) {
      this.push(this._body);
    }
    this.push(null);
    this.complete = true;
  }
  static fromRequest(method, url, headers, body) {
    const msg = new IncomingMessage;
    msg.method = method;
    msg.url = url;
    msg.headers = { ...headers };
    for (const [key, value] of Object.entries(headers)) {
      msg.rawHeaders.push(key, value);
    }
    if (body) {
      msg._setBody(body);
    } else {
      msg.push(null);
      msg.complete = true;
    }
    return msg;
  }
}

class ServerResponse extends Writable {
  statusCode = 200;
  statusMessage = "OK";
  headersSent = false;
  finished = false;
  sendDate = true;
  socket;
  _headers = new Map;
  _body = [];
  _resolve;
  constructor(req) {
    super();
    this.socket = req.socket;
  }
  _setResolver(resolve) {
    this._resolve = resolve;
  }
  setHeader(name, value) {
    if (this.headersSent) {
      throw new Error("Cannot set headers after they are sent");
    }
    this._headers.set(name.toLowerCase(), String(value));
    return this;
  }
  getHeader(name) {
    return this._headers.get(name.toLowerCase());
  }
  getHeaders() {
    const headers = {};
    for (const [key, value] of this._headers) {
      headers[key] = value;
    }
    return headers;
  }
  getHeaderNames() {
    return [...this._headers.keys()];
  }
  hasHeader(name) {
    return this._headers.has(name.toLowerCase());
  }
  removeHeader(name) {
    if (this.headersSent) {
      throw new Error("Cannot remove headers after they are sent");
    }
    this._headers.delete(name.toLowerCase());
  }
  writeHead(statusCode, statusMessageOrHeaders, headers) {
    this.statusCode = statusCode;
    if (typeof statusMessageOrHeaders === "string") {
      this.statusMessage = statusMessageOrHeaders;
      if (headers) {
        for (const [key, value] of Object.entries(headers)) {
          this.setHeader(key, value);
        }
      }
    } else if (statusMessageOrHeaders) {
      for (const [key, value] of Object.entries(statusMessageOrHeaders)) {
        this.setHeader(key, value);
      }
    }
    return this;
  }
  write(chunk, encodingOrCallback, callback) {
    this.headersSent = true;
    const buffer = typeof chunk === "string" ? BufferPolyfill.from(chunk) : chunk;
    this._body.push(buffer);
    const cb = typeof encodingOrCallback === "function" ? encodingOrCallback : callback;
    if (cb) {
      queueMicrotask(() => cb(null));
    }
    return true;
  }
  end(chunkOrCallback, encodingOrCallback, callback) {
    if (typeof chunkOrCallback === "function") {
      callback = chunkOrCallback;
    } else if (chunkOrCallback !== undefined) {
      this.write(chunkOrCallback);
    }
    if (typeof encodingOrCallback === "function") {
      callback = encodingOrCallback;
    }
    this.headersSent = true;
    this.finished = true;
    if (this._resolve) {
      const headers = {};
      for (const [key, value] of this._headers) {
        headers[key] = Array.isArray(value) ? value.join(", ") : value;
      }
      this._resolve({
        statusCode: this.statusCode,
        statusMessage: this.statusMessage,
        headers,
        body: BufferPolyfill.concat(this._body)
      });
    }
    queueMicrotask(() => {
      this.emit("finish");
      if (callback)
        callback();
    });
    return this;
  }
  send(data) {
    if (typeof data === "object" && !BufferPolyfill.isBuffer(data)) {
      this.setHeader("Content-Type", "application/json");
      data = JSON.stringify(data);
    }
    if (!this.hasHeader("Content-Type")) {
      this.setHeader("Content-Type", "text/html");
    }
    this.write(typeof data === "string" ? data : data);
    return this.end();
  }
  json(data) {
    this.setHeader("Content-Type", "application/json");
    return this.end(JSON.stringify(data));
  }
  status(code2) {
    this.statusCode = code2;
    return this;
  }
  redirect(urlOrStatus, url) {
    if (typeof urlOrStatus === "number") {
      this.statusCode = urlOrStatus;
      this.setHeader("Location", url);
    } else {
      this.statusCode = 302;
      this.setHeader("Location", urlOrStatus);
    }
    this.end();
  }
  _getBody() {
    return BufferPolyfill.concat(this._body);
  }
  _getBodyAsString() {
    return this._getBody().toString("utf8");
  }
}

class Server2 extends EventEmitter {
  _netServer;
  _requestListener;
  _pendingRequests = new Map;
  listening = false;
  maxHeadersCount = null;
  timeout = 0;
  keepAliveTimeout = 5000;
  headersTimeout = 60000;
  requestTimeout = 0;
  constructor(requestListener) {
    super();
    this._requestListener = requestListener;
    this._netServer = new Server;
    this._netServer.on("listening", () => {
      this.listening = true;
      this.emit("listening");
    });
    this._netServer.on("close", () => {
      this.listening = false;
      this.emit("close");
    });
    this._netServer.on("error", (err) => {
      this.emit("error", err);
    });
  }
  listen(portOrOptions, hostOrCallback, callback) {
    let port;
    let host;
    let cb;
    if (typeof portOrOptions === "number") {
      port = portOrOptions;
      if (typeof hostOrCallback === "string") {
        host = hostOrCallback;
        cb = callback;
      } else {
        cb = hostOrCallback;
      }
    } else if (portOrOptions) {
      port = portOrOptions.port;
      host = portOrOptions.host;
      cb = typeof hostOrCallback === "function" ? hostOrCallback : callback;
    }
    const originalCb = cb;
    const self = this;
    cb = function() {
      const addr = self._netServer.address();
      if (addr) {
        _registerServer(addr.port, self);
      }
      if (originalCb)
        originalCb();
    };
    this._netServer.listen(port, host, cb);
    return this;
  }
  close(callback) {
    const addr = this._netServer.address();
    if (addr) {
      _unregisterServer(addr.port);
    }
    this._netServer.close(callback);
    return this;
  }
  address() {
    return this._netServer.address();
  }
  setTimeout(msecs, callback) {
    this.timeout = msecs || 0;
    if (callback) {
      this.on("timeout", callback);
    }
    return this;
  }
  ref() {
    this._netServer.ref();
    return this;
  }
  unref() {
    this._netServer.unref();
    return this;
  }
  async handleRequest(method, url, headers, body) {
    return new Promise((resolve, reject) => {
      const req = IncomingMessage.fromRequest(method, url, headers, body);
      const res = new ServerResponse(req);
      res._setResolver(resolve);
      const timeoutId = this.timeout ? setTimeout(() => {
        reject(new Error("Request timeout"));
      }, this.timeout) : null;
      res.on("finish", () => {
        if (timeoutId)
          clearTimeout(timeoutId);
      });
      try {
        this.emit("request", req, res);
        if (this._requestListener) {
          this._requestListener(req, res);
        }
      } catch (error) {
        if (timeoutId)
          clearTimeout(timeoutId);
        reject(error);
      }
    });
  }
}
function createServer2(requestListener) {
  return new Server2(requestListener);
}
var STATUS_CODES = {
  100: "Continue",
  101: "Switching Protocols",
  200: "OK",
  201: "Created",
  202: "Accepted",
  204: "No Content",
  301: "Moved Permanently",
  302: "Found",
  304: "Not Modified",
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  408: "Request Timeout",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable"
};
var METHODS = [
  "GET",
  "POST",
  "PUT",
  "DELETE",
  "PATCH",
  "HEAD",
  "OPTIONS",
  "CONNECT",
  "TRACE"
];
function getCorsProxy() {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("__corsProxyUrl") || null;
  }
  return null;
}

class ClientRequest extends Writable {
  method;
  path;
  headers;
  _options;
  _protocol;
  _bodyChunks = [];
  _aborted = false;
  _timeout = null;
  _timeoutId = null;
  _requestEnded = false;
  constructor(options2, protocol = "http") {
    super();
    this._options = options2;
    this._protocol = protocol;
    this.method = options2.method || "GET";
    this.path = options2.path || "/";
    this.headers = {};
    if (options2.headers) {
      for (const [key, value] of Object.entries(options2.headers)) {
        this.headers[key.toLowerCase()] = Array.isArray(value) ? value.join(", ") : value;
      }
    }
  }
  setHeader(name, value) {
    this.headers[name.toLowerCase()] = value;
  }
  getHeader(name) {
    return this.headers[name.toLowerCase()];
  }
  removeHeader(name) {
    delete this.headers[name.toLowerCase()];
  }
  write(chunk, encodingOrCallback, callback) {
    const buffer = typeof chunk === "string" ? BufferPolyfill.from(chunk) : chunk;
    this._bodyChunks.push(buffer);
    const cb = typeof encodingOrCallback === "function" ? encodingOrCallback : callback;
    if (cb) {
      queueMicrotask(() => cb(null));
    }
    return true;
  }
  end(dataOrCallback, encodingOrCallback, callback) {
    if (this._requestEnded)
      return this;
    this._requestEnded = true;
    let finalCallback = callback;
    if (typeof dataOrCallback === "function") {
      finalCallback = dataOrCallback;
    } else if (dataOrCallback !== undefined) {
      this.write(dataOrCallback);
    }
    if (typeof encodingOrCallback === "function") {
      finalCallback = encodingOrCallback;
    }
    this._performRequest().then(() => {
      if (finalCallback)
        finalCallback();
    }).catch((error) => {
      this.emit("error", error);
    });
    return this;
  }
  abort() {
    this._aborted = true;
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
    }
    this.emit("abort");
  }
  setTimeout(ms, callback) {
    this._timeout = ms;
    if (callback) {
      this.once("timeout", callback);
    }
    return this;
  }
  async _performRequest() {
    if (this._aborted)
      return;
    try {
      const protocol = this._protocol === "https" ? "https:" : "http:";
      let hostname = this._options.hostname || "";
      let port = this._options.port ? `:${this._options.port}` : "";
      if (!hostname && this._options.host) {
        const hostParts = this._options.host.split(":");
        hostname = hostParts[0];
        if (!port && hostParts[1]) {
          port = `:${hostParts[1]}`;
        }
      }
      if (!hostname)
        hostname = "localhost";
      const path = this._options.path || "/";
      const url = `${protocol}//${hostname}${port}${path}`;
      if (this.headers["upgrade"]?.toLowerCase() === "websocket") {
        this._handleWebSocketUpgrade(url);
        return;
      }
      const corsProxy = getCorsProxy();
      const fetchUrl = corsProxy ? corsProxy + encodeURIComponent(url) : url;
      const fetchOptions = {
        method: this.method,
        headers: this.headers
      };
      if (this._bodyChunks.length > 0 && this.method !== "GET" && this.method !== "HEAD") {
        fetchOptions.body = BufferPolyfill.concat(this._bodyChunks);
      }
      const controller = new AbortController;
      fetchOptions.signal = controller.signal;
      if (this._timeout) {
        this._timeoutId = setTimeout(() => {
          controller.abort();
          this.emit("timeout");
        }, this._timeout);
      }
      const response = await fetch(fetchUrl, fetchOptions);
      if (this._timeoutId) {
        clearTimeout(this._timeoutId);
        this._timeoutId = null;
      }
      if (this._aborted)
        return;
      const incomingMessage = await this._responseToIncomingMessage(response);
      this.emit("response", incomingMessage);
    } catch (error) {
      if (this._timeoutId) {
        clearTimeout(this._timeoutId);
      }
      if (this._aborted)
        return;
      if (error instanceof Error && error.name === "AbortError") {
        return;
      }
      this.emit("error", error);
    }
  }
  async _responseToIncomingMessage(response) {
    const msg = new IncomingMessage;
    msg.statusCode = response.status;
    msg.statusMessage = response.statusText || STATUS_CODES[response.status] || "";
    response.headers.forEach((value, key) => {
      msg.headers[key.toLowerCase()] = value;
      msg.rawHeaders.push(key, value);
    });
    const body = await response.arrayBuffer();
    msg._setBody(BufferPolyfill.from(body));
    return msg;
  }
  _handleWebSocketUpgrade(url) {
    const wsUrl = url.replace(/^https:/, "wss:").replace(/^http:/, "ws:");
    const wsKey = this.headers["sec-websocket-key"] || "";
    const NativeWS = _BrowserWebSocket;
    if (!NativeWS) {
      setTimeout(() => {
        this.emit("error", new TypeError("Failed to fetch"));
      }, 0);
      return;
    }
    const GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
    const acceptValue = createHash("sha1").update(wsKey + GUID).digest("base64");
    let nativeWs;
    try {
      nativeWs = new NativeWS(wsUrl);
      nativeWs.binaryType = "arraybuffer";
    } catch (e) {
      setTimeout(() => {
        this.emit("error", e instanceof Error ? e : new Error(String(e)));
      }, 0);
      return;
    }
    const socket = new Socket;
    if (typeof socket.cork !== "function")
      socket.cork = () => {};
    if (typeof socket.uncork !== "function")
      socket.uncork = () => {};
    socket._readableState = { endEmitted: false };
    socket._writableState = { finished: false, errorEmitted: false };
    let writeBuffer = new Uint8Array(0);
    socket.write = (chunk, encodingOrCallback, callback) => {
      const data = typeof chunk === "string" ? BufferPolyfill.from(chunk) : new Uint8Array(chunk);
      const cb = typeof encodingOrCallback === "function" ? encodingOrCallback : callback;
      const newBuf = new Uint8Array(writeBuffer.length + data.length);
      newBuf.set(writeBuffer, 0);
      newBuf.set(data, writeBuffer.length);
      writeBuffer = newBuf;
      while (writeBuffer.length >= 2) {
        const parsed = _parseWsFrame(writeBuffer);
        if (!parsed)
          break;
        const { opcode, payload, totalLength } = parsed;
        writeBuffer = writeBuffer.slice(totalLength);
        if (nativeWs.readyState !== NativeWS.OPEN)
          continue;
        if (opcode === 8) {
          nativeWs.close();
        } else if (opcode === 9) {
          nativeWs.send(payload);
        } else if (opcode === 10) {} else if (opcode === 1) {
          const text = new TextDecoder().decode(payload);
          nativeWs.send(text);
        } else if (opcode === 2) {
          nativeWs.send(payload);
        }
      }
      if (cb)
        queueMicrotask(() => cb(null));
      return true;
    };
    nativeWs.onopen = () => {
      const response = new IncomingMessage(socket);
      response.statusCode = 101;
      response.statusMessage = "Switching Protocols";
      response.headers = {
        upgrade: "websocket",
        connection: "Upgrade",
        "sec-websocket-accept": acceptValue
      };
      response.complete = true;
      response.push(null);
      this.emit("upgrade", response, socket, BufferPolyfill.alloc(0));
    };
    nativeWs.onmessage = (event) => {
      let payload;
      let opcode;
      if (typeof event.data === "string") {
        payload = new TextEncoder().encode(event.data);
        opcode = 1;
      } else if (event.data instanceof ArrayBuffer) {
        payload = new Uint8Array(event.data);
        opcode = 2;
      } else {
        return;
      }
      const frame = _createWsFrame(opcode, payload, false);
      socket._receiveData(BufferPolyfill.from(frame));
    };
    nativeWs.onclose = (event) => {
      const code2 = event.code || 1000;
      const closePayload = new Uint8Array(2);
      closePayload[0] = code2 >> 8 & 255;
      closePayload[1] = code2 & 255;
      const frame = _createWsFrame(8, closePayload, false);
      socket._receiveData(BufferPolyfill.from(frame));
      setTimeout(() => {
        socket._readableState.endEmitted = true;
        socket._receiveEnd();
        socket.emit("close", false);
      }, 10);
    };
    nativeWs.onerror = () => {
      socket.emit("error", new Error("WebSocket connection error"));
      socket.destroy();
    };
    const origDestroy = socket.destroy.bind(socket);
    socket.destroy = (error) => {
      if (nativeWs.readyState === NativeWS.OPEN || nativeWs.readyState === NativeWS.CONNECTING) {
        nativeWs.close();
      }
      return origDestroy(error);
    };
  }
}
function parseRequestArgs(urlOrOptions, optionsOrCallback, callback) {
  let options2;
  let cb = callback;
  if (typeof urlOrOptions === "string" || urlOrOptions instanceof URL) {
    const parsed = new URL(urlOrOptions.toString());
    options2 = {
      hostname: parsed.hostname,
      port: parsed.port ? parseInt(parsed.port) : undefined,
      path: parsed.pathname + parsed.search,
      method: "GET"
    };
    if (typeof optionsOrCallback === "function") {
      cb = optionsOrCallback;
    } else if (optionsOrCallback) {
      options2 = { ...options2, ...optionsOrCallback };
    }
  } else {
    options2 = urlOrOptions;
    if (typeof optionsOrCallback === "function") {
      cb = optionsOrCallback;
    }
  }
  return { options: options2, callback: cb };
}
function request(urlOrOptions, optionsOrCallback, callback) {
  const { options: options2, callback: cb } = parseRequestArgs(urlOrOptions, optionsOrCallback, callback);
  const req = new ClientRequest(options2, "http");
  if (cb) {
    req.once("response", cb);
  }
  return req;
}
function get(urlOrOptions, optionsOrCallback, callback) {
  const { options: options2, callback: cb } = parseRequestArgs(urlOrOptions, optionsOrCallback, callback);
  const req = new ClientRequest({ ...options2, method: "GET" }, "http");
  if (cb) {
    req.once("response", cb);
  }
  req.end();
  return req;
}
function _createClientRequest(urlOrOptions, optionsOrCallback, callback, protocol) {
  const { options: options2, callback: cb } = parseRequestArgs(urlOrOptions, optionsOrCallback, callback);
  const req = new ClientRequest(options2, protocol);
  if (cb) {
    req.once("response", cb);
  }
  return req;
}
var serverRegistry = new Map;
var onServerListenCallback = null;
var onServerCloseCallback = null;
function _registerServer(port, server) {
  serverRegistry.set(port, server);
  if (onServerListenCallback) {
    onServerListenCallback(port, server);
  }
}
function _unregisterServer(port) {
  serverRegistry.delete(port);
  if (onServerCloseCallback) {
    onServerCloseCallback(port);
  }
}
function getServer(port) {
  return serverRegistry.get(port);
}
function getAllServers() {
  return new Map(serverRegistry);
}
function setServerListenCallback(callback) {
  onServerListenCallback = callback;
}
function setServerCloseCallback(callback) {
  onServerCloseCallback = callback;
}

class Agent extends EventEmitter {
  maxSockets;
  maxFreeSockets;
  maxTotalSockets;
  sockets;
  freeSockets;
  requests;
  options;
  constructor(opts) {
    super();
    this.options = opts || {};
    this.maxSockets = opts?.maxSockets ?? Infinity;
    this.maxFreeSockets = opts?.maxFreeSockets ?? 256;
    this.maxTotalSockets = opts?.maxTotalSockets ?? Infinity;
    this.sockets = {};
    this.freeSockets = {};
    this.requests = {};
  }
  createConnection(_options2, callback) {
    const socket = new Socket;
    if (callback) {
      callback(null, socket);
    }
    return socket;
  }
  getName(options2) {
    const host = options2.host || "localhost";
    const port = options2.port || 80;
    return `${host}:${port}:${options2.localAddress || ""}`;
  }
  addRequest(_req, _options2) {}
  destroy() {
    this.sockets = {};
    this.freeSockets = {};
    this.requests = {};
  }
}
var globalAgent = new Agent;
function _parseWsFrame(data) {
  if (data.length < 2)
    return null;
  const opcode = data[0] & 15;
  const masked = (data[1] & 128) !== 0;
  let payloadLength = data[1] & 127;
  let offset = 2;
  if (payloadLength === 126) {
    if (data.length < 4)
      return null;
    payloadLength = data[2] << 8 | data[3];
    offset = 4;
  } else if (payloadLength === 127) {
    if (data.length < 10)
      return null;
    payloadLength = data[6] << 24 | data[7] << 16 | data[8] << 8 | data[9];
    offset = 10;
  }
  if (masked) {
    if (data.length < offset + 4 + payloadLength)
      return null;
    const maskKey = data.slice(offset, offset + 4);
    offset += 4;
    const payload = new Uint8Array(payloadLength);
    for (let i = 0;i < payloadLength; i++) {
      payload[i] = data[offset + i] ^ maskKey[i % 4];
    }
    return { opcode, payload, totalLength: offset + payloadLength };
  } else {
    if (data.length < offset + payloadLength)
      return null;
    const payload = data.slice(offset, offset + payloadLength);
    return { opcode, payload, totalLength: offset + payloadLength };
  }
}
function _createWsFrame(opcode, payload, masked) {
  const length = payload.length;
  let headerSize = 2;
  if (length > 125 && length <= 65535) {
    headerSize += 2;
  } else if (length > 65535) {
    headerSize += 8;
  }
  if (masked) {
    headerSize += 4;
  }
  const frame = new Uint8Array(headerSize + length);
  frame[0] = 128 | opcode;
  let offset = 2;
  if (length <= 125) {
    frame[1] = (masked ? 128 : 0) | length;
  } else if (length <= 65535) {
    frame[1] = (masked ? 128 : 0) | 126;
    frame[2] = length >> 8 & 255;
    frame[3] = length & 255;
    offset = 4;
  } else {
    frame[1] = (masked ? 128 : 0) | 127;
    frame[2] = 0;
    frame[3] = 0;
    frame[4] = 0;
    frame[5] = 0;
    frame[6] = length >> 24 & 255;
    frame[7] = length >> 16 & 255;
    frame[8] = length >> 8 & 255;
    frame[9] = length & 255;
    offset = 10;
  }
  if (masked) {
    const maskKey = new Uint8Array(4);
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
      crypto.getRandomValues(maskKey);
    } else {
      for (let i = 0;i < 4; i++)
        maskKey[i] = Math.floor(Math.random() * 256);
    }
    frame.set(maskKey, offset);
    offset += 4;
    for (let i = 0;i < length; i++) {
      frame[offset + i] = payload[i] ^ maskKey[i % 4];
    }
  } else {
    frame.set(payload, offset);
  }
  return frame;
}
var http_default = {
  Server: Server2,
  IncomingMessage,
  ServerResponse,
  ClientRequest,
  createServer: createServer2,
  request,
  get,
  STATUS_CODES,
  METHODS,
  getServer,
  getAllServers,
  setServerListenCallback,
  setServerCloseCallback,
  _createClientRequest,
  Agent,
  globalAgent,
  _parseWsFrame,
  _createWsFrame
};

// .cache/browser-demo/almost-src/shims/https.ts
var exports_https = {};
__export(exports_https, {
  Agent: () => Agent,
  ClientRequest: () => ClientRequest,
  IncomingMessage: () => IncomingMessage,
  METHODS: () => METHODS,
  STATUS_CODES: () => STATUS_CODES,
  Server: () => Server2,
  ServerResponse: () => ServerResponse,
  createServer: () => createServer2,
  default: () => https_default,
  get: () => get2,
  getAllServers: () => getAllServers,
  getServer: () => getServer,
  globalAgent: () => globalAgent,
  request: () => request2,
  setServerCloseCallback: () => setServerCloseCallback,
  setServerListenCallback: () => setServerListenCallback
});
function request2(urlOrOptions, optionsOrCallback, callback) {
  return _createClientRequest(urlOrOptions, optionsOrCallback, callback, "https");
}
function get2(urlOrOptions, optionsOrCallback, callback) {
  const req = _createClientRequest(urlOrOptions, optionsOrCallback, callback, "https");
  req.end();
  return req;
}
var https_default = {
  Server: Server2,
  IncomingMessage,
  ServerResponse,
  ClientRequest,
  createServer: createServer2,
  request: request2,
  get: get2,
  STATUS_CODES,
  METHODS,
  getServer,
  getAllServers,
  setServerListenCallback,
  setServerCloseCallback,
  Agent,
  globalAgent
};

// .cache/browser-demo/almost-src/shims/url.ts
var exports_url = {};
__export(exports_url, {
  URL: () => URL2,
  URLSearchParams: () => URLSearchParams,
  default: () => url_default,
  fileURLToPath: () => fileURLToPath,
  format: () => format2,
  parse: () => parse2,
  pathToFileURL: () => pathToFileURL,
  resolve: () => resolve2
});
function parse2(urlString, parseQueryString = false, slashesDenoteHost = false) {
  try {
    const url = new URL2(urlString, "http://localhost");
    const result = {
      protocol: url.protocol,
      slashes: url.protocol.endsWith(":"),
      auth: url.username ? `${url.username}:${url.password}` : null,
      host: url.host,
      port: url.port || null,
      hostname: url.hostname,
      hash: url.hash || null,
      search: url.search || null,
      query: parseQueryString ? Object.fromEntries(url.searchParams) : url.search?.slice(1) || null,
      pathname: url.pathname,
      path: url.pathname + url.search,
      href: url.href
    };
    return result;
  } catch {
    return {
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: null,
      query: null,
      pathname: urlString,
      path: urlString,
      href: urlString
    };
  }
}
function format2(urlObject) {
  if (urlObject.href) {
    return urlObject.href;
  }
  let result = "";
  if (urlObject.protocol) {
    result += urlObject.protocol;
    if (!urlObject.protocol.endsWith(":")) {
      result += ":";
    }
  }
  if (urlObject.slashes || urlObject.protocol === "http:" || urlObject.protocol === "https:") {
    result += "//";
  }
  if (urlObject.auth) {
    result += urlObject.auth + "@";
  }
  if (urlObject.hostname) {
    result += urlObject.hostname;
  } else if (urlObject.host) {
    result += urlObject.host;
  }
  if (urlObject.port) {
    result += ":" + urlObject.port;
  }
  if (urlObject.pathname) {
    result += urlObject.pathname;
  }
  if (urlObject.search) {
    result += urlObject.search;
  } else if (urlObject.query) {
    if (typeof urlObject.query === "string") {
      result += "?" + urlObject.query;
    } else {
      const params = new URLSearchParams;
      for (const [key, value] of Object.entries(urlObject.query)) {
        if (Array.isArray(value)) {
          for (const v of value) {
            params.append(key, v);
          }
        } else {
          params.set(key, value);
        }
      }
      const search = params.toString();
      if (search) {
        result += "?" + search;
      }
    }
  }
  if (urlObject.hash) {
    result += urlObject.hash;
  }
  return result;
}
function resolve2(from, to) {
  try {
    return new URL2(to, from).href;
  } catch {
    return to;
  }
}
var URL2 = globalThis.URL;
var URLSearchParams = globalThis.URLSearchParams;
function fileURLToPath(url) {
  const urlObj = typeof url === "string" ? new globalThis.URL(url) : url;
  if (urlObj.protocol !== "file:") {
    throw new TypeError("The URL must be of scheme file");
  }
  return decodeURIComponent(urlObj.pathname);
}
function pathToFileURL(path) {
  const encoded = encodeURIComponent(path).replace(/%2F/g, "/");
  return new globalThis.URL("file://" + encoded);
}
var url_default = {
  parse: parse2,
  format: format2,
  resolve: resolve2,
  URL: URL2,
  URLSearchParams,
  fileURLToPath,
  pathToFileURL
};

// .cache/browser-demo/almost-src/shims/querystring.ts
var exports_querystring = {};
__export(exports_querystring, {
  decode: () => decode,
  default: () => querystring_default,
  encode: () => encode,
  escape: () => escape,
  parse: () => parse3,
  stringify: () => stringify,
  unescape: () => unescape
});
function parse3(str, sep = "&", eq = "=", options2) {
  const result = {};
  if (!str || typeof str !== "string") {
    return result;
  }
  const maxKeys = options2?.maxKeys || 1000;
  const pairs = str.split(sep).slice(0, maxKeys > 0 ? maxKeys : undefined);
  for (const pair of pairs) {
    const idx = pair.indexOf(eq);
    let key;
    let value;
    if (idx >= 0) {
      key = decodeURIComponent(pair.slice(0, idx).replace(/\+/g, " "));
      value = decodeURIComponent(pair.slice(idx + 1).replace(/\+/g, " "));
    } else {
      key = decodeURIComponent(pair.replace(/\+/g, " "));
      value = "";
    }
    if (key in result) {
      const existing = result[key];
      if (Array.isArray(existing)) {
        existing.push(value);
      } else {
        result[key] = [existing, value];
      }
    } else {
      result[key] = value;
    }
  }
  return result;
}
function stringify(obj, sep = "&", eq = "=") {
  if (!obj || typeof obj !== "object") {
    return "";
  }
  const pairs = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined)
      continue;
    const encodedKey = encodeURIComponent(key);
    if (Array.isArray(value)) {
      for (const v of value) {
        pairs.push(`${encodedKey}${eq}${encodeURIComponent(String(v))}`);
      }
    } else {
      pairs.push(`${encodedKey}${eq}${encodeURIComponent(String(value))}`);
    }
  }
  return pairs.join(sep);
}
function escape(str) {
  return encodeURIComponent(str);
}
function unescape(str) {
  return decodeURIComponent(str.replace(/\+/g, " "));
}
var encode = stringify;
var decode = parse3;
var querystring_default = {
  parse: parse3,
  stringify,
  escape,
  unescape,
  encode,
  decode
};

// .cache/browser-demo/almost-src/shims/util.ts
var exports_util = {};
__export(exports_util, {
  TextDecoder: () => TextDecoder2,
  TextEncoder: () => TextEncoder2,
  callbackify: () => callbackify,
  debug: () => debug,
  debuglog: () => debuglog,
  default: () => util_default,
  deprecate: () => deprecate,
  format: () => format3,
  inherits: () => inherits,
  inspect: () => inspect,
  isAnyArrayBuffer: () => isAnyArrayBuffer,
  isArray: () => isArray,
  isBoolean: () => isBoolean,
  isBoxedPrimitive: () => isBoxedPrimitive,
  isBuffer: () => isBuffer,
  isDate: () => isDate,
  isError: () => isError,
  isFunction: () => isFunction,
  isNull: () => isNull,
  isNullOrUndefined: () => isNullOrUndefined,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isPrimitive: () => isPrimitive,
  isRegExp: () => isRegExp,
  isString: () => isString,
  isUndefined: () => isUndefined,
  promisify: () => promisify,
  stripVTControlCharacters: () => stripVTControlCharacters,
  types: () => types
});
function format3(fmt, ...args) {
  if (typeof fmt !== "string") {
    return args.map((arg) => inspect(arg)).join(" ");
  }
  let i = 0;
  return fmt.replace(/%[sdjifoO%]/g, (match) => {
    if (match === "%%")
      return "%";
    if (i >= args.length)
      return match;
    const arg = args[i++];
    switch (match) {
      case "%s":
        return String(arg);
      case "%d":
      case "%i":
        return String(parseInt(String(arg), 10));
      case "%f":
        return String(parseFloat(String(arg)));
      case "%j":
        try {
          return JSON.stringify(arg);
        } catch {
          return "[Circular]";
        }
      case "%o":
      case "%O":
        return inspect(arg);
      default:
        return match;
    }
  });
}
function inspect(obj, options2) {
  const seen = new WeakSet;
  const depth = options2?.depth ?? 2;
  function inspectValue(value, currentDepth) {
    if (value === null)
      return "null";
    if (value === undefined)
      return "undefined";
    const type = typeof value;
    if (type === "string") {
      return `'${value}'`;
    }
    if (type === "number" || type === "boolean" || type === "bigint") {
      return String(value);
    }
    if (type === "symbol") {
      return value.toString();
    }
    if (type === "function") {
      const name = value.name || "anonymous";
      return `[Function: ${name}]`;
    }
    if (type !== "object") {
      return String(value);
    }
    if (seen.has(value)) {
      return "[Circular]";
    }
    seen.add(value);
    if (currentDepth > depth) {
      return Array.isArray(value) ? "[Array]" : "[Object]";
    }
    if (Array.isArray(value)) {
      if (value.length === 0)
        return "[]";
      const items = value.map((v) => inspectValue(v, currentDepth + 1));
      return `[ ${items.join(", ")} ]`;
    }
    if (value instanceof Date) {
      return value.toISOString();
    }
    if (value instanceof RegExp) {
      return value.toString();
    }
    if (value instanceof Error) {
      return `${value.name}: ${value.message}`;
    }
    if (value instanceof Map) {
      const entries = [...value.entries()].map(([k, v]) => `${inspectValue(k, currentDepth + 1)} => ${inspectValue(v, currentDepth + 1)}`);
      return `Map(${value.size}) { ${entries.join(", ")} }`;
    }
    if (value instanceof Set) {
      const items = [...value].map((v) => inspectValue(v, currentDepth + 1));
      return `Set(${value.size}) { ${items.join(", ")} }`;
    }
    const keys = Object.keys(value);
    if (keys.length === 0)
      return "{}";
    const entries = keys.map((key) => {
      const val = value[key];
      return `${key}: ${inspectValue(val, currentDepth + 1)}`;
    });
    return `{ ${entries.join(", ")} }`;
  }
  return inspectValue(obj, 0);
}
function inherits(ctor, superCtor) {
  if (ctor === undefined || ctor === null) {
    throw new TypeError("inherits: ctor must be a function");
  }
  if (superCtor === undefined || superCtor === null) {
    return;
  }
  if (superCtor.prototype === undefined) {
    return;
  }
  ctor.super_ = superCtor;
  Object.setPrototypeOf(ctor.prototype, superCtor.prototype);
}
function deprecate(fn2, msg, code2) {
  let warned = false;
  const deprecated = function(...args) {
    if (!warned) {
      console.warn(`DeprecationWarning: ${msg}${code2 ? ` (${code2})` : ""}`);
      warned = true;
    }
    return fn2.apply(this, args);
  };
  return deprecated;
}
function promisify(fn2) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn2(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}
function callbackify(fn2) {
  return (...args) => {
    const callback = args.pop();
    fn2(...args).then((result) => callback(null, result)).catch((err) => callback(err, undefined));
  };
}
function isArray(value) {
  return Array.isArray(value);
}
function isBoolean(value) {
  return typeof value === "boolean";
}
function isNull(value) {
  return value === null;
}
function isNullOrUndefined(value) {
  return value === null || value === undefined;
}
function isNumber(value) {
  return typeof value === "number";
}
function isString(value) {
  return typeof value === "string";
}
function isUndefined(value) {
  return value === undefined;
}
function isRegExp(value) {
  return value instanceof RegExp;
}
function isObject(value) {
  return typeof value === "object" && value !== null;
}
function isDate(value) {
  return value instanceof Date;
}
function isError(value) {
  return value instanceof Error;
}
function isFunction(value) {
  return typeof value === "function";
}
function isPrimitive(value) {
  return value === null || typeof value !== "object" && typeof value !== "function";
}
function isBuffer(value) {
  return value instanceof Uint8Array;
}
function debuglog(section) {
  const nodeDebug = typeof process !== "undefined" && process.env?.NODE_DEBUG || "";
  const enabled = nodeDebug.toLowerCase().includes(section.toLowerCase());
  if (enabled) {
    return (...args) => {
      console.error(`${section.toUpperCase()} ${process?.pid || 0}:`, ...args);
    };
  }
  return () => {};
}
var debug = debuglog;
function stripVTControlCharacters(str) {
  return str.replace(/\x1B\[[0-9;]*[a-zA-Z]|\x1B\].*?(\x07|\x1B\\)|\x1B[()][A-Z0-9]|\x1B[#=]|\x1B./g, "");
}
function isAnyArrayBuffer(value) {
  return value instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && value instanceof SharedArrayBuffer;
}
function isBoxedPrimitive(value) {
  const tag = Object.prototype.toString.call(value);
  return ["[object Boolean]", "[object Number]", "[object String]", "[object BigInt]", "[object Symbol]"].includes(tag);
}
var types = {
  isArray,
  isBoolean,
  isNull,
  isNullOrUndefined,
  isNumber,
  isString,
  isUndefined,
  isRegExp,
  isObject,
  isDate,
  isError,
  isFunction,
  isPrimitive,
  isBuffer,
  isAnyArrayBuffer,
  isBoxedPrimitive
};
var TextEncoder2 = globalThis.TextEncoder;
var TextDecoder2 = globalThis.TextDecoder;
var util_default = {
  format: format3,
  inspect,
  inherits,
  deprecate,
  promisify,
  callbackify,
  debuglog,
  debug,
  stripVTControlCharacters,
  isArray,
  isBoolean,
  isNull,
  isNullOrUndefined,
  isNumber,
  isString,
  isUndefined,
  isRegExp,
  isObject,
  isDate,
  isError,
  isFunction,
  isPrimitive,
  isBuffer,
  types,
  TextEncoder: TextEncoder2,
  TextDecoder: TextDecoder2
};

// .cache/browser-demo/almost-src/shims/tty.ts
var exports_tty = {};
__export(exports_tty, {
  ReadStream: () => ReadStream,
  WriteStream: () => WriteStream,
  default: () => tty_default,
  isatty: () => isatty
});
class ReadStream extends Readable {
  isTTY = false;
  isRaw = false;
  setRawMode(mode) {
    this.isRaw = mode;
    return this;
  }
}

class WriteStream extends Writable {
  isTTY = false;
  columns = 80;
  rows = 24;
  clearLine(dir, callback) {
    if (callback)
      callback();
    return true;
  }
  clearScreenDown(callback) {
    if (callback)
      callback();
    return true;
  }
  cursorTo(x, y, callback) {
    if (callback)
      callback();
    return true;
  }
  moveCursor(dx, dy, callback) {
    if (callback)
      callback();
    return true;
  }
  getColorDepth(env) {
    return 1;
  }
  hasColors(count, env) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
}
function isatty(fd) {
  return false;
}
var tty_default = {
  ReadStream,
  WriteStream,
  isatty
};

// .cache/browser-demo/almost-src/shims/os.ts
var exports_os = {};
__export(exports_os, {
  EOL: () => EOL,
  arch: () => arch,
  constants: () => constants2,
  cpus: () => cpus,
  default: () => os_default,
  devNull: () => devNull,
  endianness: () => endianness,
  freemem: () => freemem,
  getPriority: () => getPriority,
  homedir: () => homedir,
  hostname: () => hostname,
  loadavg: () => loadavg,
  machine: () => machine,
  networkInterfaces: () => networkInterfaces,
  platform: () => platform,
  release: () => release,
  setPriority: () => setPriority,
  tmpdir: () => tmpdir,
  totalmem: () => totalmem,
  type: () => type,
  uptime: () => uptime,
  userInfo: () => userInfo,
  version: () => version
});
function hostname() {
  return "localhost";
}
function platform() {
  return "linux";
}
function arch() {
  return "x64";
}
function type() {
  return "Linux";
}
function release() {
  return "5.10.0";
}
function version() {
  return "#1 SMP";
}
function machine() {
  return "x86_64";
}
function tmpdir() {
  return "/tmp";
}
function homedir() {
  return "/home/user";
}
function cpus() {
  const cpu = {
    model: "Virtual CPU",
    speed: 2400,
    times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
  };
  return [cpu, cpu];
}
function totalmem() {
  return 4 * 1024 * 1024 * 1024;
}
function freemem() {
  return 2 * 1024 * 1024 * 1024;
}
function uptime() {
  return Math.floor(performance.now() / 1000);
}
function loadavg() {
  return [0.5, 0.5, 0.5];
}
function networkInterfaces() {
  return {
    lo: [
      {
        address: "127.0.0.1",
        netmask: "255.0.0.0",
        family: "IPv4",
        mac: "00:00:00:00:00:00",
        internal: true,
        cidr: "127.0.0.1/8"
      }
    ]
  };
}
function userInfo() {
  return {
    username: "user",
    uid: 1000,
    gid: 1000,
    shell: "/bin/bash",
    homedir: "/home/user"
  };
}
function endianness() {
  return "LE";
}
function getPriority(pid) {
  return 0;
}
function setPriority(pid, priority) {}
var EOL = `
`;
var constants2 = {
  signals: {
    SIGHUP: 1,
    SIGINT: 2,
    SIGQUIT: 3,
    SIGILL: 4,
    SIGTRAP: 5,
    SIGABRT: 6,
    SIGBUS: 7,
    SIGFPE: 8,
    SIGKILL: 9,
    SIGUSR1: 10,
    SIGSEGV: 11,
    SIGUSR2: 12,
    SIGPIPE: 13,
    SIGALRM: 14,
    SIGTERM: 15,
    SIGCHLD: 17,
    SIGCONT: 18,
    SIGSTOP: 19,
    SIGTSTP: 20,
    SIGTTIN: 21,
    SIGTTOU: 22,
    SIGURG: 23,
    SIGXCPU: 24,
    SIGXFSZ: 25,
    SIGVTALRM: 26,
    SIGPROF: 27,
    SIGWINCH: 28,
    SIGIO: 29,
    SIGPWR: 30,
    SIGSYS: 31
  },
  errno: {},
  priority: {
    PRIORITY_LOW: 19,
    PRIORITY_BELOW_NORMAL: 10,
    PRIORITY_NORMAL: 0,
    PRIORITY_ABOVE_NORMAL: -7,
    PRIORITY_HIGH: -14,
    PRIORITY_HIGHEST: -20
  }
};
var devNull = "/dev/null";
var os_default = {
  hostname,
  platform,
  arch,
  type,
  release,
  version,
  machine,
  tmpdir,
  homedir,
  cpus,
  totalmem,
  freemem,
  uptime,
  loadavg,
  networkInterfaces,
  userInfo,
  endianness,
  getPriority,
  setPriority,
  EOL,
  constants: constants2,
  devNull
};

// .cache/browser-demo/almost-src/shims/zlib.ts
var exports_zlib = {};
__export(exports_zlib, {
  brotliCompress: () => brotliCompress,
  brotliCompressSync: () => brotliCompressSync,
  brotliDecompress: () => brotliDecompress,
  brotliDecompressSync: () => brotliDecompressSync,
  constants: () => constants4,
  default: () => zlib_default,
  deflate: () => deflate2,
  deflateRaw: () => deflateRaw2,
  deflateRawSync: () => deflateRawSync,
  deflateSync: () => deflateSync,
  gunzip: () => gunzip,
  gunzipSync: () => gunzipSync,
  gzip: () => gzip2,
  gzipSync: () => gzipSync,
  inflate: () => inflate2,
  inflateRaw: () => inflateRaw2,
  inflateRawSync: () => inflateRawSync,
  inflateSync: () => inflateSync
});

// .cache/browser-demo/deps/node_modules/pako/dist/pako.esm.mjs
/*! pako 2.2.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
var Z_FIXED$1 = 4;
var Z_BINARY = 0;
var Z_TEXT = 1;
var Z_UNKNOWN$1 = 2;
function zero$1(buf) {
  let len = buf.length;
  while (--len >= 0) {
    buf[len] = 0;
  }
}
var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES = 2;
var MIN_MATCH$1 = 3;
var MAX_MATCH$1 = 258;
var LENGTH_CODES$1 = 29;
var LITERALS$1 = 256;
var L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;
var D_CODES$1 = 30;
var BL_CODES$1 = 19;
var HEAP_SIZE$1 = 2 * L_CODES$1 + 1;
var MAX_BITS$1 = 15;
var Buf_size = 16;
var MAX_BL_BITS = 7;
var END_BLOCK = 256;
var REP_3_6 = 16;
var REPZ_3_10 = 17;
var REPZ_11_138 = 18;
var extra_lbits = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
var extra_dbits = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
var extra_blbits = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
var bl_order = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var DIST_CODE_LEN = 512;
var static_ltree = new Array((L_CODES$1 + 2) * 2);
zero$1(static_ltree);
var static_dtree = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
var _dist_code = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
var _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
zero$1(_length_code);
var base_length = new Array(LENGTH_CODES$1);
zero$1(base_length);
var base_dist = new Array(D_CODES$1);
zero$1(base_dist);
function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
  this.static_tree = static_tree;
  this.extra_bits = extra_bits;
  this.extra_base = extra_base;
  this.elems = elems;
  this.max_length = max_length;
  this.has_stree = static_tree && static_tree.length;
}
var static_l_desc;
var static_d_desc;
var static_bl_desc;
function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;
  this.max_code = 0;
  this.stat_desc = stat_desc;
}
var d_code = (dist) => {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};
var put_short = (s, w) => {
  s.pending_buf[s.pending++] = w & 255;
  s.pending_buf[s.pending++] = w >>> 8 & 255;
};
var send_bits = (s, value, length) => {
  if (s.bi_valid > Buf_size - length) {
    s.bi_buf |= value << s.bi_valid & 65535;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> Buf_size - s.bi_valid;
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= value << s.bi_valid & 65535;
    s.bi_valid += length;
  }
};
var send_code = (s, c, tree) => {
  send_bits(s, tree[c * 2], tree[c * 2 + 1]);
};
var bi_reverse = (code2, len) => {
  let res = 0;
  do {
    res |= code2 & 1;
    code2 >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
};
var bi_flush = (s) => {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;
  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 255;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
};
var gen_bitlen = (s, desc) => {
  const tree = desc.dyn_tree;
  const max_code = desc.max_code;
  const stree = desc.stat_desc.static_tree;
  const has_stree = desc.stat_desc.has_stree;
  const extra = desc.stat_desc.extra_bits;
  const base = desc.stat_desc.extra_base;
  const max_length = desc.stat_desc.max_length;
  let h;
  let n, m;
  let bits;
  let xbits;
  let f;
  let overflow = 0;
  for (bits = 0;bits <= MAX_BITS$1; bits++) {
    s.bl_count[bits] = 0;
  }
  tree[s.heap[s.heap_max] * 2 + 1] = 0;
  for (h = s.heap_max + 1;h < HEAP_SIZE$1; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1] = bits;
    if (n > max_code) {
      continue;
    }
    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2];
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1] + xbits);
    }
  }
  if (overflow === 0) {
    return;
  }
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) {
      bits--;
    }
    s.bl_count[bits]--;
    s.bl_count[bits + 1] += 2;
    s.bl_count[max_length]--;
    overflow -= 2;
  } while (overflow > 0);
  for (bits = max_length;bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) {
        continue;
      }
      if (tree[m * 2 + 1] !== bits) {
        s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
        tree[m * 2 + 1] = bits;
      }
      n--;
    }
  }
};
var gen_codes = (tree, max_code, bl_count) => {
  const next_code = new Array(MAX_BITS$1 + 1);
  let code2 = 0;
  let bits;
  let n;
  for (bits = 1;bits <= MAX_BITS$1; bits++) {
    code2 = code2 + bl_count[bits - 1] << 1;
    next_code[bits] = code2;
  }
  for (n = 0;n <= max_code; n++) {
    let len = tree[n * 2 + 1];
    if (len === 0) {
      continue;
    }
    tree[n * 2] = bi_reverse(next_code[len]++, len);
  }
};
var tr_static_init = () => {
  let n;
  let bits;
  let length;
  let code2;
  let dist;
  const bl_count = new Array(MAX_BITS$1 + 1);
  length = 0;
  for (code2 = 0;code2 < LENGTH_CODES$1 - 1; code2++) {
    base_length[code2] = length;
    for (n = 0;n < 1 << extra_lbits[code2]; n++) {
      _length_code[length++] = code2;
    }
  }
  _length_code[length - 1] = code2;
  dist = 0;
  for (code2 = 0;code2 < 16; code2++) {
    base_dist[code2] = dist;
    for (n = 0;n < 1 << extra_dbits[code2]; n++) {
      _dist_code[dist++] = code2;
    }
  }
  dist >>= 7;
  for (;code2 < D_CODES$1; code2++) {
    base_dist[code2] = dist << 7;
    for (n = 0;n < 1 << extra_dbits[code2] - 7; n++) {
      _dist_code[256 + dist++] = code2;
    }
  }
  for (bits = 0;bits <= MAX_BITS$1; bits++) {
    bl_count[bits] = 0;
  }
  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1] = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1] = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1] = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1] = 8;
    n++;
    bl_count[8]++;
  }
  gen_codes(static_ltree, L_CODES$1 + 1, bl_count);
  for (n = 0;n < D_CODES$1; n++) {
    static_dtree[n * 2 + 1] = 5;
    static_dtree[n * 2] = bi_reverse(n, 5);
  }
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES$1, MAX_BITS$1);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES$1, MAX_BL_BITS);
};
var init_block = (s) => {
  let n;
  for (n = 0;n < L_CODES$1; n++) {
    s.dyn_ltree[n * 2] = 0;
  }
  for (n = 0;n < D_CODES$1; n++) {
    s.dyn_dtree[n * 2] = 0;
  }
  for (n = 0;n < BL_CODES$1; n++) {
    s.bl_tree[n * 2] = 0;
  }
  s.dyn_ltree[END_BLOCK * 2] = 1;
  s.opt_len = s.static_len = 0;
  s.sym_next = s.matches = 0;
};
var bi_windup = (s) => {
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
};
var smaller = (tree, n, m, depth) => {
  const _n2 = n * 2;
  const _m2 = m * 2;
  return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
};
var pqdownheap = (s, tree, k) => {
  const v = s.heap[k];
  let j = k << 1;
  while (j <= s.heap_len) {
    if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    if (smaller(tree, v, s.heap[j], s.depth)) {
      break;
    }
    s.heap[k] = s.heap[j];
    k = j;
    j <<= 1;
  }
  s.heap[k] = v;
};
var compress_block = (s, ltree, dtree) => {
  let dist;
  let lc;
  let sx = 0;
  let code2;
  let extra;
  if (s.sym_next !== 0) {
    do {
      dist = s.pending_buf[s.sym_buf + sx++] & 255;
      dist += (s.pending_buf[s.sym_buf + sx++] & 255) << 8;
      lc = s.pending_buf[s.sym_buf + sx++];
      if (dist === 0) {
        send_code(s, lc, ltree);
      } else {
        code2 = _length_code[lc];
        send_code(s, code2 + LITERALS$1 + 1, ltree);
        extra = extra_lbits[code2];
        if (extra !== 0) {
          lc -= base_length[code2];
          send_bits(s, lc, extra);
        }
        dist--;
        code2 = d_code(dist);
        send_code(s, code2, dtree);
        extra = extra_dbits[code2];
        if (extra !== 0) {
          dist -= base_dist[code2];
          send_bits(s, dist, extra);
        }
      }
    } while (sx < s.sym_next);
  }
  send_code(s, END_BLOCK, ltree);
};
var build_tree = (s, desc) => {
  const tree = desc.dyn_tree;
  const stree = desc.stat_desc.static_tree;
  const has_stree = desc.stat_desc.has_stree;
  const elems = desc.stat_desc.elems;
  let n, m;
  let max_code = -1;
  let node;
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE$1;
  for (n = 0;n < elems; n++) {
    if (tree[n * 2] !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;
    } else {
      tree[n * 2 + 1] = 0;
    }
  }
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
    tree[node * 2] = 1;
    s.depth[node] = 0;
    s.opt_len--;
    if (has_stree) {
      s.static_len -= stree[node * 2 + 1];
    }
  }
  desc.max_code = max_code;
  for (n = s.heap_len >> 1;n >= 1; n--) {
    pqdownheap(s, tree, n);
  }
  node = elems;
  do {
    n = s.heap[1];
    s.heap[1] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1);
    m = s.heap[1];
    s.heap[--s.heap_max] = n;
    s.heap[--s.heap_max] = m;
    tree[node * 2] = tree[n * 2] + tree[m * 2];
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1] = tree[m * 2 + 1] = node;
    s.heap[1] = node++;
    pqdownheap(s, tree, 1);
  } while (s.heap_len >= 2);
  s.heap[--s.heap_max] = s.heap[1];
  gen_bitlen(s, desc);
  gen_codes(tree, max_code, s.bl_count);
};
var scan_tree = (s, tree, max_code) => {
  let n;
  let prevlen = -1;
  let curlen;
  let nextlen = tree[0 * 2 + 1];
  let count = 0;
  let max_count = 7;
  let min_count = 4;
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1] = 65535;
  for (n = 0;n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1];
    if (++count < max_count && curlen === nextlen) {
      continue;
    } else if (count < min_count) {
      s.bl_tree[curlen * 2] += count;
    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        s.bl_tree[curlen * 2]++;
      }
      s.bl_tree[REP_3_6 * 2]++;
    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]++;
    } else {
      s.bl_tree[REPZ_11_138 * 2]++;
    }
    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};
var send_tree = (s, tree, max_code) => {
  let n;
  let prevlen = -1;
  let curlen;
  let nextlen = tree[0 * 2 + 1];
  let count = 0;
  let max_count = 7;
  let min_count = 4;
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  for (n = 0;n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1];
    if (++count < max_count && curlen === nextlen) {
      continue;
    } else if (count < min_count) {
      do {
        send_code(s, curlen, s.bl_tree);
      } while (--count !== 0);
    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);
    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);
    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }
    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};
var build_bl_tree = (s) => {
  let max_blindex;
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
  build_tree(s, s.bl_desc);
  for (max_blindex = BL_CODES$1 - 1;max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
      break;
    }
  }
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  return max_blindex;
};
var send_all_trees = (s, lcodes, dcodes, blcodes) => {
  let rank;
  send_bits(s, lcodes - 257, 5);
  send_bits(s, dcodes - 1, 5);
  send_bits(s, blcodes - 4, 4);
  for (rank = 0;rank < blcodes; rank++) {
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
  }
  send_tree(s, s.dyn_ltree, lcodes - 1);
  send_tree(s, s.dyn_dtree, dcodes - 1);
};
var detect_data_type = (s) => {
  let block_mask = 4093624447;
  let n;
  for (n = 0;n <= 31; n++, block_mask >>>= 1) {
    if (block_mask & 1 && s.dyn_ltree[n * 2] !== 0) {
      return Z_BINARY;
    }
  }
  if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
    return Z_TEXT;
  }
  for (n = 32;n < LITERALS$1; n++) {
    if (s.dyn_ltree[n * 2] !== 0) {
      return Z_TEXT;
    }
  }
  return Z_BINARY;
};
var static_init_done = false;
var _tr_init$1 = (s) => {
  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }
  s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
  s.bi_buf = 0;
  s.bi_valid = 0;
  init_block(s);
};
var _tr_stored_block$1 = (s, buf, stored_len, last) => {
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
  bi_windup(s);
  put_short(s, stored_len);
  put_short(s, ~stored_len);
  if (stored_len) {
    s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending);
  }
  s.pending += stored_len;
};
var _tr_align$1 = (s) => {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
};
var _tr_flush_block$1 = (s, buf, stored_len, last) => {
  let opt_lenb, static_lenb;
  let max_blindex = 0;
  if (s.level > 0) {
    if (s.strm.data_type === Z_UNKNOWN$1) {
      s.strm.data_type = detect_data_type(s);
    }
    build_tree(s, s.l_desc);
    build_tree(s, s.d_desc);
    max_blindex = build_bl_tree(s);
    opt_lenb = s.opt_len + 3 + 7 >>> 3;
    static_lenb = s.static_len + 3 + 7 >>> 3;
    if (static_lenb <= opt_lenb) {
      opt_lenb = static_lenb;
    }
  } else {
    opt_lenb = static_lenb = stored_len + 5;
  }
  if (stored_len + 4 <= opt_lenb && buf !== -1) {
    _tr_stored_block$1(s, buf, stored_len, last);
  } else if (s.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {
    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);
  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  init_block(s);
  if (last) {
    bi_windup(s);
  }
};
var _tr_tally$1 = (s, dist, lc) => {
  s.pending_buf[s.sym_buf + s.sym_next++] = dist;
  s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8;
  s.pending_buf[s.sym_buf + s.sym_next++] = lc;
  if (dist === 0) {
    s.dyn_ltree[lc * 2]++;
  } else {
    s.matches++;
    dist--;
    s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2]++;
    s.dyn_dtree[d_code(dist) * 2]++;
  }
  return s.sym_next === s.sym_end;
};
var _tr_init_1 = _tr_init$1;
var _tr_stored_block_1 = _tr_stored_block$1;
var _tr_flush_block_1 = _tr_flush_block$1;
var _tr_tally_1 = _tr_tally$1;
var _tr_align_1 = _tr_align$1;
var trees = {
  _tr_init: _tr_init_1,
  _tr_stored_block: _tr_stored_block_1,
  _tr_flush_block: _tr_flush_block_1,
  _tr_tally: _tr_tally_1,
  _tr_align: _tr_align_1
};
var adler32 = (adler, buf, len, pos) => {
  let s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
  while (len !== 0) {
    n = len > 2000 ? 2000 : len;
    len -= n;
    do {
      s1 = s1 + buf[pos++] | 0;
      s2 = s2 + s1 | 0;
    } while (--n);
    s1 %= 65521;
    s2 %= 65521;
  }
  return s1 | s2 << 16 | 0;
};
var adler32_1 = adler32;
var makeTable = () => {
  let c, table = [];
  for (var n = 0;n < 256; n++) {
    c = n;
    for (var k = 0;k < 8; k++) {
      c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
    }
    table[n] = c;
  }
  return table;
};
var crcTable = new Uint32Array(makeTable());
var crc32 = (crc, buf, len, pos) => {
  const t = crcTable;
  const end = pos + len;
  crc ^= -1;
  for (let i = pos;i < end; i++) {
    crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
  }
  return crc ^ -1;
};
var crc32_1 = crc32;
var messages = {
  2: "need dictionary",
  1: "stream end",
  0: "",
  "-1": "file error",
  "-2": "stream error",
  "-3": "data error",
  "-4": "insufficient memory",
  "-5": "buffer error",
  "-6": "incompatible version"
};
var constants$2 = {
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  Z_BINARY: 0,
  Z_TEXT: 1,
  Z_UNKNOWN: 2,
  Z_DEFLATED: 8
};
var { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = trees;
var {
  Z_NO_FLUSH: Z_NO_FLUSH$2,
  Z_PARTIAL_FLUSH,
  Z_FULL_FLUSH: Z_FULL_FLUSH$1,
  Z_FINISH: Z_FINISH$3,
  Z_BLOCK: Z_BLOCK$1,
  Z_OK: Z_OK$3,
  Z_STREAM_END: Z_STREAM_END$3,
  Z_STREAM_ERROR: Z_STREAM_ERROR$2,
  Z_DATA_ERROR: Z_DATA_ERROR$2,
  Z_BUF_ERROR: Z_BUF_ERROR$2,
  Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1,
  Z_FILTERED,
  Z_HUFFMAN_ONLY,
  Z_RLE,
  Z_FIXED,
  Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1,
  Z_UNKNOWN,
  Z_DEFLATED: Z_DEFLATED$2
} = constants$2;
var MAX_MEM_LEVEL = 9;
var MAX_WBITS$1 = 15;
var DEF_MEM_LEVEL = 8;
var LENGTH_CODES = 29;
var LITERALS = 256;
var L_CODES = LITERALS + 1 + LENGTH_CODES;
var D_CODES = 30;
var BL_CODES = 19;
var HEAP_SIZE = 2 * L_CODES + 1;
var MAX_BITS = 15;
var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
var PRESET_DICT = 32;
var INIT_STATE = 42;
var GZIP_STATE = 57;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;
var BS_NEED_MORE = 1;
var BS_BLOCK_DONE = 2;
var BS_FINISH_STARTED = 3;
var BS_FINISH_DONE = 4;
var OS_CODE = 3;
var err = (strm, errorCode) => {
  strm.msg = messages[errorCode];
  return errorCode;
};
var rank = (f) => {
  return f * 2 - (f > 4 ? 9 : 0);
};
var zero = (buf) => {
  let len = buf.length;
  while (--len >= 0) {
    buf[len] = 0;
  }
};
var slide_hash = (s) => {
  let n, m;
  let p;
  let wsize = s.w_size;
  n = s.hash_size;
  p = n;
  do {
    m = s.head[--p];
    s.head[p] = m >= wsize ? m - wsize : 0;
  } while (--n);
  n = wsize;
  p = n;
  do {
    m = s.prev[--p];
    s.prev[p] = m >= wsize ? m - wsize : 0;
  } while (--n);
};
var HASH = (s, prev, data) => (prev << s.hash_shift ^ data) & s.hash_mask;
var INSERT_STRING = (s, str) => {
  let h;
  if (s.legacy_hash) {
    h = s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
  } else {
    const w = s.window;
    const value = w[str] | w[str + 1] << 8 | w[str + 2] << 16 | w[str + 3] << 24;
    h = s.ins_h = Math.imul(value, 66521) + 66521 >>> 16 & s.hash_mask;
  }
  const hash_head = s.prev[str & s.w_mask] = s.head[h];
  s.head[h] = str;
  return hash_head;
};
var flush_pending = (strm) => {
  const s = strm.state;
  let len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) {
    return;
  }
  strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
};
var flush_block_only = (s, last) => {
  _tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
};
var put_byte = (s, b) => {
  s.pending_buf[s.pending++] = b;
};
var putShortMSB = (s, b) => {
  s.pending_buf[s.pending++] = b >>> 8 & 255;
  s.pending_buf[s.pending++] = b & 255;
};
var read_buf = (strm, buf, start, size) => {
  let len = strm.avail_in;
  if (len > size) {
    len = size;
  }
  if (len === 0) {
    return 0;
  }
  strm.avail_in -= len;
  buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32_1(strm.adler, buf, len, start);
  } else if (strm.state.wrap === 2) {
    strm.adler = crc32_1(strm.adler, buf, len, start);
  }
  strm.next_in += len;
  strm.total_in += len;
  return len;
};
var longest_match = (s, cur_match) => {
  let chain_length = s.max_chain_length;
  let scan = s.strstart;
  let match;
  let len;
  let best_len = s.prev_length;
  let nice_match = s.nice_match;
  const limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
  const _win = s.window;
  const wmask = s.w_mask;
  const prev = s.prev;
  const strend = s.strstart + MAX_MATCH;
  let scan_end1 = _win[scan + best_len - 1];
  let scan_end = _win[scan + best_len];
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  if (nice_match > s.lookahead) {
    nice_match = s.lookahead;
  }
  do {
    match = cur_match;
    if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
      continue;
    }
    scan += 2;
    match++;
    do {} while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;
    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1 = _win[scan + best_len - 1];
      scan_end = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
};
var fill_window = (s) => {
  const _w_size = s.w_size;
  let n, more, str;
  do {
    more = s.window_size - s.lookahead - s.strstart;
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
      s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      s.block_start -= _w_size;
      if (s.insert > s.strstart) {
        s.insert = s.strstart;
      }
      slide_hash(s);
      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;
    if (!s.legacy_hash) {
      if (s.lookahead + s.insert > MIN_MATCH) {
        str = s.strstart - s.insert;
        while (s.insert) {
          INSERT_STRING(s, str);
          str++;
          s.insert--;
          if (s.lookahead + s.insert <= MIN_MATCH) {
            break;
          }
        }
      }
    } else if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];
      s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
      while (s.insert) {
        INSERT_STRING(s, str);
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
};
var deflate_stored = (s, flush) => {
  let min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5;
  let len, left, have, last = 0;
  let used = s.strm.avail_in;
  do {
    len = 65535;
    have = s.bi_valid + 42 >> 3;
    if (s.strm.avail_out < have) {
      break;
    }
    have = s.strm.avail_out - have;
    left = s.strstart - s.block_start;
    if (len > left + s.strm.avail_in) {
      len = left + s.strm.avail_in;
    }
    if (len > have) {
      len = have;
    }
    if (len < min_block && (len === 0 && flush !== Z_FINISH$3 || flush === Z_NO_FLUSH$2 || len !== left + s.strm.avail_in)) {
      break;
    }
    last = flush === Z_FINISH$3 && len === left + s.strm.avail_in ? 1 : 0;
    _tr_stored_block(s, 0, 0, last);
    s.pending_buf[s.pending - 4] = len;
    s.pending_buf[s.pending - 3] = len >> 8;
    s.pending_buf[s.pending - 2] = ~len;
    s.pending_buf[s.pending - 1] = ~len >> 8;
    flush_pending(s.strm);
    if (left) {
      if (left > len) {
        left = len;
      }
      s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out);
      s.strm.next_out += left;
      s.strm.avail_out -= left;
      s.strm.total_out += left;
      s.block_start += left;
      len -= left;
    }
    if (len) {
      read_buf(s.strm, s.strm.output, s.strm.next_out, len);
      s.strm.next_out += len;
      s.strm.avail_out -= len;
      s.strm.total_out += len;
    }
  } while (last === 0);
  used -= s.strm.avail_in;
  if (used) {
    if (used >= s.w_size) {
      s.matches = 2;
      s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0);
      s.strstart = s.w_size;
      s.insert = s.strstart;
    } else {
      if (s.window_size - s.strstart <= used) {
        s.strstart -= s.w_size;
        s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
        if (s.matches < 2) {
          s.matches++;
        }
        if (s.insert > s.strstart) {
          s.insert = s.strstart;
        }
      }
      s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart);
      s.strstart += used;
      s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used;
    }
    s.block_start = s.strstart;
  }
  if (s.high_water < s.strstart) {
    s.high_water = s.strstart;
  }
  if (last) {
    return BS_FINISH_DONE;
  }
  if (flush !== Z_NO_FLUSH$2 && flush !== Z_FINISH$3 && s.strm.avail_in === 0 && s.strstart === s.block_start) {
    return BS_BLOCK_DONE;
  }
  have = s.window_size - s.strstart;
  if (s.strm.avail_in > have && s.block_start >= s.w_size) {
    s.block_start -= s.w_size;
    s.strstart -= s.w_size;
    s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
    if (s.matches < 2) {
      s.matches++;
    }
    have += s.w_size;
    if (s.insert > s.strstart) {
      s.insert = s.strstart;
    }
  }
  if (have > s.strm.avail_in) {
    have = s.strm.avail_in;
  }
  if (have) {
    read_buf(s.strm, s.window, s.strstart, have);
    s.strstart += have;
    s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have;
  }
  if (s.high_water < s.strstart) {
    s.high_water = s.strstart;
  }
  have = s.bi_valid + 42 >> 3;
  have = s.pending_buf_size - have > 65535 ? 65535 : s.pending_buf_size - have;
  min_block = have > s.w_size ? s.w_size : have;
  left = s.strstart - s.block_start;
  if (left >= min_block || (left || flush === Z_FINISH$3) && flush !== Z_NO_FLUSH$2 && s.strm.avail_in === 0 && left <= have) {
    len = left > have ? have : left;
    last = flush === Z_FINISH$3 && s.strm.avail_in === 0 && len === left ? 1 : 0;
    _tr_stored_block(s, s.block_start, len, last);
    s.block_start += len;
    flush_pending(s.strm);
  }
  return last ? BS_FINISH_STARTED : BS_NEED_MORE;
};
var deflate_fast = (s, flush) => {
  let hash_head;
  let bflush;
  for (;; ) {
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    hash_head = 0;
    if (s.lookahead >= MIN_MATCH) {
      hash_head = INSERT_STRING(s, s.strstart);
    }
    if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
      s.match_length = longest_match(s, hash_head);
    }
    if (s.match_length >= MIN_MATCH) {
      bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
      s.lookahead -= s.match_length;
      if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
        s.match_length--;
        do {
          s.strstart++;
          hash_head = INSERT_STRING(s, s.strstart);
        } while (--s.match_length !== 0);
        s.strstart++;
      } else {
        s.strstart += s.match_length;
        s.match_length = 0;
        if (s.legacy_hash) {
          s.ins_h = s.window[s.strstart];
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);
        }
      }
    } else {
      bflush = _tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH$3) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
};
var deflate_slow = (s, flush) => {
  let hash_head;
  let bflush;
  let max_insert;
  for (;; ) {
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    hash_head = 0;
    if (s.lookahead >= MIN_MATCH) {
      hash_head = INSERT_STRING(s, s.strstart);
    }
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;
    if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
      s.match_length = longest_match(s, hash_head);
      if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096)) {
        s.match_length = MIN_MATCH - 1;
      }
    }
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          hash_head = INSERT_STRING(s, s.strstart);
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;
      if (bflush) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    } else if (s.match_available) {
      bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
      if (bflush) {
        flush_block_only(s, false);
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  if (s.match_available) {
    bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH$3) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
};
var deflate_rle = (s, flush) => {
  let bflush;
  let prev;
  let scan, strend;
  const _win = s.window;
  for (;; ) {
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {} while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
    }
    if (s.match_length >= MIN_MATCH) {
      bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);
      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      bflush = _tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$3) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
};
var deflate_huff = (s, flush) => {
  let bflush;
  for (;; ) {
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH$2) {
          return BS_NEED_MORE;
        }
        break;
      }
    }
    s.match_length = 0;
    bflush = _tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$3) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
};
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}
var configuration_table = [
  new Config(0, 0, 0, 0, deflate_stored),
  new Config(4, 4, 8, 4, deflate_fast),
  new Config(4, 5, 16, 8, deflate_fast),
  new Config(4, 6, 32, 32, deflate_fast),
  new Config(4, 4, 16, 16, deflate_slow),
  new Config(8, 16, 32, 32, deflate_slow),
  new Config(8, 16, 128, 128, deflate_slow),
  new Config(8, 32, 128, 256, deflate_slow),
  new Config(32, 128, 258, 1024, deflate_slow),
  new Config(32, 258, 258, 4096, deflate_slow)
];
var lm_init = (s) => {
  s.window_size = 2 * s.w_size;
  zero(s.head);
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;
  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
};
function DeflateState() {
  this.strm = null;
  this.status = 0;
  this.pending_buf = null;
  this.pending_buf_size = 0;
  this.pending_out = 0;
  this.pending = 0;
  this.wrap = 0;
  this.gzhead = null;
  this.gzindex = 0;
  this.method = Z_DEFLATED$2;
  this.last_flush = -1;
  this.w_size = 0;
  this.w_bits = 0;
  this.w_mask = 0;
  this.window = null;
  this.window_size = 0;
  this.prev = null;
  this.head = null;
  this.ins_h = 0;
  this.legacy_hash = 0;
  this.hash_size = 0;
  this.hash_bits = 0;
  this.hash_mask = 0;
  this.hash_shift = 0;
  this.block_start = 0;
  this.match_length = 0;
  this.prev_match = 0;
  this.match_available = 0;
  this.strstart = 0;
  this.match_start = 0;
  this.lookahead = 0;
  this.prev_length = 0;
  this.max_chain_length = 0;
  this.max_lazy_match = 0;
  this.level = 0;
  this.strategy = 0;
  this.good_match = 0;
  this.nice_match = 0;
  this.dyn_ltree = new Uint16Array(HEAP_SIZE * 2);
  this.dyn_dtree = new Uint16Array((2 * D_CODES + 1) * 2);
  this.bl_tree = new Uint16Array((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);
  this.l_desc = null;
  this.d_desc = null;
  this.bl_desc = null;
  this.bl_count = new Uint16Array(MAX_BITS + 1);
  this.heap = new Uint16Array(2 * L_CODES + 1);
  zero(this.heap);
  this.heap_len = 0;
  this.heap_max = 0;
  this.depth = new Uint16Array(2 * L_CODES + 1);
  zero(this.depth);
  this.sym_buf = 0;
  this.lit_bufsize = 0;
  this.sym_next = 0;
  this.sym_end = 0;
  this.opt_len = 0;
  this.static_len = 0;
  this.matches = 0;
  this.insert = 0;
  this.bi_buf = 0;
  this.bi_valid = 0;
}
var deflateStateCheck = (strm) => {
  if (!strm) {
    return 1;
  }
  const s = strm.state;
  if (!s || s.strm !== strm || s.status !== INIT_STATE && s.status !== GZIP_STATE && s.status !== EXTRA_STATE && s.status !== NAME_STATE && s.status !== COMMENT_STATE && s.status !== HCRC_STATE && s.status !== BUSY_STATE && s.status !== FINISH_STATE) {
    return 1;
  }
  return 0;
};
var deflateResetKeep = (strm) => {
  if (deflateStateCheck(strm)) {
    return err(strm, Z_STREAM_ERROR$2);
  }
  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;
  const s = strm.state;
  s.pending = 0;
  s.pending_out = 0;
  if (s.wrap < 0) {
    s.wrap = -s.wrap;
  }
  s.status = s.wrap === 2 ? GZIP_STATE : s.wrap ? INIT_STATE : BUSY_STATE;
  strm.adler = s.wrap === 2 ? 0 : 1;
  s.last_flush = -2;
  _tr_init(s);
  return Z_OK$3;
};
var deflateReset = (strm) => {
  const ret = deflateResetKeep(strm);
  if (ret === Z_OK$3) {
    lm_init(strm.state);
  }
  return ret;
};
var deflateSetHeader = (strm, head) => {
  if (deflateStateCheck(strm) || strm.state.wrap !== 2) {
    return Z_STREAM_ERROR$2;
  }
  strm.state.gzhead = head;
  return Z_OK$3;
};
var deflateInit2 = (strm, level, method, windowBits, memLevel, strategy, legacyHash) => {
  if (!strm) {
    return Z_STREAM_ERROR$2;
  }
  let wrap = 1;
  if (level === Z_DEFAULT_COMPRESSION$1) {
    level = 6;
  }
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  } else if (windowBits > 15) {
    wrap = 2;
    windowBits -= 16;
  }
  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED || windowBits === 8 && wrap !== 1) {
    return err(strm, Z_STREAM_ERROR$2);
  }
  if (windowBits === 8) {
    windowBits = 9;
  }
  const s = new DeflateState;
  strm.state = s;
  s.strm = strm;
  s.status = INIT_STATE;
  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;
  s.legacy_hash = legacyHash ? 1 : 0;
  s.hash_bits = memLevel + 7;
  if (!s.legacy_hash && s.hash_bits < 15) {
    s.hash_bits = 15;
  }
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
  s.window = new Uint8Array(s.w_size * 2);
  s.head = new Uint16Array(s.hash_size);
  s.prev = new Uint16Array(s.w_size);
  s.lit_bufsize = 1 << memLevel + 6;
  s.pending_buf_size = s.lit_bufsize * 4;
  s.pending_buf = new Uint8Array(s.pending_buf_size);
  s.sym_buf = s.lit_bufsize;
  s.sym_end = (s.lit_bufsize - 1) * 3;
  s.level = level;
  s.strategy = strategy;
  s.method = method;
  return deflateReset(strm);
};
var deflateInit = (strm, level) => {
  return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
};
var deflate$2 = (strm, flush) => {
  if (deflateStateCheck(strm) || flush > Z_BLOCK$1 || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
  }
  const s = strm.state;
  if (!strm.output || strm.avail_in !== 0 && !strm.input || s.status === FINISH_STATE && flush !== Z_FINISH$3) {
    return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR$2 : Z_STREAM_ERROR$2);
  }
  const old_flush = s.last_flush;
  s.last_flush = flush;
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      s.last_flush = -1;
      return Z_OK$3;
    }
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH$3) {
    return err(strm, Z_BUF_ERROR$2);
  }
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR$2);
  }
  if (s.status === INIT_STATE && s.wrap === 0) {
    s.status = BUSY_STATE;
  }
  if (s.status === INIT_STATE) {
    let header = Z_DEFLATED$2 + (s.w_bits - 8 << 4) << 8;
    let level_flags = -1;
    if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
      level_flags = 0;
    } else if (s.level < 6) {
      level_flags = 1;
    } else if (s.level === 6) {
      level_flags = 2;
    } else {
      level_flags = 3;
    }
    header |= level_flags << 6;
    if (s.strstart !== 0) {
      header |= PRESET_DICT;
    }
    header += 31 - header % 31;
    putShortMSB(s, header);
    if (s.strstart !== 0) {
      putShortMSB(s, strm.adler >>> 16);
      putShortMSB(s, strm.adler & 65535);
    }
    strm.adler = 1;
    s.status = BUSY_STATE;
    flush_pending(strm);
    if (s.pending !== 0) {
      s.last_flush = -1;
      return Z_OK$3;
    }
  }
  if (s.status === GZIP_STATE) {
    strm.adler = 0;
    put_byte(s, 31);
    put_byte(s, 139);
    put_byte(s, 8);
    if (!s.gzhead) {
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
      put_byte(s, OS_CODE);
      s.status = BUSY_STATE;
      flush_pending(strm);
      if (s.pending !== 0) {
        s.last_flush = -1;
        return Z_OK$3;
      }
    } else {
      put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
      put_byte(s, s.gzhead.time & 255);
      put_byte(s, s.gzhead.time >> 8 & 255);
      put_byte(s, s.gzhead.time >> 16 & 255);
      put_byte(s, s.gzhead.time >> 24 & 255);
      put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
      put_byte(s, s.gzhead.os & 255);
      if (s.gzhead.extra && s.gzhead.extra.length) {
        put_byte(s, s.gzhead.extra.length & 255);
        put_byte(s, s.gzhead.extra.length >> 8 & 255);
      }
      if (s.gzhead.hcrc) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
      }
      s.gzindex = 0;
      s.status = EXTRA_STATE;
    }
  }
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra) {
      let beg = s.pending;
      let left = (s.gzhead.extra.length & 65535) - s.gzindex;
      while (s.pending + left > s.pending_buf_size) {
        let copy = s.pending_buf_size - s.pending;
        s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending);
        s.pending = s.pending_buf_size;
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        s.gzindex += copy;
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK$3;
        }
        beg = 0;
        left -= copy;
      }
      let gzhead_extra = new Uint8Array(s.gzhead.extra);
      s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending);
      s.pending += left;
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      s.gzindex = 0;
    }
    s.status = NAME_STATE;
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name) {
      let beg = s.pending;
      let val;
      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
          }
          beg = 0;
        }
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      s.gzindex = 0;
    }
    s.status = COMMENT_STATE;
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment) {
      let beg = s.pending;
      let val;
      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
          }
          beg = 0;
        }
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
    }
    s.status = HCRC_STATE;
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK$3;
        }
      }
      put_byte(s, strm.adler & 255);
      put_byte(s, strm.adler >> 8 & 255);
      strm.adler = 0;
    }
    s.status = BUSY_STATE;
    flush_pending(strm);
    if (s.pending !== 0) {
      s.last_flush = -1;
      return Z_OK$3;
    }
  }
  if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH$2 && s.status !== FINISH_STATE) {
    let bstate = s.level === 0 ? deflate_stored(s, flush) : s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
      }
      return Z_OK$3;
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        _tr_align(s);
      } else if (flush !== Z_BLOCK$1) {
        _tr_stored_block(s, 0, 0, false);
        if (flush === Z_FULL_FLUSH$1) {
          zero(s.head);
          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        return Z_OK$3;
      }
    }
  }
  if (flush !== Z_FINISH$3) {
    return Z_OK$3;
  }
  if (s.wrap <= 0) {
    return Z_STREAM_END$3;
  }
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 255);
    put_byte(s, strm.adler >> 8 & 255);
    put_byte(s, strm.adler >> 16 & 255);
    put_byte(s, strm.adler >> 24 & 255);
    put_byte(s, strm.total_in & 255);
    put_byte(s, strm.total_in >> 8 & 255);
    put_byte(s, strm.total_in >> 16 & 255);
    put_byte(s, strm.total_in >> 24 & 255);
  } else {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 65535);
  }
  flush_pending(strm);
  if (s.wrap > 0) {
    s.wrap = -s.wrap;
  }
  return s.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3;
};
var deflateEnd = (strm) => {
  if (deflateStateCheck(strm)) {
    return Z_STREAM_ERROR$2;
  }
  const status = strm.state.status;
  strm.state = null;
  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$3;
};
var deflateSetDictionary = (strm, dictionary) => {
  let dictLength = dictionary.length;
  if (deflateStateCheck(strm)) {
    return Z_STREAM_ERROR$2;
  }
  const s = strm.state;
  const wrap = s.wrap;
  if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
    return Z_STREAM_ERROR$2;
  }
  if (wrap === 1) {
    strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
  }
  s.wrap = 0;
  if (dictLength >= s.w_size) {
    if (wrap === 0) {
      zero(s.head);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    let tmpDict = new Uint8Array(s.w_size);
    tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  const avail = strm.avail_in;
  const next = strm.next_in;
  const input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    let str = s.strstart;
    let n = s.lookahead - (MIN_MATCH - 1);
    do {
      INSERT_STRING(s, str);
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK$3;
};
var deflateInit_1 = deflateInit;
var deflateInit2_1 = deflateInit2;
var deflateReset_1 = deflateReset;
var deflateResetKeep_1 = deflateResetKeep;
var deflateSetHeader_1 = deflateSetHeader;
var deflate_2$1 = deflate$2;
var deflateEnd_1 = deflateEnd;
var deflateSetDictionary_1 = deflateSetDictionary;
var deflateInfo = "pako deflate (from Nodeca project)";
var deflate_1$2 = {
  deflateInit: deflateInit_1,
  deflateInit2: deflateInit2_1,
  deflateReset: deflateReset_1,
  deflateResetKeep: deflateResetKeep_1,
  deflateSetHeader: deflateSetHeader_1,
  deflate: deflate_2$1,
  deflateEnd: deflateEnd_1,
  deflateSetDictionary: deflateSetDictionary_1,
  deflateInfo
};
var _has = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};
var assign = function(obj) {
  const sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    const source = sources.shift();
    if (!source) {
      continue;
    }
    if (typeof source !== "object") {
      throw new TypeError(source + "must be non-object");
    }
    for (const p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }
  return obj;
};
var flattenChunks = (chunks) => {
  let len = 0;
  for (let i = 0, l = chunks.length;i < l; i++) {
    len += chunks[i].length;
  }
  const result = new Uint8Array(len);
  for (let i = 0, pos = 0, l = chunks.length;i < l; i++) {
    let chunk = chunks[i];
    result.set(chunk, pos);
    pos += chunk.length;
  }
  return result;
};
var common = {
  assign,
  flattenChunks
};
var STR_APPLY_UIA_OK = true;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch (__) {
  STR_APPLY_UIA_OK = false;
}
var _utf8len = new Uint8Array(256);
for (let q = 0;q < 256; q++) {
  _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
}
_utf8len[254] = _utf8len[255] = 1;
var string2buf = (str) => {
  if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) {
    return new TextEncoder().encode(str);
  }
  let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
  for (m_pos = 0;m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 64512) === 56320) {
        c = 65536 + (c - 55296 << 10) + (c2 - 56320);
        m_pos++;
      }
    }
    buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
  }
  buf = new Uint8Array(buf_len);
  for (i = 0, m_pos = 0;i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 64512) === 56320) {
        c = 65536 + (c - 55296 << 10) + (c2 - 56320);
        m_pos++;
      }
    }
    if (c < 128) {
      buf[i++] = c;
    } else if (c < 2048) {
      buf[i++] = 192 | c >>> 6;
      buf[i++] = 128 | c & 63;
    } else if (c < 65536) {
      buf[i++] = 224 | c >>> 12;
      buf[i++] = 128 | c >>> 6 & 63;
      buf[i++] = 128 | c & 63;
    } else {
      buf[i++] = 240 | c >>> 18;
      buf[i++] = 128 | c >>> 12 & 63;
      buf[i++] = 128 | c >>> 6 & 63;
      buf[i++] = 128 | c & 63;
    }
  }
  return buf;
};
var buf2binstring = (buf, len) => {
  if (len < 65534) {
    if (buf.subarray && STR_APPLY_UIA_OK) {
      return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
    }
  }
  let result = "";
  for (let i = 0;i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
};
var buf2string = (buf, max) => {
  const len = max || buf.length;
  if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) {
    return new TextDecoder().decode(buf.subarray(0, max));
  }
  let i, out;
  const utf16buf = new Array(len * 2);
  for (out = 0, i = 0;i < len; ) {
    let c = buf[i++];
    if (c < 128) {
      utf16buf[out++] = c;
      continue;
    }
    let c_len = _utf8len[c];
    if (c_len > 4) {
      utf16buf[out++] = 65533;
      i += c_len - 1;
      continue;
    }
    c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
    while (c_len > 1 && i < len) {
      c = c << 6 | buf[i++] & 63;
      c_len--;
    }
    if (c_len > 1) {
      utf16buf[out++] = 65533;
      continue;
    }
    if (c < 65536) {
      utf16buf[out++] = c;
    } else {
      c -= 65536;
      utf16buf[out++] = 55296 | c >> 10 & 1023;
      utf16buf[out++] = 56320 | c & 1023;
    }
  }
  return buf2binstring(utf16buf, out);
};
var utf8border = (buf, max) => {
  max = max || buf.length;
  if (max > buf.length) {
    max = buf.length;
  }
  let pos = max - 1;
  while (pos >= 0 && (buf[pos] & 192) === 128) {
    pos--;
  }
  if (pos < 0) {
    return max;
  }
  if (pos === 0) {
    return max;
  }
  return pos + _utf8len[buf[pos]] > max ? pos : max;
};
var strings = {
  string2buf,
  buf2string,
  utf8border
};
function ZStream() {
  this.input = null;
  this.next_in = 0;
  this.avail_in = 0;
  this.total_in = 0;
  this.output = null;
  this.next_out = 0;
  this.avail_out = 0;
  this.total_out = 0;
  this.msg = "";
  this.state = null;
  this.data_type = 2;
  this.adler = 0;
}
var zstream = ZStream;
var toString$1 = Object.prototype.toString;
var {
  Z_NO_FLUSH: Z_NO_FLUSH$1,
  Z_SYNC_FLUSH,
  Z_FULL_FLUSH,
  Z_FINISH: Z_FINISH$2,
  Z_OK: Z_OK$2,
  Z_STREAM_END: Z_STREAM_END$2,
  Z_DEFAULT_COMPRESSION,
  Z_DEFAULT_STRATEGY,
  Z_DEFLATED: Z_DEFLATED$1
} = constants$2;
var defaultOptions$1 = {
  level: Z_DEFAULT_COMPRESSION,
  method: Z_DEFLATED$1,
  chunkSize: 16384,
  windowBits: 15,
  memLevel: 8,
  strategy: Z_DEFAULT_STRATEGY,
  legacyHash: true
};
function Deflate$1(options2) {
  this.options = common.assign({}, defaultOptions$1, options2 || {});
  let opt = this.options;
  if (opt.raw && opt.windowBits > 0) {
    opt.windowBits = -opt.windowBits;
  } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
    opt.windowBits += 16;
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new zstream;
  this.strm.avail_out = 0;
  let status = deflate_1$2.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy, opt.legacyHash);
  if (status !== Z_OK$2) {
    throw new Error(messages[status]);
  }
  if (opt.header) {
    deflate_1$2.deflateSetHeader(this.strm, opt.header);
  }
  if (opt.dictionary) {
    let dict;
    if (typeof opt.dictionary === "string") {
      dict = strings.string2buf(opt.dictionary);
    } else if (toString$1.call(opt.dictionary) === "[object ArrayBuffer]") {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }
    status = deflate_1$2.deflateSetDictionary(this.strm, dict);
    if (status !== Z_OK$2) {
      throw new Error(messages[status]);
    }
    this._dict_set = true;
  }
}
Deflate$1.prototype.push = function(data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  let status, _flush_mode;
  if (this.ended) {
    return false;
  }
  if (flush_mode === ~~flush_mode)
    _flush_mode = flush_mode;
  else
    _flush_mode = flush_mode === true ? Z_FINISH$2 : Z_NO_FLUSH$1;
  if (typeof data === "string") {
    strm.input = strings.string2buf(data);
  } else if (toString$1.call(data) === "[object ArrayBuffer]") {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }
  strm.next_in = 0;
  strm.avail_in = strm.input.length;
  for (;; ) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }
    status = deflate_1$2.deflate(strm, _flush_mode);
    if (status === Z_STREAM_END$2) {
      if (strm.next_out > 0) {
        this.onData(strm.output.subarray(0, strm.next_out));
      }
      status = deflate_1$2.deflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === Z_OK$2;
    }
    if (strm.avail_out === 0) {
      this.onData(strm.output);
      continue;
    }
    if (_flush_mode > 0 && strm.next_out > 0) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }
    if (strm.avail_in === 0)
      break;
  }
  return true;
};
Deflate$1.prototype.onData = function(chunk) {
  this.chunks.push(chunk);
};
Deflate$1.prototype.onEnd = function(status) {
  if (status === Z_OK$2) {
    this.result = common.flattenChunks(this.chunks);
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};
function deflate$1(input, options2) {
  const deflator = new Deflate$1(options2);
  deflator.push(input, true);
  if (deflator.err) {
    throw deflator.msg || messages[deflator.err];
  }
  return deflator.result;
}
function deflateRaw$1(input, options2) {
  options2 = options2 || {};
  options2.raw = true;
  return deflate$1(input, options2);
}
function gzip$1(input, options2) {
  options2 = options2 || {};
  options2.gzip = true;
  return deflate$1(input, options2);
}
var Deflate_1$1 = Deflate$1;
var deflate_2 = deflate$1;
var deflateRaw_1$1 = deflateRaw$1;
var gzip_1$1 = gzip$1;
var constants$1 = constants$2;
var deflate_1$1 = {
  Deflate: Deflate_1$1,
  deflate: deflate_2,
  deflateRaw: deflateRaw_1$1,
  gzip: gzip_1$1,
  constants: constants$1
};
var BAD$1 = 16209;
var TYPE$1 = 16191;
var inffast = function inflate_fast(strm, start) {
  let _in;
  let last;
  let _out;
  let beg;
  let end;
  let dmax;
  let wsize;
  let whave;
  let wnext;
  let s_window;
  let hold;
  let bits;
  let lcode;
  let dcode;
  let lmask;
  let dmask;
  let here;
  let op;
  let len;
  let dist;
  let from;
  let from_source;
  let input, output;
  const state = strm.state;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
  dmax = state.dmax;
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;
  top:
    do {
      if (bits < 15) {
        hold += input[_in++] << bits;
        bits += 8;
        hold += input[_in++] << bits;
        bits += 8;
      }
      here = lcode[hold & lmask];
      dolen:
        for (;; ) {
          op = here >>> 24;
          hold >>>= op;
          bits -= op;
          op = here >>> 16 & 255;
          if (op === 0) {
            output[_out++] = here & 65535;
          } else if (op & 16) {
            len = here & 65535;
            op &= 15;
            if (op) {
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
              len += hold & (1 << op) - 1;
              hold >>>= op;
              bits -= op;
            }
            if (bits < 15) {
              hold += input[_in++] << bits;
              bits += 8;
              hold += input[_in++] << bits;
              bits += 8;
            }
            here = dcode[hold & dmask];
            dodist:
              for (;; ) {
                op = here >>> 24;
                hold >>>= op;
                bits -= op;
                op = here >>> 16 & 255;
                if (op & 16) {
                  dist = here & 65535;
                  op &= 15;
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    if (bits < op) {
                      hold += input[_in++] << bits;
                      bits += 8;
                    }
                  }
                  dist += hold & (1 << op) - 1;
                  if (dist > dmax) {
                    strm.msg = "invalid distance too far back";
                    state.mode = BAD$1;
                    break top;
                  }
                  hold >>>= op;
                  bits -= op;
                  op = _out - beg;
                  if (dist > op) {
                    op = dist - op;
                    if (op > whave) {
                      if (state.sane) {
                        strm.msg = "invalid distance too far back";
                        state.mode = BAD$1;
                        break top;
                      }
                    }
                    from = 0;
                    from_source = s_window;
                    if (wnext === 0) {
                      from += wsize - op;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist;
                        from_source = output;
                      }
                    } else if (wnext < op) {
                      from += wsize + wnext - op;
                      op -= wnext;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = 0;
                        if (wnext < len) {
                          op = wnext;
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = _out - dist;
                          from_source = output;
                        }
                      }
                    } else {
                      from += wnext - op;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist;
                        from_source = output;
                      }
                    }
                    while (len > 2) {
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      len -= 3;
                    }
                    if (len) {
                      output[_out++] = from_source[from++];
                      if (len > 1) {
                        output[_out++] = from_source[from++];
                      }
                    }
                  } else {
                    from = _out - dist;
                    do {
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      len -= 3;
                    } while (len > 2);
                    if (len) {
                      output[_out++] = output[from++];
                      if (len > 1) {
                        output[_out++] = output[from++];
                      }
                    }
                  }
                } else if ((op & 64) === 0) {
                  here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                  continue dodist;
                } else {
                  strm.msg = "invalid distance code";
                  state.mode = BAD$1;
                  break top;
                }
                break;
              }
          } else if ((op & 64) === 0) {
            here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
            continue dolen;
          } else if (op & 32) {
            state.mode = TYPE$1;
            break top;
          } else {
            strm.msg = "invalid literal/length code";
            state.mode = BAD$1;
            break top;
          }
          break;
        }
    } while (_in < last && _out < end);
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
  strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
  state.hold = hold;
  state.bits = bits;
  return;
};
var MAXBITS = 15;
var ENOUGH_LENS$1 = 852;
var ENOUGH_DISTS$1 = 592;
var CODES$1 = 0;
var LENS$1 = 1;
var DISTS$1 = 2;
var lbase = new Uint16Array([
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]);
var lext = new Uint8Array([
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  199,
  75
]);
var dbase = new Uint16Array([
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]);
var dext = new Uint8Array([
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]);
var inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) => {
  const bits = opts.bits;
  let len = 0;
  let sym = 0;
  let min = 0, max = 0;
  let root = 0;
  let curr = 0;
  let drop = 0;
  let left = 0;
  let used = 0;
  let huff = 0;
  let incr;
  let fill;
  let low;
  let mask;
  let next;
  let base = null;
  let match;
  const count = new Uint16Array(MAXBITS + 1);
  const offs = new Uint16Array(MAXBITS + 1);
  let extra = null;
  let here_bits, here_op, here_val;
  for (len = 0;len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0;sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }
  root = bits;
  for (max = MAXBITS;max >= 1; max--) {
    if (count[max] !== 0) {
      break;
    }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {
    table[table_index++] = 1 << 24 | 64 << 16 | 0;
    table[table_index++] = 1 << 24 | 64 << 16 | 0;
    opts.bits = 1;
    return 0;
  }
  for (min = 1;min < max; min++) {
    if (count[min] !== 0) {
      break;
    }
  }
  if (root < min) {
    root = min;
  }
  left = 1;
  for (len = 1;len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }
  }
  if (left > 0 && (type === CODES$1 || max !== 1)) {
    return -1;
  }
  offs[1] = 0;
  for (len = 1;len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }
  for (sym = 0;sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }
  if (type === CODES$1) {
    base = extra = work;
    match = 20;
  } else if (type === LENS$1) {
    base = lbase;
    extra = lext;
    match = 257;
  } else {
    base = dbase;
    extra = dext;
    match = 0;
  }
  huff = 0;
  sym = 0;
  len = min;
  next = table_index;
  curr = root;
  drop = 0;
  low = -1;
  used = 1 << root;
  mask = used - 1;
  if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) {
    return 1;
  }
  for (;; ) {
    here_bits = len - drop;
    if (work[sym] + 1 < match) {
      here_op = 0;
      here_val = work[sym];
    } else if (work[sym] >= match) {
      here_op = extra[work[sym] - match];
      here_val = base[work[sym] - match];
    } else {
      here_op = 32 + 64;
      here_val = 0;
    }
    incr = 1 << len - drop;
    fill = 1 << curr;
    min = fill;
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
    } while (fill !== 0);
    incr = 1 << len - 1;
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }
    sym++;
    if (--count[len] === 0) {
      if (len === max) {
        break;
      }
      len = lens[lens_index + work[sym]];
    }
    if (len > root && (huff & mask) !== low) {
      if (drop === 0) {
        drop = root;
      }
      next += min;
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) {
          break;
        }
        curr++;
        left <<= 1;
      }
      used += 1 << curr;
      if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) {
        return 1;
      }
      low = huff & mask;
      table[low] = root << 24 | curr << 16 | next - table_index | 0;
    }
  }
  if (huff !== 0) {
    table[next + huff] = len - drop << 24 | 64 << 16 | 0;
  }
  opts.bits = root;
  return 0;
};
var inftrees = inflate_table;
var CODES = 0;
var LENS = 1;
var DISTS = 2;
var {
  Z_FINISH: Z_FINISH$1,
  Z_BLOCK,
  Z_TREES,
  Z_OK: Z_OK$1,
  Z_STREAM_END: Z_STREAM_END$1,
  Z_NEED_DICT: Z_NEED_DICT$1,
  Z_STREAM_ERROR: Z_STREAM_ERROR$1,
  Z_DATA_ERROR: Z_DATA_ERROR$1,
  Z_MEM_ERROR: Z_MEM_ERROR$1,
  Z_BUF_ERROR: Z_BUF_ERROR$1,
  Z_DEFLATED
} = constants$2;
var HEAD = 16180;
var FLAGS = 16181;
var TIME = 16182;
var OS = 16183;
var EXLEN = 16184;
var EXTRA = 16185;
var NAME = 16186;
var COMMENT = 16187;
var HCRC = 16188;
var DICTID = 16189;
var DICT = 16190;
var TYPE = 16191;
var TYPEDO = 16192;
var STORED = 16193;
var COPY_ = 16194;
var COPY = 16195;
var TABLE = 16196;
var LENLENS = 16197;
var CODELENS = 16198;
var LEN_ = 16199;
var LEN = 16200;
var LENEXT = 16201;
var DIST = 16202;
var DISTEXT = 16203;
var MATCH = 16204;
var LIT = 16205;
var CHECK = 16206;
var LENGTH = 16207;
var DONE = 16208;
var BAD = 16209;
var MEM = 16210;
var SYNC = 16211;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
var MAX_WBITS = 15;
var DEF_WBITS = MAX_WBITS;
var zswap32 = (q) => {
  return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
};
function InflateState() {
  this.strm = null;
  this.mode = 0;
  this.last = false;
  this.wrap = 0;
  this.havedict = false;
  this.flags = 0;
  this.dmax = 0;
  this.check = 0;
  this.total = 0;
  this.head = null;
  this.wbits = 0;
  this.wsize = 0;
  this.whave = 0;
  this.wnext = 0;
  this.window = null;
  this.hold = 0;
  this.bits = 0;
  this.length = 0;
  this.offset = 0;
  this.extra = 0;
  this.lencode = null;
  this.distcode = null;
  this.lenbits = 0;
  this.distbits = 0;
  this.ncode = 0;
  this.nlen = 0;
  this.ndist = 0;
  this.have = 0;
  this.next = null;
  this.lens = new Uint16Array(320);
  this.work = new Uint16Array(288);
  this.lendyn = null;
  this.distdyn = null;
  this.sane = 0;
  this.back = 0;
  this.was = 0;
}
var inflateStateCheck = (strm) => {
  if (!strm) {
    return 1;
  }
  const state = strm.state;
  if (!state || state.strm !== strm || state.mode < HEAD || state.mode > SYNC) {
    return 1;
  }
  return 0;
};
var inflateResetKeep = (strm) => {
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  const state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = "";
  if (state.wrap) {
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.flags = -1;
  state.dmax = 32768;
  state.head = null;
  state.hold = 0;
  state.bits = 0;
  state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
  state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);
  state.sane = 1;
  state.back = -1;
  return Z_OK$1;
};
var inflateReset = (strm) => {
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  const state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);
};
var inflateReset2 = (strm, windowBits) => {
  let wrap;
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  const state = strm.state;
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  } else {
    wrap = (windowBits >> 4) + 5;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR$1;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
};
var inflateInit2 = (strm, windowBits) => {
  if (!strm) {
    return Z_STREAM_ERROR$1;
  }
  const state = new InflateState;
  strm.state = state;
  state.strm = strm;
  state.window = null;
  state.mode = HEAD;
  const ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK$1) {
    strm.state = null;
  }
  return ret;
};
var inflateInit = (strm) => {
  return inflateInit2(strm, DEF_WBITS);
};
var virgin = true;
var lenfix;
var distfix;
var fixedtables = (state) => {
  if (virgin) {
    lenfix = new Int32Array(512);
    distfix = new Int32Array(32);
    let sym = 0;
    while (sym < 144) {
      state.lens[sym++] = 8;
    }
    while (sym < 256) {
      state.lens[sym++] = 9;
    }
    while (sym < 280) {
      state.lens[sym++] = 7;
    }
    while (sym < 288) {
      state.lens[sym++] = 8;
    }
    inftrees(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
    sym = 0;
    while (sym < 32) {
      state.lens[sym++] = 5;
    }
    inftrees(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
    virgin = false;
  }
  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
};
var updatewindow = (strm, src, end, copy) => {
  let dist;
  const state = strm.state;
  if (state.window === null) {
    state.window = new Uint8Array(1 << state.wbits);
  }
  if (state.wsize === 0) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;
  }
  if (copy >= state.wsize) {
    state.window.set(src.subarray(end - state.wsize, end), 0);
    state.wnext = 0;
    state.whave = state.wsize;
  } else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
    copy -= dist;
    if (copy) {
      state.window.set(src.subarray(end - copy, end), 0);
      state.wnext = copy;
      state.whave = state.wsize;
    } else {
      state.wnext += dist;
      if (state.wnext === state.wsize) {
        state.wnext = 0;
      }
      if (state.whave < state.wsize) {
        state.whave += dist;
      }
    }
  }
  return 0;
};
var inflate$2 = (strm, flush) => {
  let state;
  let input, output;
  let next;
  let put;
  let have, left;
  let hold;
  let bits;
  let _in, _out;
  let copy;
  let from;
  let from_source;
  let here = 0;
  let here_bits, here_op, here_val;
  let last_bits, last_op, last_val;
  let len;
  let ret;
  const hbuf = new Uint8Array(4);
  let opts;
  let n;
  const order = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  if (inflateStateCheck(strm) || !strm.output || !strm.input && strm.avail_in !== 0) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  if (state.mode === TYPE) {
    state.mode = TYPEDO;
  }
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  _in = have;
  _out = left;
  ret = Z_OK$1;
  inf_leave:
    for (;; ) {
      switch (state.mode) {
        case HEAD:
          if (state.wrap === 0) {
            state.mode = TYPEDO;
            break;
          }
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.wrap & 2 && hold === 35615) {
            if (state.wbits === 0) {
              state.wbits = 15;
            }
            state.check = 0;
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32_1(state.check, hbuf, 2, 0);
            hold = 0;
            bits = 0;
            state.mode = FLAGS;
            break;
          }
          if (state.head) {
            state.head.done = false;
          }
          if (!(state.wrap & 1) || (((hold & 255) << 8) + (hold >> 8)) % 31) {
            strm.msg = "incorrect header check";
            state.mode = BAD;
            break;
          }
          if ((hold & 15) !== Z_DEFLATED) {
            strm.msg = "unknown compression method";
            state.mode = BAD;
            break;
          }
          hold >>>= 4;
          bits -= 4;
          len = (hold & 15) + 8;
          if (state.wbits === 0) {
            state.wbits = len;
          }
          if (len > 15 || len > state.wbits) {
            strm.msg = "invalid window size";
            state.mode = BAD;
            break;
          }
          state.dmax = 1 << state.wbits;
          state.flags = 0;
          strm.adler = state.check = 1;
          state.mode = hold & 512 ? DICTID : TYPE;
          hold = 0;
          bits = 0;
          break;
        case FLAGS:
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.flags = hold;
          if ((state.flags & 255) !== Z_DEFLATED) {
            strm.msg = "unknown compression method";
            state.mode = BAD;
            break;
          }
          if (state.flags & 57344) {
            strm.msg = "unknown header flags set";
            state.mode = BAD;
            break;
          }
          if (state.head) {
            state.head.text = hold >> 8 & 1;
          }
          if (state.flags & 512 && state.wrap & 4) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32_1(state.check, hbuf, 2, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = TIME;
        case TIME:
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.head) {
            state.head.time = hold;
          }
          if (state.flags & 512 && state.wrap & 4) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            hbuf[2] = hold >>> 16 & 255;
            hbuf[3] = hold >>> 24 & 255;
            state.check = crc32_1(state.check, hbuf, 4, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = OS;
        case OS:
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.head) {
            state.head.xflags = hold & 255;
            state.head.os = hold >> 8;
          }
          if (state.flags & 512 && state.wrap & 4) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32_1(state.check, hbuf, 2, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = EXLEN;
        case EXLEN:
          if (state.flags & 1024) {
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.length = hold;
            if (state.head) {
              state.head.extra_len = hold;
            }
            if (state.flags & 512 && state.wrap & 4) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32_1(state.check, hbuf, 2, 0);
            }
            hold = 0;
            bits = 0;
          } else if (state.head) {
            state.head.extra = null;
          }
          state.mode = EXTRA;
        case EXTRA:
          if (state.flags & 1024) {
            copy = state.length;
            if (copy > have) {
              copy = have;
            }
            if (copy) {
              if (state.head) {
                len = state.head.extra_len - state.length;
                if (!state.head.extra) {
                  state.head.extra = new Uint8Array(state.head.extra_len);
                }
                state.head.extra.set(input.subarray(next, next + copy), len);
              }
              if (state.flags & 512 && state.wrap & 4) {
                state.check = crc32_1(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              state.length -= copy;
            }
            if (state.length) {
              break inf_leave;
            }
          }
          state.length = 0;
          state.mode = NAME;
        case NAME:
          if (state.flags & 2048) {
            if (have === 0) {
              break inf_leave;
            }
            copy = 0;
            do {
              len = input[next + copy++];
              if (state.head && len && state.length < 65536) {
                state.head.name += String.fromCharCode(len);
              }
            } while (len && copy < have);
            if (state.flags & 512 && state.wrap & 4) {
              state.check = crc32_1(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            if (len) {
              break inf_leave;
            }
          } else if (state.head) {
            state.head.name = null;
          }
          state.length = 0;
          state.mode = COMMENT;
        case COMMENT:
          if (state.flags & 4096) {
            if (have === 0) {
              break inf_leave;
            }
            copy = 0;
            do {
              len = input[next + copy++];
              if (state.head && len && state.length < 65536) {
                state.head.comment += String.fromCharCode(len);
              }
            } while (len && copy < have);
            if (state.flags & 512 && state.wrap & 4) {
              state.check = crc32_1(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            if (len) {
              break inf_leave;
            }
          } else if (state.head) {
            state.head.comment = null;
          }
          state.mode = HCRC;
        case HCRC:
          if (state.flags & 512) {
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (state.wrap & 4 && hold !== (state.check & 65535)) {
              strm.msg = "header crc mismatch";
              state.mode = BAD;
              break;
            }
            hold = 0;
            bits = 0;
          }
          if (state.head) {
            state.head.hcrc = state.flags >> 9 & 1;
            state.head.done = true;
          }
          strm.adler = state.check = 0;
          state.mode = TYPE;
          break;
        case DICTID:
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          strm.adler = state.check = zswap32(hold);
          hold = 0;
          bits = 0;
          state.mode = DICT;
        case DICT:
          if (state.havedict === 0) {
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            return Z_NEED_DICT$1;
          }
          strm.adler = state.check = 1;
          state.mode = TYPE;
        case TYPE:
          if (flush === Z_BLOCK || flush === Z_TREES) {
            break inf_leave;
          }
        case TYPEDO:
          if (state.last) {
            hold >>>= bits & 7;
            bits -= bits & 7;
            state.mode = CHECK;
            break;
          }
          while (bits < 3) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.last = hold & 1;
          hold >>>= 1;
          bits -= 1;
          switch (hold & 3) {
            case 0:
              state.mode = STORED;
              break;
            case 1:
              fixedtables(state);
              state.mode = LEN_;
              if (flush === Z_TREES) {
                hold >>>= 2;
                bits -= 2;
                break inf_leave;
              }
              break;
            case 2:
              state.mode = TABLE;
              break;
            case 3:
              strm.msg = "invalid block type";
              state.mode = BAD;
          }
          hold >>>= 2;
          bits -= 2;
          break;
        case STORED:
          hold >>>= bits & 7;
          bits -= bits & 7;
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
            strm.msg = "invalid stored block lengths";
            state.mode = BAD;
            break;
          }
          state.length = hold & 65535;
          hold = 0;
          bits = 0;
          state.mode = COPY_;
          if (flush === Z_TREES) {
            break inf_leave;
          }
        case COPY_:
          state.mode = COPY;
        case COPY:
          copy = state.length;
          if (copy) {
            if (copy > have) {
              copy = have;
            }
            if (copy > left) {
              copy = left;
            }
            if (copy === 0) {
              break inf_leave;
            }
            output.set(input.subarray(next, next + copy), put);
            have -= copy;
            next += copy;
            left -= copy;
            put += copy;
            state.length -= copy;
            break;
          }
          state.mode = TYPE;
          break;
        case TABLE:
          while (bits < 14) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.nlen = (hold & 31) + 257;
          hold >>>= 5;
          bits -= 5;
          state.ndist = (hold & 31) + 1;
          hold >>>= 5;
          bits -= 5;
          state.ncode = (hold & 15) + 4;
          hold >>>= 4;
          bits -= 4;
          if (state.nlen > 286 || state.ndist > 30) {
            strm.msg = "too many length or distance symbols";
            state.mode = BAD;
            break;
          }
          state.have = 0;
          state.mode = LENLENS;
        case LENLENS:
          while (state.have < state.ncode) {
            while (bits < 3) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.lens[order[state.have++]] = hold & 7;
            hold >>>= 3;
            bits -= 3;
          }
          while (state.have < 19) {
            state.lens[order[state.have++]] = 0;
          }
          state.lencode = state.lendyn;
          state.lenbits = 7;
          opts = { bits: state.lenbits };
          ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
          state.lenbits = opts.bits;
          if (ret) {
            strm.msg = "invalid code lengths set";
            state.mode = BAD;
            break;
          }
          state.have = 0;
          state.mode = CODELENS;
        case CODELENS:
          while (state.have < state.nlen + state.ndist) {
            for (;; ) {
              here = state.lencode[hold & (1 << state.lenbits) - 1];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (here_val < 16) {
              hold >>>= here_bits;
              bits -= here_bits;
              state.lens[state.have++] = here_val;
            } else {
              if (here_val === 16) {
                n = here_bits + 2;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                if (state.have === 0) {
                  strm.msg = "invalid bit length repeat";
                  state.mode = BAD;
                  break;
                }
                len = state.lens[state.have - 1];
                copy = 3 + (hold & 3);
                hold >>>= 2;
                bits -= 2;
              } else if (here_val === 17) {
                n = here_bits + 3;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                len = 0;
                copy = 3 + (hold & 7);
                hold >>>= 3;
                bits -= 3;
              } else {
                n = here_bits + 7;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                len = 0;
                copy = 11 + (hold & 127);
                hold >>>= 7;
                bits -= 7;
              }
              if (state.have + copy > state.nlen + state.ndist) {
                strm.msg = "invalid bit length repeat";
                state.mode = BAD;
                break;
              }
              while (copy--) {
                state.lens[state.have++] = len;
              }
            }
          }
          if (state.mode === BAD) {
            break;
          }
          if (state.lens[256] === 0) {
            strm.msg = "invalid code -- missing end-of-block";
            state.mode = BAD;
            break;
          }
          state.lenbits = 9;
          opts = { bits: state.lenbits };
          ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
          state.lenbits = opts.bits;
          if (ret) {
            strm.msg = "invalid literal/lengths set";
            state.mode = BAD;
            break;
          }
          state.distbits = 6;
          state.distcode = state.distdyn;
          opts = { bits: state.distbits };
          ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
          state.distbits = opts.bits;
          if (ret) {
            strm.msg = "invalid distances set";
            state.mode = BAD;
            break;
          }
          state.mode = LEN_;
          if (flush === Z_TREES) {
            break inf_leave;
          }
        case LEN_:
          state.mode = LEN;
        case LEN:
          if (have >= 6 && left >= 258) {
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            inffast(strm, _out);
            put = strm.next_out;
            output = strm.output;
            left = strm.avail_out;
            next = strm.next_in;
            input = strm.input;
            have = strm.avail_in;
            hold = state.hold;
            bits = state.bits;
            if (state.mode === TYPE) {
              state.back = -1;
            }
            break;
          }
          state.back = 0;
          for (;; ) {
            here = state.lencode[hold & (1 << state.lenbits) - 1];
            here_bits = here >>> 24;
            here_op = here >>> 16 & 255;
            here_val = here & 65535;
            if (here_bits <= bits) {
              break;
            }
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (here_op && (here_op & 240) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;
            for (;; ) {
              here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (last_bits + here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            hold >>>= last_bits;
            bits -= last_bits;
            state.back += last_bits;
          }
          hold >>>= here_bits;
          bits -= here_bits;
          state.back += here_bits;
          state.length = here_val;
          if (here_op === 0) {
            state.mode = LIT;
            break;
          }
          if (here_op & 32) {
            state.back = -1;
            state.mode = TYPE;
            break;
          }
          if (here_op & 64) {
            strm.msg = "invalid literal/length code";
            state.mode = BAD;
            break;
          }
          state.extra = here_op & 15;
          state.mode = LENEXT;
        case LENEXT:
          if (state.extra) {
            n = state.extra;
            while (bits < n) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.length += hold & (1 << state.extra) - 1;
            hold >>>= state.extra;
            bits -= state.extra;
            state.back += state.extra;
          }
          state.was = state.length;
          state.mode = DIST;
        case DIST:
          for (;; ) {
            here = state.distcode[hold & (1 << state.distbits) - 1];
            here_bits = here >>> 24;
            here_op = here >>> 16 & 255;
            here_val = here & 65535;
            if (here_bits <= bits) {
              break;
            }
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if ((here_op & 240) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;
            for (;; ) {
              here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (last_bits + here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            hold >>>= last_bits;
            bits -= last_bits;
            state.back += last_bits;
          }
          hold >>>= here_bits;
          bits -= here_bits;
          state.back += here_bits;
          if (here_op & 64) {
            strm.msg = "invalid distance code";
            state.mode = BAD;
            break;
          }
          state.offset = here_val;
          state.extra = here_op & 15;
          state.mode = DISTEXT;
        case DISTEXT:
          if (state.extra) {
            n = state.extra;
            while (bits < n) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.offset += hold & (1 << state.extra) - 1;
            hold >>>= state.extra;
            bits -= state.extra;
            state.back += state.extra;
          }
          if (state.offset > state.dmax) {
            strm.msg = "invalid distance too far back";
            state.mode = BAD;
            break;
          }
          state.mode = MATCH;
        case MATCH:
          if (left === 0) {
            break inf_leave;
          }
          copy = _out - left;
          if (state.offset > copy) {
            copy = state.offset - copy;
            if (copy > state.whave) {
              if (state.sane) {
                strm.msg = "invalid distance too far back";
                state.mode = BAD;
                break;
              }
            }
            if (copy > state.wnext) {
              copy -= state.wnext;
              from = state.wsize - copy;
            } else {
              from = state.wnext - copy;
            }
            if (copy > state.length) {
              copy = state.length;
            }
            from_source = state.window;
          } else {
            from_source = output;
            from = put - state.offset;
            copy = state.length;
          }
          if (copy > left) {
            copy = left;
          }
          left -= copy;
          state.length -= copy;
          do {
            output[put++] = from_source[from++];
          } while (--copy);
          if (state.length === 0) {
            state.mode = LEN;
          }
          break;
        case LIT:
          if (left === 0) {
            break inf_leave;
          }
          output[put++] = state.length;
          left--;
          state.mode = LEN;
          break;
        case CHECK:
          if (state.wrap) {
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold |= input[next++] << bits;
              bits += 8;
            }
            _out -= left;
            strm.total_out += _out;
            state.total += _out;
            if (state.wrap & 4 && _out) {
              strm.adler = state.check = state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out);
            }
            _out = left;
            if (state.wrap & 4 && (state.flags ? hold : zswap32(hold)) !== state.check) {
              strm.msg = "incorrect data check";
              state.mode = BAD;
              break;
            }
            hold = 0;
            bits = 0;
          }
          state.mode = LENGTH;
        case LENGTH:
          if (state.wrap && state.flags) {
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (state.wrap & 4 && hold !== (state.total & 4294967295)) {
              strm.msg = "incorrect length check";
              state.mode = BAD;
              break;
            }
            hold = 0;
            bits = 0;
          }
          state.mode = DONE;
        case DONE:
          ret = Z_STREAM_END$1;
          break inf_leave;
        case BAD:
          ret = Z_DATA_ERROR$1;
          break inf_leave;
        case MEM:
          return Z_MEM_ERROR$1;
        case SYNC:
        default:
          return Z_STREAM_ERROR$1;
      }
    }
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH$1)) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out))
      ;
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap & 4 && _out) {
    strm.adler = state.check = state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out);
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if ((_in === 0 && _out === 0 || flush === Z_FINISH$1) && ret === Z_OK$1) {
    ret = Z_BUF_ERROR$1;
  }
  return ret;
};
var inflateEnd = (strm) => {
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  let state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK$1;
};
var inflateGetHeader = (strm, head) => {
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  const state = strm.state;
  if ((state.wrap & 2) === 0) {
    return Z_STREAM_ERROR$1;
  }
  state.head = head;
  head.done = false;
  return Z_OK$1;
};
var inflateSetDictionary = (strm, dictionary) => {
  const dictLength = dictionary.length;
  let state;
  let dictid;
  let ret;
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR$1;
  }
  if (state.mode === DICT) {
    dictid = 1;
    dictid = adler32_1(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR$1;
    }
  }
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR$1;
  }
  state.havedict = 1;
  return Z_OK$1;
};
var inflateReset_1 = inflateReset;
var inflateReset2_1 = inflateReset2;
var inflateResetKeep_1 = inflateResetKeep;
var inflateInit_1 = inflateInit;
var inflateInit2_1 = inflateInit2;
var inflate_2$1 = inflate$2;
var inflateEnd_1 = inflateEnd;
var inflateGetHeader_1 = inflateGetHeader;
var inflateSetDictionary_1 = inflateSetDictionary;
var inflateInfo = "pako inflate (from Nodeca project)";
var inflate_1$2 = {
  inflateReset: inflateReset_1,
  inflateReset2: inflateReset2_1,
  inflateResetKeep: inflateResetKeep_1,
  inflateInit: inflateInit_1,
  inflateInit2: inflateInit2_1,
  inflate: inflate_2$1,
  inflateEnd: inflateEnd_1,
  inflateGetHeader: inflateGetHeader_1,
  inflateSetDictionary: inflateSetDictionary_1,
  inflateInfo
};
function GZheader() {
  this.text = 0;
  this.time = 0;
  this.xflags = 0;
  this.os = 0;
  this.extra = null;
  this.extra_len = 0;
  this.name = "";
  this.comment = "";
  this.hcrc = 0;
  this.done = false;
}
var gzheader = GZheader;
var toString = Object.prototype.toString;
var {
  Z_NO_FLUSH,
  Z_FINISH,
  Z_OK,
  Z_STREAM_END,
  Z_NEED_DICT,
  Z_STREAM_ERROR,
  Z_DATA_ERROR,
  Z_MEM_ERROR,
  Z_BUF_ERROR
} = constants$2;
var defaultOptions = {
  chunkSize: 1024 * 64,
  windowBits: 15,
  to: ""
};
function Inflate$1(options2) {
  this.options = common.assign({}, defaultOptions, options2 || {});
  const opt = this.options;
  if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) {
      opt.windowBits = -15;
    }
  }
  if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options2 && options2.windowBits)) {
    opt.windowBits += 32;
  }
  if (opt.windowBits > 15 && opt.windowBits < 48) {
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new zstream;
  this.strm.avail_out = 0;
  let status = inflate_1$2.inflateInit2(this.strm, opt.windowBits);
  if (status !== Z_OK) {
    throw new Error(messages[status]);
  }
  this.header = new gzheader;
  inflate_1$2.inflateGetHeader(this.strm, this.header);
  if (opt.dictionary) {
    if (typeof opt.dictionary === "string") {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) {
      status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== Z_OK) {
        throw new Error(messages[status]);
      }
    }
  }
}
Inflate$1.prototype.push = function(data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  const dictionary = this.options.dictionary;
  let status, _flush_mode, last_avail_out;
  if (this.ended)
    return false;
  if (flush_mode === ~~flush_mode)
    _flush_mode = flush_mode;
  else
    _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;
  if (toString.call(data) === "[object ArrayBuffer]") {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }
  strm.next_in = 0;
  strm.avail_in = strm.input.length;
  for (;; ) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = inflate_1$2.inflate(strm, _flush_mode);
    if (status === Z_NEED_DICT && dictionary) {
      status = inflate_1$2.inflateSetDictionary(strm, dictionary);
      if (status === Z_OK) {
        status = inflate_1$2.inflate(strm, _flush_mode);
      } else if (status === Z_DATA_ERROR) {
        status = Z_NEED_DICT;
      }
    }
    while (strm.avail_in > 0 && status === Z_STREAM_END && strm.state.wrap & 2 && strm.state.flags !== 0 && strm.input[strm.next_in] !== 0) {
      inflate_1$2.inflateReset(strm);
      status = inflate_1$2.inflate(strm, _flush_mode);
    }
    switch (status) {
      case Z_STREAM_ERROR:
      case Z_DATA_ERROR:
      case Z_NEED_DICT:
      case Z_MEM_ERROR:
        this.onEnd(status);
        this.ended = true;
        return false;
    }
    last_avail_out = strm.avail_out;
    if (strm.next_out) {
      if (strm.avail_out === 0 || status === Z_STREAM_END || _flush_mode > 0) {
        if (this.options.to === "string") {
          let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
          let tail = strm.next_out - next_out_utf8;
          let utf8str = strings.buf2string(strm.output, next_out_utf8);
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail)
            strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);
          this.onData(utf8str);
        } else {
          this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
          strm.avail_out = 0;
          strm.next_out = 0;
        }
      }
    }
    if ((status === Z_OK || status === Z_BUF_ERROR) && last_avail_out === 0)
      continue;
    if (status === Z_STREAM_END) {
      status = inflate_1$2.inflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return true;
    }
    if (strm.avail_in === 0) {
      if (_flush_mode === Z_FINISH) {
        status = inflate_1$2.inflateEnd(this.strm);
        this.onEnd(status === Z_OK ? Z_BUF_ERROR : status);
        this.ended = true;
        return false;
      }
      break;
    }
  }
  return true;
};
Inflate$1.prototype.onData = function(chunk) {
  this.chunks.push(chunk);
};
Inflate$1.prototype.onEnd = function(status) {
  if (status === Z_OK) {
    if (this.options.to === "string") {
      this.result = this.chunks.join("");
    } else {
      this.result = common.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};
function inflate$1(input, options2) {
  const inflator = new Inflate$1(options2);
  inflator.push(input, true);
  if (inflator.err)
    throw inflator.msg || messages[inflator.err];
  return inflator.result;
}
function inflateRaw$1(input, options2) {
  options2 = options2 || {};
  options2.raw = true;
  return inflate$1(input, options2);
}
var Inflate_1$1 = Inflate$1;
var inflate_2 = inflate$1;
var inflateRaw_1$1 = inflateRaw$1;
var ungzip$1 = inflate$1;
var constants3 = constants$2;
var inflate_1$1 = {
  Inflate: Inflate_1$1,
  inflate: inflate_2,
  inflateRaw: inflateRaw_1$1,
  ungzip: ungzip$1,
  constants: constants3
};
var { Deflate, deflate, deflateRaw, gzip } = deflate_1$1;
var { Inflate, inflate, inflateRaw, ungzip } = inflate_1$1;
var Deflate_1 = Deflate;
var deflate_1 = deflate;
var deflateRaw_1 = deflateRaw;
var gzip_1 = gzip;
var Inflate_1 = Inflate;
var inflate_1 = inflate;
var inflateRaw_1 = inflateRaw;
var ungzip_1 = ungzip;
var constants_1 = constants$2;
var pako = {
  Deflate: Deflate_1,
  deflate: deflate_1,
  deflateRaw: deflateRaw_1,
  gzip: gzip_1,
  Inflate: Inflate_1,
  inflate: inflate_1,
  inflateRaw: inflateRaw_1,
  ungzip: ungzip_1,
  constants: constants_1
};

// .cache/browser-demo/almost-src/shims/zlib.ts
var brotliModule = null;
var brotliLoadPromise = null;
async function loadBrotli() {
  if (brotliModule)
    return brotliModule;
  if (!brotliLoadPromise) {
    brotliLoadPromise = (async () => {
      try {
        const brotliWasmModule = await Promise.resolve().then(() => (init_index_web(), {}));
        brotliModule = await index_web_default;
        console.log("[zlib] brotli-wasm loaded successfully");
        return brotliModule;
      } catch (error) {
        console.error("[zlib] Failed to load brotli-wasm:", error);
        return null;
      }
    })();
  }
  return brotliLoadPromise;
}
function gzip2(buffer, callback) {
  try {
    const input = typeof buffer === "string" ? BufferPolyfill.from(buffer) : buffer;
    const result = pako.gzip(input);
    callback(null, BufferPolyfill.from(result));
  } catch (error) {
    callback(error, BufferPolyfill.alloc(0));
  }
}
function gunzip(buffer, callback) {
  try {
    const result = pako.ungzip(buffer);
    callback(null, BufferPolyfill.from(result));
  } catch (error) {
    callback(error, BufferPolyfill.alloc(0));
  }
}
function deflate2(buffer, callback) {
  try {
    const input = typeof buffer === "string" ? BufferPolyfill.from(buffer) : buffer;
    const result = pako.deflate(input);
    callback(null, BufferPolyfill.from(result));
  } catch (error) {
    callback(error, BufferPolyfill.alloc(0));
  }
}
function inflate2(buffer, callback) {
  try {
    const result = pako.inflate(buffer);
    callback(null, BufferPolyfill.from(result));
  } catch (error) {
    callback(error, BufferPolyfill.alloc(0));
  }
}
function deflateRaw2(buffer, callback) {
  try {
    const input = typeof buffer === "string" ? BufferPolyfill.from(buffer) : buffer;
    const result = pako.deflateRaw(input);
    callback(null, BufferPolyfill.from(result));
  } catch (error) {
    callback(error, BufferPolyfill.alloc(0));
  }
}
function inflateRaw2(buffer, callback) {
  try {
    const result = pako.inflateRaw(buffer);
    callback(null, BufferPolyfill.from(result));
  } catch (error) {
    callback(error, BufferPolyfill.alloc(0));
  }
}
function brotliCompress(buffer, options2, callback) {
  if (typeof options2 === "function") {
    callback = options2;
  }
  loadBrotli().then((brotli) => {
    if (!brotli) {
      callback(new Error("Brotli WASM failed to load"), BufferPolyfill.alloc(0));
      return;
    }
    try {
      const input = typeof buffer === "string" ? BufferPolyfill.from(buffer) : buffer;
      const result = brotli.compress(new Uint8Array(input));
      callback(null, BufferPolyfill.from(result));
    } catch (error) {
      callback(error, BufferPolyfill.alloc(0));
    }
  }).catch((error) => {
    callback(error, BufferPolyfill.alloc(0));
  });
}
function brotliDecompress(buffer, options2, callback) {
  if (typeof options2 === "function") {
    callback = options2;
  }
  loadBrotli().then((brotli) => {
    if (!brotli) {
      callback(new Error("Brotli WASM failed to load"), BufferPolyfill.alloc(0));
      return;
    }
    try {
      const result = brotli.decompress(new Uint8Array(buffer));
      callback(null, BufferPolyfill.from(result));
    } catch (error) {
      callback(error, BufferPolyfill.alloc(0));
    }
  }).catch((error) => {
    callback(error, BufferPolyfill.alloc(0));
  });
}
function brotliCompressSync(buffer, _options2) {
  if (!brotliModule) {
    throw new Error("Brotli WASM not loaded. Call brotliCompress first to initialize.");
  }
  const input = typeof buffer === "string" ? BufferPolyfill.from(buffer) : buffer;
  return BufferPolyfill.from(brotliModule.compress(new Uint8Array(input)));
}
function brotliDecompressSync(buffer, _options2) {
  if (!brotliModule) {
    throw new Error("Brotli WASM not loaded. Call brotliDecompress first to initialize.");
  }
  return BufferPolyfill.from(brotliModule.decompress(new Uint8Array(buffer)));
}
function gzipSync(buffer) {
  const input = typeof buffer === "string" ? BufferPolyfill.from(buffer) : buffer;
  return BufferPolyfill.from(pako.gzip(input));
}
function gunzipSync(buffer) {
  return BufferPolyfill.from(pako.ungzip(buffer));
}
function deflateSync(buffer) {
  const input = typeof buffer === "string" ? BufferPolyfill.from(buffer) : buffer;
  return BufferPolyfill.from(pako.deflate(input));
}
function inflateSync(buffer) {
  return BufferPolyfill.from(pako.inflate(buffer));
}
function deflateRawSync(buffer) {
  const input = typeof buffer === "string" ? BufferPolyfill.from(buffer) : buffer;
  return BufferPolyfill.from(pako.deflateRaw(input));
}
function inflateRawSync(buffer) {
  return BufferPolyfill.from(pako.inflateRaw(buffer));
}
var constants4 = {
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  Z_VERSION_ERROR: -6,
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  ZLIB_VERNUM: 4784,
  Z_MIN_WINDOWBITS: 8,
  Z_MAX_WINDOWBITS: 15,
  Z_DEFAULT_WINDOWBITS: 15,
  Z_MIN_CHUNK: 64,
  Z_MAX_CHUNK: Infinity,
  Z_DEFAULT_CHUNK: 16384,
  Z_MIN_MEMLEVEL: 1,
  Z_MAX_MEMLEVEL: 9,
  Z_DEFAULT_MEMLEVEL: 8,
  Z_MIN_LEVEL: -1,
  Z_MAX_LEVEL: 9,
  Z_DEFAULT_LEVEL: -1,
  BROTLI_DECODE: 0,
  BROTLI_ENCODE: 1,
  BROTLI_OPERATION_PROCESS: 0,
  BROTLI_OPERATION_FLUSH: 1,
  BROTLI_OPERATION_FINISH: 2,
  BROTLI_OPERATION_EMIT_METADATA: 3,
  BROTLI_PARAM_MODE: 0,
  BROTLI_MODE_GENERIC: 0,
  BROTLI_MODE_TEXT: 1,
  BROTLI_MODE_FONT: 2,
  BROTLI_PARAM_QUALITY: 1,
  BROTLI_MIN_QUALITY: 0,
  BROTLI_MAX_QUALITY: 11,
  BROTLI_DEFAULT_QUALITY: 11,
  BROTLI_PARAM_LGWIN: 2,
  BROTLI_MIN_WINDOW_BITS: 10,
  BROTLI_MAX_WINDOW_BITS: 24,
  BROTLI_DEFAULT_WINDOW: 22,
  BROTLI_PARAM_LGBLOCK: 3,
  BROTLI_MIN_INPUT_BLOCK_BITS: 16,
  BROTLI_MAX_INPUT_BLOCK_BITS: 24
};
var zlib_default = {
  gzip: gzip2,
  gunzip,
  deflate: deflate2,
  inflate: inflate2,
  deflateRaw: deflateRaw2,
  inflateRaw: inflateRaw2,
  gzipSync,
  gunzipSync,
  deflateSync,
  inflateSync,
  deflateRawSync,
  inflateRawSync,
  brotliCompress,
  brotliDecompress,
  brotliCompressSync,
  brotliDecompressSync,
  constants: constants4
};

// .cache/browser-demo/almost-src/shims/dns.ts
var exports_dns = {};
__export(exports_dns, {
  ADDRCONFIG: () => ADDRCONFIG,
  ALL: () => ALL,
  V4MAPPED: () => V4MAPPED,
  default: () => dns_default,
  getDefaultResultOrder: () => getDefaultResultOrder,
  getServers: () => getServers,
  lookup: () => lookup,
  promises: () => promises2,
  resolve: () => resolve3,
  resolve4: () => resolve4,
  resolve6: () => resolve6,
  reverse: () => reverse,
  setDefaultResultOrder: () => setDefaultResultOrder,
  setServers: () => setServers
});
function lookup(hostname, optionsOrCallback, callback) {
  const cb = typeof optionsOrCallback === "function" ? optionsOrCallback : callback;
  const options2 = typeof optionsOrCallback === "object" ? optionsOrCallback : {};
  setImmediate(() => {
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      if (options2.all) {
        cb(null, [{ address: "127.0.0.1", family: 4 }]);
      } else {
        cb(null, "127.0.0.1", 4);
      }
    } else {
      if (options2.all) {
        cb(null, [{ address: "0.0.0.0", family: 4 }]);
      } else {
        cb(null, "0.0.0.0", 4);
      }
    }
  });
}
function resolve3(hostname, callback) {
  setImmediate(() => {
    callback(null, ["0.0.0.0"]);
  });
}
function resolve4(hostname, callback) {
  resolve3(hostname, callback);
}
function resolve6(hostname, callback) {
  setImmediate(() => {
    callback(null, ["::1"]);
  });
}
function reverse(ip, callback) {
  setImmediate(() => {
    callback(null, ["localhost"]);
  });
}
function setServers(_servers) {}
function getServers() {
  return [];
}
function setDefaultResultOrder(_order) {}
function getDefaultResultOrder() {
  return "verbatim";
}
var promises2 = {
  lookup: (hostname, options2) => {
    return new Promise((resolve, reject) => {
      if (options2?.all) {
        lookup(hostname, options2, (err, addresses) => {
          if (err)
            reject(err);
          else
            resolve(addresses || []);
        });
        return;
      }
      lookup(hostname, options2 || {}, (err, address, family) => {
        if (err)
          reject(err);
        else
          resolve({ address, family });
      });
    });
  },
  resolve: (hostname) => {
    return new Promise((promiseResolve, promiseReject) => {
      resolve3(hostname, (err, addresses) => {
        if (err)
          promiseReject(err);
        else
          promiseResolve(addresses || []);
      });
    });
  },
  resolve4: (hostname) => promises2.resolve(hostname),
  resolve6: (hostname) => {
    return new Promise((resolve) => {
      resolve(["::1"]);
    });
  },
  reverse: (ip) => {
    return new Promise((resolve) => {
      resolve(["localhost"]);
    });
  },
  setServers: (_servers) => {},
  getServers: () => []
};
var ADDRCONFIG = 0;
var V4MAPPED = 0;
var ALL = 0;
var dns_default = {
  lookup,
  resolve: resolve3,
  resolve4,
  resolve6,
  reverse,
  setServers,
  getServers,
  setDefaultResultOrder,
  getDefaultResultOrder,
  promises: promises2,
  ADDRCONFIG,
  V4MAPPED,
  ALL
};

// .cache/browser-demo/almost-src/shims/buffer.ts
var Buffer2 = BufferPolyfill;
var SlowBuffer = BufferPolyfill;
var kMaxLength = 2147483647;
var INSPECT_MAX_BYTES = 50;
var constants5 = {
  MAX_LENGTH: kMaxLength,
  MAX_STRING_LENGTH: 536870888
};
function transcode(source, _fromEnc, _toEnc) {
  return Buffer2.from(source);
}
function resolveObjectURL(id) {
  return;
}
function atob2(data) {
  return globalThis.atob(data);
}
function btoa2(data) {
  return globalThis.btoa(data);
}
var bufferModule = {
  Buffer: Buffer2,
  SlowBuffer,
  kMaxLength,
  INSPECT_MAX_BYTES,
  constants: constants5,
  transcode,
  resolveObjectURL,
  atob: atob2,
  btoa: btoa2
};
Object.defineProperty(bufferModule, "hasOwnProperty", {
  value: Object.prototype.hasOwnProperty,
  enumerable: false,
  configurable: true,
  writable: true
});
var buffer_default = bufferModule;

// .cache/browser-demo/almost-src/shims/child_process-browser.ts
var exports_child_process_browser = {};
__export(exports_child_process_browser, {
  ChildProcess: () => ChildProcess,
  default: () => child_process_browser_default,
  exec: () => exec,
  execFile: () => execFile,
  execSync: () => execSync,
  fork: () => fork,
  initChildProcess: () => initChildProcess,
  spawn: () => spawn,
  spawnSync: () => spawnSync
});
function initChildProcess() {}
function exec(command, optionsOrCallback, callback) {
  let cb;
  if (typeof optionsOrCallback === "function") {
    cb = optionsOrCallback;
  } else {
    cb = callback;
  }
  const child = new ChildProcess;
  setTimeout(() => {
    const error = new Error(`exec is not supported in browser environment: ${command}`);
    child.emit("error", error);
    if (cb)
      cb(error, "", "");
  }, 0);
  return child;
}
function execSync(command, options2) {
  throw new Error(`execSync is not supported in browser environment: ${command}`);
}
function spawn(command, args, options2) {
  const child = new ChildProcess;
  setTimeout(() => {
    const error = new Error(`spawn is not supported in browser environment: ${command}`);
    child.emit("error", error);
  }, 0);
  return child;
}
function spawnSync(command, args, options2) {
  throw new Error(`spawnSync is not supported in browser environment: ${command}`);
}
function execFile(file, args, options2, callback) {
  let cb;
  if (typeof args === "function") {
    cb = args;
  } else if (typeof options2 === "function") {
    cb = options2;
  } else {
    cb = callback;
  }
  const child = new ChildProcess;
  setTimeout(() => {
    const error = new Error(`execFile is not supported in browser environment: ${file}`);
    child.emit("error", error);
    if (cb)
      cb(error, "", "");
  }, 0);
  return child;
}
function fork() {
  throw new Error("fork is not supported in browser environment");
}

class ChildProcess extends EventEmitter {
  pid;
  connected = false;
  killed = false;
  exitCode = null;
  signalCode = null;
  spawnargs = [];
  spawnfile = "";
  stdin;
  stdout;
  stderr;
  constructor() {
    super();
    this.pid = Math.floor(Math.random() * 1e4) + 1000;
    this.stdin = new Writable;
    this.stdout = new Readable;
    this.stderr = new Readable;
  }
  kill(signal) {
    this.killed = true;
    this.emit("exit", null, signal || "SIGTERM");
    return true;
  }
  disconnect() {
    this.connected = false;
  }
  send(message, callback) {
    if (callback)
      callback(new Error("IPC not supported"));
    return false;
  }
  ref() {
    return this;
  }
  unref() {
    return this;
  }
}
var child_process_browser_default = {
  exec,
  execSync,
  execFile,
  spawn,
  spawnSync,
  fork,
  ChildProcess,
  initChildProcess
};

// .cache/browser-demo/almost-src/shims/chokidar.ts
var exports_chokidar = {};
__export(exports_chokidar, {
  FSWatcher: () => FSWatcher,
  default: () => chokidar_default,
  setVFS: () => setVFS,
  watch: () => watch
});
var globalVFS = null;
function setVFS(vfs2) {
  globalVFS = vfs2;
}

class FSWatcher extends EventEmitter {
  vfs;
  watched = new Map;
  options;
  closed = false;
  ready = false;
  _eventCounts;
  constructor(options2 = {}) {
    super();
    if (!globalVFS) {
      throw new Error("chokidar: VirtualFS not initialized. Call setVFS first.");
    }
    this.vfs = globalVFS;
    this.options = options2;
  }
  shouldIgnore(path) {
    const { ignored } = this.options;
    if (!ignored)
      return false;
    const ignoreList = Array.isArray(ignored) ? ignored : [ignored];
    for (const pattern of ignoreList) {
      if (typeof pattern === "string") {
        if (path === pattern || path.startsWith(pattern + "/"))
          return true;
      } else if (pattern instanceof RegExp) {
        if (pattern.test(path))
          return true;
      } else if (typeof pattern === "function") {
        if (pattern(path))
          return true;
      }
    }
    return false;
  }
  normalizePath(path) {
    if (this.options.cwd && !path.startsWith("/")) {
      path = this.options.cwd + "/" + path;
    }
    if (!path.startsWith("/")) {
      path = "/" + path;
    }
    return path;
  }
  add(paths) {
    if (this.closed)
      return this;
    const pathArray = Array.isArray(paths) ? paths : [paths];
    const pendingEmits = [];
    console.log("[chokidar] add:", pathArray);
    for (const p of pathArray) {
      const normalized = this.normalizePath(p);
      if (this.shouldIgnore(normalized))
        continue;
      if (this.watched.has(normalized))
        continue;
      try {
        if (!this.vfs.existsSync(normalized)) {
          const parentPath = normalized.substring(0, normalized.lastIndexOf("/")) || "/";
          if (this.vfs.existsSync(parentPath)) {
            this.watchPath(parentPath, normalized);
          }
          continue;
        }
        const stats = this.vfs.statSync(normalized);
        if (!this.options.ignoreInitial) {
          if (stats.isDirectory()) {
            this.collectDirContents(normalized, pendingEmits);
          } else {
            pendingEmits.push(() => this.emit("add", normalized, stats));
          }
        }
        this.watchPath(normalized);
        if (stats.isDirectory()) {
          this.watchDirRecursive(normalized);
        }
      } catch (err) {
        this.emit("error", err);
      }
    }
    if (!this.ready) {
      this.ready = true;
      setTimeout(() => {
        for (const emitFn of pendingEmits) {
          emitFn();
        }
        this.emit("ready");
      }, 0);
    }
    return this;
  }
  collectDirContents(dirPath, pendingEmits) {
    try {
      const entries = this.vfs.readdirSync(dirPath);
      for (const entry of entries) {
        const fullPath = dirPath === "/" ? "/" + entry : dirPath + "/" + entry;
        if (this.shouldIgnore(fullPath))
          continue;
        const stats = this.vfs.statSync(fullPath);
        if (stats.isDirectory()) {
          pendingEmits.push(() => this.emit("addDir", fullPath, stats));
          this.collectDirContents(fullPath, pendingEmits);
        } else {
          pendingEmits.push(() => this.emit("add", fullPath, stats));
        }
      }
    } catch {}
  }
  watchPath(path, watchFor) {
    if (this.watched.has(path))
      return;
    const watcher = this.vfs.watch(path, { recursive: true }, (eventType, filename2) => {
      if (this.closed)
        return;
      let fullPath;
      if (filename2) {
        fullPath = path === "/" ? "/" + filename2 : path + "/" + filename2;
      } else {
        fullPath = path;
      }
      const eventKey = `${eventType}:${fullPath}`;
      if (!this._eventCounts)
        this._eventCounts = new Map;
      const count = (this._eventCounts.get(eventKey) || 0) + 1;
      this._eventCounts.set(eventKey, count);
      if (count === 5) {
        console.warn(`[chokidar] Repeated event: ${eventType} on ${fullPath} (${count}+ times)`);
      }
      console.log("[chokidar] event:", eventType, fullPath);
      if (watchFor && fullPath !== watchFor && !fullPath.startsWith(watchFor + "/")) {
        return;
      }
      if (this.shouldIgnore(fullPath)) {
        console.log("[chokidar] ignored:", fullPath);
        return;
      }
      if (eventType === "rename") {
        if (this.vfs.existsSync(fullPath)) {
          try {
            const stats = this.vfs.statSync(fullPath);
            if (stats.isDirectory()) {
              console.log("[chokidar] emit addDir:", fullPath);
              this.emit("addDir", fullPath, stats);
            } else {
              console.log("[chokidar] emit add:", fullPath);
              this.emit("add", fullPath, stats);
            }
          } catch {}
        } else {
          console.log("[chokidar] emit unlink:", fullPath);
          this.emit("unlink", fullPath);
        }
      } else if (eventType === "change") {
        try {
          const stats = this.vfs.statSync(fullPath);
          console.log("[chokidar] emit change:", fullPath);
          this.emit("change", fullPath, stats);
        } catch {
          this.emit("unlink", fullPath);
        }
      }
    });
    this.watched.set(path, watcher);
  }
  watchDirRecursive(dirPath, depth = 0) {
    if (this.options.depth !== undefined && depth > this.options.depth)
      return;
    try {
      const entries = this.vfs.readdirSync(dirPath);
      for (const entry of entries) {
        const fullPath = dirPath === "/" ? "/" + entry : dirPath + "/" + entry;
        if (this.shouldIgnore(fullPath))
          continue;
        try {
          const stats = this.vfs.statSync(fullPath);
          if (stats.isDirectory()) {
            this.watchPath(fullPath);
            this.watchDirRecursive(fullPath, depth + 1);
          }
        } catch {}
      }
    } catch {}
  }
  unwatch(paths) {
    const pathArray = Array.isArray(paths) ? paths : [paths];
    for (const p of pathArray) {
      const normalized = this.normalizePath(p);
      const watcher = this.watched.get(normalized);
      if (watcher) {
        watcher.close();
        this.watched.delete(normalized);
      }
    }
    return this;
  }
  close() {
    this.closed = true;
    for (const watcher of this.watched.values()) {
      watcher.close();
    }
    this.watched.clear();
    this.emit("close");
    return Promise.resolve();
  }
  getWatched() {
    const result = {};
    for (const path of this.watched.keys()) {
      const dir = path.substring(0, path.lastIndexOf("/")) || "/";
      const basename = path.substring(path.lastIndexOf("/") + 1);
      if (!result[dir]) {
        result[dir] = [];
      }
      result[dir].push(basename);
    }
    return result;
  }
}
function watch(paths, options2) {
  const watcher = new FSWatcher(options2);
  watcher.add(paths);
  return watcher;
}
var chokidar_default = { watch, FSWatcher, setVFS };

// .cache/browser-demo/almost-src/shims/ws.ts
var exports_ws = {};
__export(exports_ws, {
  Server: () => Server3,
  WebSocket: () => WebSocket,
  WebSocketServer: () => WebSocketServer,
  createWebSocketStream: () => createWebSocketStream,
  default: () => ws_default
});
var CloseEventPolyfill = typeof CloseEvent !== "undefined" ? CloseEvent : class CloseEvent2 extends Event {
  code;
  reason;
  wasClean;
  constructor(type, init) {
    super(type);
    this.code = init?.code ?? 1000;
    this.reason = init?.reason ?? "";
    this.wasClean = init?.wasClean ?? true;
  }
};
var MessageEventPolyfill = typeof MessageEvent !== "undefined" ? MessageEvent : class MessageEvent2 extends Event {
  data;
  constructor(type, init) {
    super(type);
    this.data = init?.data;
  }
};
var messageChannel = null;
try {
  messageChannel = new BroadcastChannel("vite-ws-channel");
} catch {}
var servers = new Map;
var clientIdCounter = 0;

class WebSocket extends EventEmitter {
  static CONNECTING = 0;
  static OPEN = 1;
  static CLOSING = 2;
  static CLOSED = 3;
  CONNECTING = WebSocket.CONNECTING;
  OPEN = WebSocket.OPEN;
  CLOSING = WebSocket.CLOSING;
  CLOSED = WebSocket.CLOSED;
  readyState = WebSocket.CONNECTING;
  url;
  protocol = "";
  extensions = "";
  bufferedAmount = 0;
  binaryType = "blob";
  _id;
  _server = null;
  _nativeWs = null;
  onopen = null;
  onclose = null;
  onerror = null;
  onmessage = null;
  constructor(url, protocols) {
    super();
    this.url = url;
    this._id = `client-${++clientIdCounter}`;
    if (protocols) {
      this.protocol = Array.isArray(protocols) ? protocols[0] : protocols;
    }
    setTimeout(() => this._connect(), 0);
  }
  _connect() {
    if (this.url.startsWith("internal://")) {
      this.readyState = WebSocket.OPEN;
      this.emit("open");
      if (this.onopen)
        this.onopen(new Event("open"));
      return;
    }
    if (this.url.startsWith("ws://") || this.url.startsWith("wss://")) {
      this._connectNative();
      return;
    }
    if (!messageChannel) {
      setTimeout(() => {
        this.readyState = WebSocket.OPEN;
        this.emit("open");
        if (this.onopen)
          this.onopen(new Event("open"));
      }, 0);
      return;
    }
    messageChannel.postMessage({
      type: "connect",
      clientId: this._id,
      url: this.url
    });
    const channel = messageChannel;
    const handler = (event) => {
      const data = event.data;
      if (data.targetClient !== this._id)
        return;
      switch (data.type) {
        case "connected":
          this.readyState = WebSocket.OPEN;
          this.emit("open");
          if (this.onopen)
            this.onopen(new Event("open"));
          break;
        case "message":
          const msgEvent = new MessageEventPolyfill("message", { data: data.payload });
          this.emit("message", msgEvent);
          if (this.onmessage)
            this.onmessage(msgEvent);
          break;
        case "close":
          this.readyState = WebSocket.CLOSED;
          const closeEvent = new CloseEventPolyfill("close", {
            code: data.code || 1000,
            reason: data.reason || "",
            wasClean: true
          });
          this.emit("close", closeEvent);
          if (this.onclose)
            this.onclose(closeEvent);
          channel.removeEventListener("message", handler);
          break;
        case "error":
          const errorEvent = new Event("error");
          this.emit("error", errorEvent);
          if (this.onerror)
            this.onerror(errorEvent);
          break;
      }
    };
    channel.addEventListener("message", handler);
    setTimeout(() => {
      if (this.readyState === WebSocket.CONNECTING) {
        this.readyState = WebSocket.OPEN;
        this.emit("open");
        if (this.onopen)
          this.onopen(new Event("open"));
      }
    }, 100);
  }
  _connectNative() {
    const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
    const NativeWS = isBrowser && typeof globalThis.WebSocket === "function" && globalThis.WebSocket !== WebSocket ? globalThis.WebSocket : null;
    if (!NativeWS) {
      setTimeout(() => {
        this.readyState = WebSocket.OPEN;
        this.emit("open");
        if (this.onopen)
          this.onopen(new Event("open"));
      }, 0);
      return;
    }
    try {
      this._nativeWs = new NativeWS(this.url);
      this._nativeWs.binaryType = this.binaryType === "arraybuffer" ? "arraybuffer" : "blob";
    } catch {
      this.readyState = WebSocket.CLOSED;
      const errorEvent = new Event("error");
      this.emit("error", errorEvent);
      if (this.onerror)
        this.onerror(errorEvent);
      return;
    }
    this._nativeWs.onopen = () => {
      this.readyState = WebSocket.OPEN;
      this.emit("open");
      if (this.onopen)
        this.onopen(new Event("open"));
    };
    this._nativeWs.onmessage = (event) => {
      const msgEvent = new MessageEventPolyfill("message", { data: event.data });
      this.emit("message", msgEvent);
      if (this.onmessage)
        this.onmessage(msgEvent);
    };
    this._nativeWs.onclose = (event) => {
      this.readyState = WebSocket.CLOSED;
      this._nativeWs = null;
      const closeEvent = new CloseEventPolyfill("close", {
        code: event.code,
        reason: event.reason,
        wasClean: event.wasClean
      });
      this.emit("close", closeEvent);
      if (this.onclose)
        this.onclose(closeEvent);
    };
    this._nativeWs.onerror = () => {
      const errorEvent = new Event("error");
      this.emit("error", errorEvent);
      if (this.onerror)
        this.onerror(errorEvent);
    };
  }
  send(data) {
    if (this.readyState !== WebSocket.OPEN) {
      throw new Error("WebSocket is not open");
    }
    if (this._nativeWs) {
      this._nativeWs.send(data);
      return;
    }
    if (this._server) {
      this._server._handleClientMessage(this, data);
      return;
    }
    if (messageChannel) {
      messageChannel.postMessage({
        type: "message",
        clientId: this._id,
        url: this.url,
        payload: data
      });
    }
  }
  close(code2, reason) {
    if (this.readyState === WebSocket.CLOSED || this.readyState === WebSocket.CLOSING) {
      return;
    }
    this.readyState = WebSocket.CLOSING;
    if (this._nativeWs) {
      this._nativeWs.close(code2, reason);
      return;
    }
    if (messageChannel) {
      messageChannel.postMessage({
        type: "disconnect",
        clientId: this._id,
        url: this.url,
        code: code2,
        reason
      });
    }
    setTimeout(() => {
      this.readyState = WebSocket.CLOSED;
      const closeEvent = new CloseEventPolyfill("close", {
        code: code2 || 1000,
        reason: reason || "",
        wasClean: true
      });
      this.emit("close", closeEvent);
      if (this.onclose)
        this.onclose(closeEvent);
    }, 0);
  }
  ping() {}
  pong() {}
  terminate() {
    if (this._nativeWs) {
      this._nativeWs.close();
      this._nativeWs = null;
    }
    this.readyState = WebSocket.CLOSED;
    const closeEvent = new CloseEventPolyfill("close", {
      code: 1006,
      reason: "Connection terminated",
      wasClean: false
    });
    this.emit("close", closeEvent);
    if (this.onclose)
      this.onclose(closeEvent);
  }
  _setServer(server) {
    this._server = server;
  }
  _receiveMessage(data) {
    const msgEvent = new MessageEventPolyfill("message", { data });
    this.emit("message", msgEvent);
    if (this.onmessage)
      this.onmessage(msgEvent);
  }
}

class WebSocketServer extends EventEmitter {
  clients = new Set;
  options;
  _path;
  _channelHandler = null;
  constructor(options2 = {}) {
    super();
    this.options = options2;
    this._path = options2.path || "/";
    if (!options2.noServer) {
      this._setupListener();
    }
    servers.set(this._path, this);
  }
  _setupListener() {
    if (!messageChannel)
      return;
    const channel = messageChannel;
    this._channelHandler = (event) => {
      const data = event.data;
      if (data.type === "connect") {
        const ws = new WebSocket("internal://" + this._path);
        ws._setServer(this);
        ws._clientId = data.clientId;
        this.clients.add(ws);
        channel.postMessage({
          type: "connected",
          targetClient: data.clientId
        });
        this.emit("connection", ws, { url: data.url });
      }
      if (data.type === "message") {
        for (const client of this.clients) {
          if (client._clientId === data.clientId) {
            client._receiveMessage(data.payload);
            break;
          }
        }
      }
      if (data.type === "disconnect") {
        for (const client of this.clients) {
          if (client._clientId === data.clientId) {
            client.close(data.code, data.reason);
            this.clients.delete(client);
            break;
          }
        }
      }
    };
    channel.addEventListener("message", this._channelHandler);
  }
  _handleClientMessage(client, data) {
    const msgEvent = new MessageEventPolyfill("message", { data });
    client.emit("message", msgEvent);
  }
  handleUpgrade(request, socket, head, callback) {
    const ws = new WebSocket("internal://" + this._path);
    ws._setServer(this);
    if (this.options.clientTracking !== false) {
      this.clients.add(ws);
    }
    setTimeout(() => {
      callback(ws, request);
      this.emit("connection", ws, request);
    }, 0);
  }
  close(callback) {
    for (const client of this.clients) {
      client.close(1001, "Server shutting down");
    }
    this.clients.clear();
    servers.delete(this._path);
    if (this._channelHandler && messageChannel) {
      messageChannel.removeEventListener("message", this._channelHandler);
      this._channelHandler = null;
    }
    this.emit("close");
    if (callback) {
      setTimeout(callback, 0);
    }
  }
  address() {
    return {
      port: this.options.port || 0,
      family: "IPv4",
      address: this.options.host || "0.0.0.0"
    };
  }
}
var ws_default = WebSocket;
var Server3 = WebSocketServer;
var createWebSocketStream = () => {
  throw new Error("createWebSocketStream is not supported in browser");
};

// .cache/browser-demo/almost-src/shims/fsevents.ts
var exports_fsevents = {};
__export(exports_fsevents, {
  constants: () => constants6,
  default: () => fsevents_default,
  getInfo: () => getInfo,
  watch: () => watch2
});
var constants6 = {
  kFSEventStreamEventFlagNone: 0,
  kFSEventStreamEventFlagMustScanSubDirs: 1,
  kFSEventStreamEventFlagUserDropped: 2,
  kFSEventStreamEventFlagKernelDropped: 4,
  kFSEventStreamEventFlagEventIdsWrapped: 8,
  kFSEventStreamEventFlagHistoryDone: 16,
  kFSEventStreamEventFlagRootChanged: 32,
  kFSEventStreamEventFlagMount: 64,
  kFSEventStreamEventFlagUnmount: 128,
  kFSEventStreamEventFlagItemCreated: 256,
  kFSEventStreamEventFlagItemRemoved: 512,
  kFSEventStreamEventFlagItemInodeMetaMod: 1024,
  kFSEventStreamEventFlagItemRenamed: 2048,
  kFSEventStreamEventFlagItemModified: 4096,
  kFSEventStreamEventFlagItemFinderInfoMod: 8192,
  kFSEventStreamEventFlagItemChangeOwner: 16384,
  kFSEventStreamEventFlagItemXattrMod: 32768,
  kFSEventStreamEventFlagItemIsFile: 65536,
  kFSEventStreamEventFlagItemIsDir: 131072,
  kFSEventStreamEventFlagItemIsSymlink: 262144
};
function watch2(path, handler) {
  return () => Promise.resolve();
}
function getInfo(path, flags) {
  return {
    event: "unknown",
    path,
    type: "file",
    changes: { inode: false, finder: false, access: false, xattrs: false },
    flags
  };
}
var fsevents_default = {
  watch: watch2,
  getInfo,
  constants: constants6
};

// .cache/browser-demo/almost-src/shims/readdirp.ts
var exports_readdirp = {};
__export(exports_readdirp, {
  ReaddirpStream: () => ReaddirpStream,
  default: () => readdirp_default,
  readdirp: () => readdirp,
  readdirpPromise: () => readdirpPromise,
  setVFS: () => setVFS2
});
var globalVFS2 = null;
function setVFS2(vfs2) {
  globalVFS2 = vfs2;
}

class ReaddirpStream {
  options;
  root;
  entries = [];
  index = 0;
  collected = false;
  constructor(root, options2 = {}) {
    this.root = root;
    this.options = options2;
  }
  matchFilter(entry, filter) {
    if (!filter)
      return true;
    if (typeof filter === "function") {
      return filter(entry);
    }
    const patterns = Array.isArray(filter) ? filter : [filter];
    for (const pattern of patterns) {
      if (pattern.startsWith("!")) {
        const posPattern = pattern.slice(1);
        if (this.matchGlob(entry.basename, posPattern)) {
          return false;
        }
      } else if (this.matchGlob(entry.basename, pattern)) {
        return true;
      }
    }
    return patterns.length === 0 || patterns.every((p) => p.startsWith("!"));
  }
  matchGlob(name, pattern) {
    if (pattern === "*")
      return true;
    if (pattern.startsWith("*.")) {
      const ext = pattern.slice(1);
      return name.endsWith(ext);
    }
    if (pattern.endsWith("*")) {
      const prefix = pattern.slice(0, -1);
      return name.startsWith(prefix);
    }
    return name === pattern;
  }
  collect(dir, depth, relativePath = "") {
    if (!globalVFS2)
      return;
    if (this.options.depth !== undefined && depth > this.options.depth)
      return;
    try {
      const entries = globalVFS2.readdirSync(dir);
      for (const name of entries) {
        const fullPath = dir === "/" ? "/" + name : dir + "/" + name;
        const relPath = relativePath ? relativePath + "/" + name : name;
        try {
          const stats = globalVFS2.statSync(fullPath);
          const isDir = stats.isDirectory();
          const entry = {
            path: relPath,
            fullPath,
            basename: name,
            stats: this.options.alwaysStat ? stats : undefined,
            dirent: {
              isFile: () => !isDir,
              isDirectory: () => isDir,
              name
            }
          };
          const type = this.options.type || "files";
          if (isDir) {
            if (!this.matchFilter(entry, this.options.directoryFilter)) {
              continue;
            }
            if (type === "directories" || type === "files_directories" || type === "all") {
              this.entries.push(entry);
            }
            this.collect(fullPath, depth + 1, relPath);
          } else {
            if (type === "files" || type === "files_directories" || type === "all") {
              if (this.matchFilter(entry, this.options.fileFilter)) {
                this.entries.push(entry);
              }
            }
          }
        } catch {}
      }
    } catch {}
  }
  async* [Symbol.asyncIterator]() {
    if (!this.collected) {
      this.collect(this.root, 0);
      this.collected = true;
    }
    for (const entry of this.entries) {
      yield entry;
    }
  }
  async toArray() {
    if (!this.collected) {
      this.collect(this.root, 0);
      this.collected = true;
    }
    return [...this.entries];
  }
  on(event, callback) {
    if (event === "data") {
      setTimeout(async () => {
        if (!this.collected) {
          this.collect(this.root, 0);
          this.collected = true;
        }
        for (const entry of this.entries) {
          callback(entry);
        }
        this.emit("end");
      }, 0);
    }
    return this;
  }
  listeners = new Map;
  emit(event, ...args) {
    const handlers = this.listeners.get(event);
    if (handlers) {
      for (const handler of handlers) {
        handler(...args);
      }
    }
  }
  once(event, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(event, wrapper);
    };
    return this.on(event, wrapper);
  }
  off(event, callback) {
    const handlers = this.listeners.get(event);
    if (handlers) {
      const index = handlers.indexOf(callback);
      if (index !== -1) {
        handlers.splice(index, 1);
      }
    }
    return this;
  }
}
function readdirp(root, options2) {
  return new ReaddirpStream(root, options2);
}
async function readdirpPromise(root, options2) {
  const stream = new ReaddirpStream(root, options2);
  return stream.toArray();
}
var readdirp_default = readdirp;

// .cache/browser-demo/almost-src/shims/module.ts
var exports_module = {};
__export(exports_module, {
  Module: () => Module,
  _cache: () => _cache,
  _extensions: () => _extensions,
  _pathCache: () => _pathCache,
  builtinModules: () => builtinModules,
  createRequire: () => createRequire,
  default: () => module_default,
  isBuiltin: () => isBuiltin,
  syncBuiltinESMExports: () => syncBuiltinESMExports
});
function createRequire(filename2) {
  return function require2(id) {
    throw new Error(`Cannot find module '${id}' from '${filename2}'`);
  };
}
var builtinModules = [
  "assert",
  "buffer",
  "child_process",
  "cluster",
  "console",
  "constants",
  "crypto",
  "dgram",
  "dns",
  "domain",
  "events",
  "fs",
  "http",
  "https",
  "module",
  "net",
  "os",
  "path",
  "perf_hooks",
  "process",
  "punycode",
  "querystring",
  "readline",
  "repl",
  "stream",
  "string_decoder",
  "sys",
  "timers",
  "tls",
  "tty",
  "url",
  "util",
  "v8",
  "vm",
  "worker_threads",
  "zlib"
];
function isBuiltin(moduleName) {
  const name = moduleName.startsWith("node:") ? moduleName.slice(5) : moduleName;
  return builtinModules.includes(name);
}
var _cache = {};
var _extensions = {
  ".js": () => {},
  ".json": () => {},
  ".node": () => {}
};
var _pathCache = {};
function syncBuiltinESMExports() {}
var Module = {
  createRequire,
  builtinModules,
  isBuiltin,
  _cache,
  _extensions,
  _pathCache,
  syncBuiltinESMExports
};
var module_default = Module;

// .cache/browser-demo/almost-src/shims/perf_hooks.ts
var exports_perf_hooks = {};
__export(exports_perf_hooks, {
  Histogram: () => Histogram,
  PerformanceObserver: () => PerformanceObserver,
  createHistogram: () => createHistogram,
  default: () => perf_hooks_default,
  monitorEventLoopDelay: () => monitorEventLoopDelay,
  performance: () => performance2
});
var performance2 = globalThis.performance || {
  now: () => Date.now(),
  timeOrigin: Date.now(),
  mark: () => {},
  measure: () => {},
  getEntries: () => [],
  getEntriesByName: () => [],
  getEntriesByType: () => [],
  clearMarks: () => {},
  clearMeasures: () => {},
  clearResourceTimings: () => {}
};

class PerformanceObserver {
  callback;
  entryTypes = [];
  constructor(callback) {
    this.callback = callback;
  }
  observe(options2) {
    this.entryTypes = options2.entryTypes || (options2.type ? [options2.type] : []);
  }
  disconnect() {
    this.entryTypes = [];
  }
  takeRecords() {
    return [];
  }
  static supportedEntryTypes = ["mark", "measure", "resource", "navigation"];
}

class Histogram {
  min = 0;
  max = 0;
  mean = 0;
  stddev = 0;
  percentiles = new Map;
  exceeds = 0;
  reset() {
    this.min = 0;
    this.max = 0;
    this.mean = 0;
    this.stddev = 0;
    this.percentiles.clear();
    this.exceeds = 0;
  }
  percentile(percentile) {
    return this.percentiles.get(percentile) || 0;
  }
}
function createHistogram() {
  return new Histogram;
}
function monitorEventLoopDelay(options2) {
  const histogram = new Histogram;
  return histogram;
}
var perf_hooks_default = {
  performance: performance2,
  PerformanceObserver,
  createHistogram,
  monitorEventLoopDelay
};

// .cache/browser-demo/almost-src/shims/worker_threads.ts
var exports_worker_threads = {};
__export(exports_worker_threads, {
  BroadcastChannel: () => BroadcastChannel2,
  MessageChannel: () => MessageChannel,
  MessagePort: () => MessagePort,
  SHARE_ENV: () => SHARE_ENV,
  Worker: () => Worker,
  default: () => worker_threads_default,
  getEnvironmentData: () => getEnvironmentData,
  isMainThread: () => isMainThread,
  markAsUntransferable: () => markAsUntransferable,
  moveMessagePortToContext: () => moveMessagePortToContext,
  parentPort: () => parentPort,
  receiveMessageOnPort: () => receiveMessageOnPort,
  setEnvironmentData: () => setEnvironmentData,
  threadId: () => threadId,
  workerData: () => workerData
});
var isMainThread = true;
var parentPort = null;
var workerData = null;
var threadId = 0;

class Worker extends EventEmitter {
  threadId = 0;
  resourceLimits = {};
  constructor(filename2, options2) {
    super();
    console.warn("Worker threads are not fully supported in browser environment");
  }
  postMessage(value, transferList) {}
  terminate() {
    return Promise.resolve(0);
  }
  ref() {}
  unref() {}
  getHeapSnapshot() {
    return Promise.resolve({});
  }
}

class MessageChannel {
  port1 = new MessagePort;
  port2 = new MessagePort;
}

class MessagePort extends EventEmitter {
  postMessage(value, transferList) {}
  start() {}
  close() {}
  ref() {}
  unref() {}
}

class BroadcastChannel2 extends EventEmitter {
  name;
  constructor(name) {
    super();
    this.name = name;
  }
  postMessage(message) {}
  close() {}
  ref() {}
  unref() {}
}
function moveMessagePortToContext(port, contextifiedSandbox) {
  return port;
}
function receiveMessageOnPort(port) {
  return;
}
var SHARE_ENV = Symbol.for("nodejs.worker_threads.SHARE_ENV");
function markAsUntransferable(object) {}
function getEnvironmentData(key) {
  return;
}
function setEnvironmentData(key, value) {}
var worker_threads_default = {
  isMainThread,
  parentPort,
  workerData,
  threadId,
  Worker,
  MessageChannel,
  MessagePort,
  BroadcastChannel: BroadcastChannel2,
  moveMessagePortToContext,
  receiveMessageOnPort,
  SHARE_ENV,
  markAsUntransferable,
  getEnvironmentData,
  setEnvironmentData
};

// .cache/browser-demo/almost-src/shims/esbuild.ts
var exports_esbuild = {};
__export(exports_esbuild, {
  build: () => build,
  buildSync: () => buildSync,
  context: () => context,
  default: () => esbuild_default,
  initialize: () => initialize,
  isInitialized: () => isInitialized,
  setVFS: () => setVFS3,
  setWasmURL: () => setWasmURL,
  transform: () => transform,
  transformSync: () => transformSync,
  transformToCommonJS: () => transformToCommonJS,
  version: () => version2
});

// .cache/browser-demo/almost-src/config/cdn.ts
var REACT_VERSION = "18.2.0";
var ESBUILD_WASM_VERSION = "0.20.0";
var ROLLUP_BROWSER_VERSION = "4.9.0";
var REACT_REFRESH_VERSION = "0.14.0";
var REACT_CDN = `https://esm.sh/react@${REACT_VERSION}`;
var REACT_DOM_CDN = `https://esm.sh/react-dom@${REACT_VERSION}`;
var REACT_REFRESH_CDN = `https://esm.sh/react-refresh@${REACT_REFRESH_VERSION}/runtime`;
var ESBUILD_WASM_ESM_CDN = `https://esm.sh/esbuild-wasm@${ESBUILD_WASM_VERSION}`;
var ESBUILD_WASM_BINARY_CDN = `https://unpkg.com/esbuild-wasm@${ESBUILD_WASM_VERSION}/esbuild.wasm`;
var ESBUILD_WASM_BROWSER_CDN = `https://unpkg.com/esbuild-wasm@${ESBUILD_WASM_VERSION}/esm/browser.min.js`;
var ROLLUP_BROWSER_CDN = `https://esm.sh/@rollup/browser@${ROLLUP_BROWSER_VERSION}`;

// .cache/browser-demo/almost-src/shims/esbuild.ts
var NODE_BUILTINS = new Set([
  "assert",
  "buffer",
  "child_process",
  "cluster",
  "crypto",
  "dgram",
  "dns",
  "events",
  "fs",
  "http",
  "http2",
  "https",
  "net",
  "os",
  "path",
  "perf_hooks",
  "querystring",
  "readline",
  "stream",
  "string_decoder",
  "timers",
  "tls",
  "url",
  "util",
  "v8",
  "vm",
  "worker_threads",
  "zlib",
  "async_hooks",
  "inspector",
  "module",
  "process",
  "console",
  "constants",
  "domain",
  "punycode",
  "sys",
  "tty"
]);
var EXPORT_CONDITION_PRIORITY = ["module", "import", "require", "default"];
function resolveExportConditions(entry) {
  if (typeof entry === "string") {
    return entry;
  }
  if (typeof entry === "object" && entry !== null) {
    for (const condition of EXPORT_CONDITION_PRIORITY) {
      const conditionValue = entry[condition];
      if (conditionValue !== undefined) {
        const result = resolveExportConditions(conditionValue);
        if (result) {
          return result;
        }
      }
    }
  }
  return;
}
function resolveNodeModuleImport(vfs2, importPath, extensions) {
  const pathParts = importPath.split("/");
  const isScoped = pathParts[0].startsWith("@");
  const moduleName = isScoped ? pathParts.slice(0, 2).join("/") : pathParts[0];
  const subPath = isScoped ? pathParts.slice(2).join("/") : pathParts.slice(1).join("/");
  let nodeModulesBase = "/node_modules/" + moduleName;
  if (!vfs2.existsSync(nodeModulesBase)) {
    nodeModulesBase = "/project/node_modules/" + moduleName;
    if (!vfs2.existsSync(nodeModulesBase)) {
      return null;
    }
  }
  const packageJsonPath = nodeModulesBase + "/package.json";
  if (!vfs2.existsSync(packageJsonPath)) {
    return null;
  }
  try {
    const packageJsonContent = vfs2.readFileSync(packageJsonPath, "utf8");
    const packageJson = JSON.parse(packageJsonContent);
    let resolvedPath2 = null;
    if (subPath) {
      resolvedPath2 = resolveSubpathImport(vfs2, packageJson, nodeModulesBase, subPath, extensions);
    } else {
      resolvedPath2 = resolveMainImport(vfs2, packageJson, nodeModulesBase, extensions);
    }
    if (resolvedPath2) {
      return { path: resolvedPath2, pluginData: { fromVFS: true } };
    }
  } catch {}
  return null;
}
function resolveSubpathImport(vfs2, packageJson, nodeModulesBase, subPath, extensions) {
  if (packageJson.exports && typeof packageJson.exports === "object") {
    const exportKey = "./" + subPath;
    const exportsMap = packageJson.exports;
    const exportEntry = exportsMap[exportKey];
    if (exportEntry) {
      const exportPath = resolveExportConditions(exportEntry);
      if (exportPath) {
        const resolvedPath2 = nodeModulesBase + "/" + exportPath.replace(/^\.\//, "");
        const foundPath = findVFSFile(vfs2, resolvedPath2, ["", ".js", ".ts", ".mjs"]);
        if (foundPath) {
          return foundPath;
        }
      }
    }
  }
  const directPath = nodeModulesBase + "/" + subPath;
  return findVFSFile(vfs2, directPath, extensions);
}
function resolveMainImport(vfs2, packageJson, nodeModulesBase, extensions) {
  if (packageJson.exports) {
    const mainExport = typeof packageJson.exports === "object" && !Array.isArray(packageJson.exports) ? packageJson.exports["."] || packageJson.exports : packageJson.exports;
    const exportPath = resolveExportConditions(mainExport);
    if (exportPath) {
      const resolvedPath2 = nodeModulesBase + "/" + exportPath.replace(/^\.\//, "");
      const foundPath = findVFSFile(vfs2, resolvedPath2, ["", ".js", ".ts", ".mjs"]);
      if (foundPath) {
        return foundPath;
      }
    }
  }
  const mainField = packageJson.module || packageJson.main || "index.js";
  const resolvedPath2 = nodeModulesBase + "/" + mainField.replace(/^\.\//, "");
  return findVFSFile(vfs2, resolvedPath2, extensions);
}
var esbuildInstance = null;
var initPromise = null;
var wasmURL = ESBUILD_WASM_BINARY_CDN;
var globalVFS3 = null;
function setVFS3(vfs2) {
  globalVFS3 = vfs2;
}
function setWasmURL(url) {
  wasmURL = url;
}
async function initialize(options2) {
  if (esbuildInstance) {
    return;
  }
  if (typeof window !== "undefined" && window.__esbuild) {
    esbuildInstance = window.__esbuild;
    return;
  }
  if (typeof window !== "undefined" && window.__esbuildInitPromise) {
    await window.__esbuildInitPromise;
    if (window.__esbuild) {
      esbuildInstance = window.__esbuild;
      return;
    }
  }
  if (initPromise) {
    return initPromise;
  }
  initPromise = (async () => {
    try {
      const esbuild = await import(ESBUILD_WASM_BROWSER_CDN);
      await esbuild.initialize({
        wasmURL: options2?.wasmURL || wasmURL
      });
      esbuildInstance = esbuild;
    } catch (error) {
      initPromise = null;
      throw new Error(`Failed to initialize esbuild-wasm: ${error}`);
    }
  })();
  return initPromise;
}
function isInitialized() {
  return esbuildInstance !== null;
}
async function transform(code2, options2) {
  if (!esbuildInstance) {
    await initialize();
  }
  if (!esbuildInstance) {
    throw new Error("esbuild not initialized");
  }
  return esbuildInstance.transform(code2, options2);
}
function transformSync(code2, options2) {
  if (!esbuildInstance) {
    throw new Error("esbuild not initialized. Call initialize() first.");
  }
  throw new Error("transformSync is not available in browser. Use transform() instead.");
}
async function transformToCommonJS(code2, options2) {
  const result = await transform(code2, {
    loader: options2?.loader || "js",
    format: "cjs",
    target: "es2020"
  });
  return result.code;
}
function remapVFSPath(path) {
  return path;
}
function findVFSFile(vfs2, originalPath, extensions) {
  for (const ext of extensions) {
    const pathWithExt = originalPath + ext;
    if (vfs2.existsSync(pathWithExt)) {
      try {
        if (!vfs2.statSync(pathWithExt).isDirectory()) {
          return pathWithExt;
        }
      } catch {
        return pathWithExt;
      }
    }
    const remapped = remapVFSPath(pathWithExt);
    if (remapped !== pathWithExt && vfs2.existsSync(remapped)) {
      try {
        if (!vfs2.statSync(remapped).isDirectory()) {
          return pathWithExt;
        }
      } catch {
        return pathWithExt;
      }
    }
  }
  return null;
}
function createVFSPlugin(externals) {
  if (!globalVFS3) {
    return null;
  }
  const vfs2 = globalVFS3;
  return {
    name: "vfs-loader",
    setup(build2) {
      const b = build2;
      function vfsResolved(foundPath) {
        if (foundPath.endsWith(".mjs") || foundPath.endsWith(".cjs")) {
          const jsPath = foundPath.slice(0, -4) + ".js";
          return { path: jsPath, pluginData: { fromVFS: true, realPath: foundPath } };
        }
        return { path: foundPath, pluginData: { fromVFS: true } };
      }
      b.onResolve({ filter: /.*/ }, (args) => {
        const { path: importPath, importer } = args;
        if (importPath.startsWith("node_modules/")) {
          return { external: true };
        }
        const extensions = ["", ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".json"];
        if (importPath.startsWith("/")) {
          const foundPath = findVFSFile(vfs2, importPath, extensions);
          if (foundPath) {
            return vfsResolved(foundPath);
          }
          return { external: true };
        }
        if (importPath.startsWith(".")) {
          let resolved = importPath;
          if (importer) {
            const importerDir = importer.substring(0, importer.lastIndexOf("/"));
            resolved = importerDir + "/" + importPath;
          }
          const parts = resolved.split("/").filter(Boolean);
          const normalized = [];
          for (const part of parts) {
            if (part === "..") {
              normalized.pop();
            } else if (part !== ".") {
              normalized.push(part);
            }
          }
          resolved = "/" + normalized.join("/");
          const foundPath = findVFSFile(vfs2, resolved, extensions);
          if (foundPath) {
            return vfsResolved(foundPath);
          }
          for (const ext of [".ts", ".tsx", ".js", ".jsx"]) {
            const indexPath = resolved + "/index" + ext;
            const foundIndex = findVFSFile(vfs2, indexPath, [""]);
            if (foundIndex) {
              return vfsResolved(foundIndex);
            }
          }
        }
        if (externals && externals.some((ext) => importPath === ext || importPath.startsWith(ext + "/"))) {
          return { external: true };
        }
        const resolution = resolveNodeModuleImport(vfs2, importPath, extensions);
        if (resolution) {
          if (resolution.path && (resolution.path.endsWith(".mjs") || resolution.path.endsWith(".cjs"))) {
            const jsPath = resolution.path.slice(0, -4) + ".js";
            return { path: jsPath, pluginData: { ...resolution.pluginData, realPath: resolution.path } };
          }
          return resolution;
        }
        const bareModule = importPath.replace(/^node:/, "");
        if (NODE_BUILTINS.has(bareModule)) {
          return { path: `/__node_stub__/${bareModule}`, namespace: "node-stub" };
        }
        return { external: true };
      });
      b.onLoad({ filter: /.*/, namespace: "node-stub" }, () => {
        return { contents: "module.exports = {};", loader: "js" };
      });
      b.onLoad({ filter: /^\/.*/ }, (args) => {
        if (!args.pluginData?.fromVFS) {
          return null;
        }
        try {
          const vfsPath = args.pluginData.realPath || args.path;
          let contents;
          const remappedPath = remapVFSPath(vfsPath);
          if (vfs2.existsSync(vfsPath)) {
            contents = vfs2.readFileSync(vfsPath, "utf8");
          } else if (remappedPath !== vfsPath && vfs2.existsSync(remappedPath)) {
            contents = vfs2.readFileSync(remappedPath, "utf8");
          } else {
            throw new Error(`File not found: ${vfsPath} (tried ${remappedPath})`);
          }
          const ext = args.path.substring(args.path.lastIndexOf("."));
          let loader = "ts";
          if (ext === ".tsx")
            loader = "tsx";
          else if (ext === ".js" || ext === ".mjs" || ext === ".cjs")
            loader = "js";
          else if (ext === ".jsx")
            loader = "jsx";
          else if (ext === ".json")
            loader = "json";
          return { contents, loader };
        } catch (err) {
          return { errors: [{ text: `Failed to load ${args.path}: ${err}` }] };
        }
      });
    }
  };
}
async function build(options2) {
  if (!esbuildInstance) {
    await initialize();
  }
  if (!esbuildInstance) {
    throw new Error("esbuild not initialized");
  }
  const vfsPlugin = createVFSPlugin(options2.external);
  const plugins = [...options2.plugins || []];
  if (vfsPlugin) {
    plugins.unshift(vfsPlugin);
  }
  let entryPoints = options2.entryPoints;
  if (entryPoints && globalVFS3) {
    const absWorkingDir = options2.absWorkingDir || (typeof globalThis !== "undefined" && globalThis.process && typeof globalThis.process.cwd === "function" ? globalThis.process.cwd() : "/");
    entryPoints = entryPoints.map((ep) => {
      if (ep.includes("vfs:")) {
        const vfsIndex = ep.indexOf("vfs:");
        ep = ep.substring(vfsIndex + 4);
      }
      if (ep.startsWith("/")) {
        return ep;
      }
      if (ep.startsWith("./")) {
        const base = absWorkingDir.endsWith("/") ? absWorkingDir.slice(0, -1) : absWorkingDir;
        const relative = ep.slice(2);
        const resolved = base + "/" + relative;
        return resolved;
      }
      if (ep.startsWith("../")) {
        const base = absWorkingDir.endsWith("/") ? absWorkingDir.slice(0, -1) : absWorkingDir;
        const parts = base.split("/").filter(Boolean);
        parts.pop();
        const relative = ep.slice(3);
        const resolved = "/" + parts.join("/") + "/" + relative;
        return resolved;
      }
      return ep;
    });
  }
  const resolvedAbsWorkingDir = options2.absWorkingDir || (typeof globalThis !== "undefined" && globalThis.process && typeof globalThis.process.cwd === "function" ? globalThis.process.cwd() : "/");
  const result = await esbuildInstance.build({
    ...options2,
    entryPoints,
    plugins,
    write: false,
    absWorkingDir: resolvedAbsWorkingDir
  });
  if (result.outputFiles) {
    for (const file of result.outputFiles) {
      if (file.path.includes("vfs:")) {
        file.path = file.path.replace(/vfs:/g, "");
      }
    }
  }
  if (result.metafile) {
    const meta = result.metafile;
    for (const key of ["inputs", "outputs"]) {
      const obj = meta[key];
      if (obj) {
        for (const k of Object.keys(obj)) {
          if (k.includes("vfs:")) {
            obj[k.replace(/vfs:/g, "")] = obj[k];
            delete obj[k];
          }
        }
      }
    }
  }
  return result;
}
function buildSync(_options2) {
  throw new Error("buildSync is not available in browser. Use build() instead.");
}
function version2() {
  return "0.20.0";
}
async function context(_options2) {
  throw new Error("esbuild context API is not supported in browser");
}
var esbuild_default = {
  initialize,
  isInitialized,
  transform,
  transformSync,
  transformToCommonJS,
  build,
  buildSync,
  context,
  version: version2,
  setWasmURL,
  setVFS: setVFS3
};

// .cache/browser-demo/almost-src/shims/rollup.ts
var exports_rollup = {};
__export(exports_rollup, {
  VERSION: () => VERSION,
  default: () => rollup_default,
  getPackageBase: () => getPackageBase,
  loadRollup: () => loadRollup,
  parseAst: () => parseAst,
  parseAstAsync: () => parseAstAsync,
  rollup: () => rollup,
  watch: () => watch3
});

// .cache/browser-demo/deps/node_modules/acorn/dist/acorn.mjs
var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 31, 4, 33, 15, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 199, 7, 137, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 55, 9, 7, 0, 259, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 481, 1, 61, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 12, 2, 9, 1, 3, 0, 33, 1, 1357, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 233, 0, 3, 0, 8, 1, 6, 0, 475, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 13, 65, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 7, 25, 39, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 5, 18, 21, 18, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 18, 0, 182, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 24, 43, 22, 0, 239, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 111, 6, 206, 13, 310, 2314, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 33, 24, 3, 24, 45, 74, 6, 0, 67, 12, 65, 1, 2, 0, 15, 4, 10, 7386, 37, 33, 96, 114, 14, 913, 15, 50, 7710, 3, 2, 6, 2, 1, 2, 296, 10, 0, 30, 2, 3, 0, 15, 4, 8, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 340, 2, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 129, 15, 6, 55, 50, 49, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 208, 30, 2, 2, 2, 1, 2, 6, 3, 4, 10, 1, 225, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4382, 2, 5773, 3, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 8489, 39815, 11327];
var nonASCIIidentifierChars = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄ-׉ؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୓-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-᫰ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･";
var nonASCIIidentifierStartChars = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆ՘ՙՠ-ֈ֋֌א-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-࢏ࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ౜ౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ೜-ೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿ₏-₟ℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-꟝꟢꟱-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩ꭬꭭ꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ";
var reservedWords = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
};
var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
var keywords$1 = {
  5: ecma5AndLessKeywords,
  "5module": ecma5AndLessKeywords + " export import",
  6: ecma5AndLessKeywords + " const class extends export import super"
};
var keywordRelationalOperator = /^in(stanceof)?$/;
var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
function isInAstralSet(code2, set) {
  var pos = 65536;
  for (var i = 0;i < set.length; i += 2) {
    pos += set[i];
    if (pos > code2) {
      return false;
    }
    pos += set[i + 1];
    if (pos >= code2) {
      return true;
    }
  }
  return false;
}
function isIdentifierStart(code2, astral) {
  if (code2 < 65) {
    return code2 === 36;
  }
  if (code2 < 91) {
    return true;
  }
  if (code2 < 97) {
    return code2 === 95;
  }
  if (code2 < 123) {
    return true;
  }
  if (code2 <= 65535) {
    return code2 >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code2));
  }
  if (astral === false) {
    return false;
  }
  return isInAstralSet(code2, astralIdentifierStartCodes);
}
function isIdentifierChar(code2, astral) {
  if (code2 < 48) {
    return code2 === 36;
  }
  if (code2 < 58) {
    return true;
  }
  if (code2 < 65) {
    return false;
  }
  if (code2 < 91) {
    return true;
  }
  if (code2 < 97) {
    return code2 === 95;
  }
  if (code2 < 123) {
    return true;
  }
  if (code2 <= 65535) {
    return code2 >= 170 && nonASCIIidentifier.test(String.fromCharCode(code2));
  }
  if (astral === false) {
    return false;
  }
  return isInAstralSet(code2, astralIdentifierStartCodes) || isInAstralSet(code2, astralIdentifierCodes);
}
var TokenType = function TokenType(label, conf) {
  if (conf === undefined)
    conf = {};
  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop || null;
  this.updateContext = null;
};
function binop(name, prec) {
  return new TokenType(name, { beforeExpr: true, binop: prec });
}
var beforeExpr = { beforeExpr: true };
var startsExpr = { startsExpr: true };
var keywords = {};
function kw(name, options2) {
  if (options2 === undefined)
    options2 = {};
  options2.keyword = name;
  return keywords[name] = new TokenType(name, options2);
}
var types$1 = {
  num: new TokenType("num", startsExpr),
  regexp: new TokenType("regexp", startsExpr),
  string: new TokenType("string", startsExpr),
  name: new TokenType("name", startsExpr),
  privateId: new TokenType("privateId", startsExpr),
  eof: new TokenType("eof"),
  bracketL: new TokenType("[", { beforeExpr: true, startsExpr: true }),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", { beforeExpr: true, startsExpr: true }),
  braceR: new TokenType("}"),
  parenL: new TokenType("(", { beforeExpr: true, startsExpr: true }),
  parenR: new TokenType(")"),
  comma: new TokenType(",", beforeExpr),
  semi: new TokenType(";", beforeExpr),
  colon: new TokenType(":", beforeExpr),
  dot: new TokenType("."),
  question: new TokenType("?", beforeExpr),
  questionDot: new TokenType("?."),
  arrow: new TokenType("=>", beforeExpr),
  template: new TokenType("template"),
  invalidTemplate: new TokenType("invalidTemplate"),
  ellipsis: new TokenType("...", beforeExpr),
  backQuote: new TokenType("`", startsExpr),
  dollarBraceL: new TokenType("${", { beforeExpr: true, startsExpr: true }),
  eq: new TokenType("=", { beforeExpr: true, isAssign: true }),
  assign: new TokenType("_=", { beforeExpr: true, isAssign: true }),
  incDec: new TokenType("++/--", { prefix: true, postfix: true, startsExpr: true }),
  prefix: new TokenType("!/~", { beforeExpr: true, prefix: true, startsExpr: true }),
  logicalOR: binop("||", 1),
  logicalAND: binop("&&", 2),
  bitwiseOR: binop("|", 3),
  bitwiseXOR: binop("^", 4),
  bitwiseAND: binop("&", 5),
  equality: binop("==/!=/===/!==", 6),
  relational: binop("</>/<=/>=", 7),
  bitShift: binop("<</>>/>>>", 8),
  plusMin: new TokenType("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }),
  modulo: binop("%", 10),
  star: binop("*", 10),
  slash: binop("/", 10),
  starstar: new TokenType("**", { beforeExpr: true }),
  coalesce: binop("??", 1),
  _break: kw("break"),
  _case: kw("case", beforeExpr),
  _catch: kw("catch"),
  _continue: kw("continue"),
  _debugger: kw("debugger"),
  _default: kw("default", beforeExpr),
  _do: kw("do", { isLoop: true, beforeExpr: true }),
  _else: kw("else", beforeExpr),
  _finally: kw("finally"),
  _for: kw("for", { isLoop: true }),
  _function: kw("function", startsExpr),
  _if: kw("if"),
  _return: kw("return", beforeExpr),
  _switch: kw("switch"),
  _throw: kw("throw", beforeExpr),
  _try: kw("try"),
  _var: kw("var"),
  _const: kw("const"),
  _while: kw("while", { isLoop: true }),
  _with: kw("with"),
  _new: kw("new", { beforeExpr: true, startsExpr: true }),
  _this: kw("this", startsExpr),
  _super: kw("super", startsExpr),
  _class: kw("class", startsExpr),
  _extends: kw("extends", beforeExpr),
  _export: kw("export"),
  _import: kw("import", startsExpr),
  _null: kw("null", startsExpr),
  _true: kw("true", startsExpr),
  _false: kw("false", startsExpr),
  _in: kw("in", { beforeExpr: true, binop: 7 }),
  _instanceof: kw("instanceof", { beforeExpr: true, binop: 7 }),
  _typeof: kw("typeof", { beforeExpr: true, prefix: true, startsExpr: true }),
  _void: kw("void", { beforeExpr: true, prefix: true, startsExpr: true }),
  _delete: kw("delete", { beforeExpr: true, prefix: true, startsExpr: true })
};
var lineBreak = /\r\n?|\n|\u2028|\u2029/;
var lineBreakG = new RegExp(lineBreak.source, "g");
function isNewLine(code2) {
  return code2 === 10 || code2 === 13 || code2 === 8232 || code2 === 8233;
}
function nextLineBreak(code2, from, end) {
  if (end === undefined)
    end = code2.length;
  for (var i = from;i < end; i++) {
    var next = code2.charCodeAt(i);
    if (isNewLine(next)) {
      return i < end - 1 && next === 13 && code2.charCodeAt(i + 1) === 10 ? i + 2 : i + 1;
    }
  }
  return -1;
}
var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
var ref = Object.prototype;
var hasOwnProperty = ref.hasOwnProperty;
var toString2 = ref.toString;
var hasOwn = Object.hasOwn || function(obj, propName) {
  return hasOwnProperty.call(obj, propName);
};
var isArray2 = Array.isArray || function(obj) {
  return toString2.call(obj) === "[object Array]";
};
var regexpCache = Object.create(null);
function wordsRegexp(words) {
  return regexpCache[words] || (regexpCache[words] = new RegExp("^(?:" + words.replace(/ /g, "|") + ")$"));
}
function codePointToString(code2) {
  if (code2 <= 65535) {
    return String.fromCharCode(code2);
  }
  code2 -= 65536;
  return String.fromCharCode((code2 >> 10) + 55296, (code2 & 1023) + 56320);
}
var loneSurrogate = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
var Position = function Position(line, col) {
  this.line = line;
  this.column = col;
};
Position.prototype.offset = function offset(n) {
  return new Position(this.line, this.column + n);
};
var SourceLocation = function SourceLocation(p, start, end) {
  this.start = start;
  this.end = end;
  if (p.sourceFile !== null) {
    this.source = p.sourceFile;
  }
};
function getLineInfo(input, offset) {
  for (var line = 1, cur = 0;; ) {
    var nextBreak = nextLineBreak(input, cur, offset);
    if (nextBreak < 0) {
      return new Position(line, offset - cur);
    }
    ++line;
    cur = nextBreak;
  }
}
var defaultOptions2 = {
  ecmaVersion: null,
  sourceType: "script",
  strict: false,
  onInsertedSemicolon: null,
  onTrailingComma: null,
  allowReserved: null,
  allowReturnOutsideFunction: false,
  allowImportExportEverywhere: false,
  allowAwaitOutsideFunction: null,
  allowSuperOutsideMethod: null,
  allowHashBang: false,
  checkPrivateFields: true,
  locations: false,
  startLocation: null,
  onToken: null,
  onComment: null,
  ranges: false,
  program: null,
  sourceFile: null,
  directSourceFile: null,
  preserveParens: false
};
var warnedAboutEcmaVersion = false;
function getOptions(opts) {
  var options2 = {};
  for (var opt in defaultOptions2) {
    options2[opt] = opts && hasOwn(opts, opt) ? opts[opt] : defaultOptions2[opt];
  }
  if (options2.ecmaVersion === "latest") {
    options2.ecmaVersion = 1e8;
  } else if (options2.ecmaVersion == null) {
    if (!warnedAboutEcmaVersion && typeof console === "object" && console.warn) {
      warnedAboutEcmaVersion = true;
      console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`);
    }
    options2.ecmaVersion = 11;
  } else if (options2.ecmaVersion >= 2015) {
    options2.ecmaVersion -= 2009;
  }
  if (options2.allowReserved == null) {
    options2.allowReserved = options2.ecmaVersion < 5;
  }
  if (!opts || opts.allowHashBang == null) {
    options2.allowHashBang = options2.ecmaVersion >= 14;
  }
  if (isArray2(options2.onToken)) {
    var tokens = options2.onToken;
    options2.onToken = function(token) {
      return tokens.push(token);
    };
  }
  if (isArray2(options2.onComment)) {
    options2.onComment = pushComment(options2, options2.onComment);
  }
  if (options2.sourceType === "commonjs" && options2.allowAwaitOutsideFunction) {
    throw new Error("Cannot use allowAwaitOutsideFunction with sourceType: commonjs");
  }
  return options2;
}
function pushComment(options2, array) {
  return function(block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "Block" : "Line",
      value: text,
      start,
      end
    };
    if (options2.locations) {
      comment.loc = new SourceLocation(this, startLoc, endLoc);
    }
    if (options2.ranges) {
      comment.range = [start, end];
    }
    array.push(comment);
  };
}
var SCOPE_TOP = 1;
var SCOPE_FUNCTION = 2;
var SCOPE_ASYNC = 4;
var SCOPE_GENERATOR = 8;
var SCOPE_ARROW = 16;
var SCOPE_SIMPLE_CATCH = 32;
var SCOPE_SUPER = 64;
var SCOPE_DIRECT_SUPER = 128;
var SCOPE_CLASS_STATIC_BLOCK = 256;
var SCOPE_CLASS_FIELD_INIT = 512;
var SCOPE_SWITCH = 1024;
var SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK;
function functionFlags(async, generator) {
  return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0);
}
var BIND_NONE = 0;
var BIND_VAR = 1;
var BIND_LEXICAL = 2;
var BIND_FUNCTION = 3;
var BIND_SIMPLE_CATCH = 4;
var BIND_OUTSIDE = 5;
var Parser = function Parser(options2, input, startPos) {
  this.options = options2 = getOptions(options2);
  this.sourceFile = options2.sourceFile;
  this.keywords = wordsRegexp(keywords$1[options2.ecmaVersion >= 6 ? 6 : options2.sourceType === "module" ? "5module" : 5]);
  var reserved = "";
  if (options2.allowReserved !== true) {
    reserved = reservedWords[options2.ecmaVersion >= 6 ? 6 : options2.ecmaVersion === 5 ? 5 : 3];
    if (options2.sourceType === "module") {
      reserved += " await";
    }
  }
  this.reservedWords = wordsRegexp(reserved);
  var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
  this.reservedWordsStrict = wordsRegexp(reservedStrict);
  this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
  this.input = String(input);
  this.containsEsc = false;
  this.pos = startPos || 0;
  this.curLine = 1;
  if (options2.startLocation) {
    this.lineStart = this.pos - options2.startLocation.column;
    this.curLine = options2.startLocation.line;
  } else if (startPos) {
    this.lineStart = this.input.lastIndexOf(`
`, startPos - 1) + 1;
    if (this.options.locations) {
      this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
    }
  } else {
    this.lineStart = 0;
  }
  this.type = types$1.eof;
  this.value = null;
  this.start = this.end = this.pos;
  this.startLoc = this.endLoc = this.curPosition();
  this.lastTokEndLoc = this.lastTokStartLoc = null;
  this.lastTokStart = this.lastTokEnd = this.pos;
  this.context = this.initialContext();
  this.exprAllowed = true;
  this.inModule = options2.sourceType === "module";
  this.strict = this.inModule || options2.strict === true || this.strictDirective(this.pos);
  this.potentialArrowAt = -1;
  this.potentialArrowInForAwait = false;
  this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
  this.labels = [];
  this.undefinedExports = Object.create(null);
  if (this.pos === 0 && options2.allowHashBang && this.input.slice(0, 2) === "#!") {
    this.skipLineComment(2);
  }
  this.scopeStack = [];
  this.enterScope(this.options.sourceType === "commonjs" ? SCOPE_FUNCTION : SCOPE_TOP);
  this.regexpState = null;
  this.privateNameStack = [];
};
var prototypeAccessors = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, canAwait: { configurable: true }, allowReturn: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true }, allowNewDotTarget: { configurable: true }, allowUsing: { configurable: true }, inClassStaticBlock: { configurable: true } };
Parser.prototype.parse = function parse() {
  var this$1$1 = this;
  var node = this.options.program || this.startNode();
  this.nextToken();
  return this.catchStackOverflow(function() {
    return this$1$1.parseTopLevel(node);
  });
};
prototypeAccessors.inFunction.get = function() {
  return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
};
prototypeAccessors.inGenerator.get = function() {
  return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0;
};
prototypeAccessors.inAsync.get = function() {
  return (this.currentVarScope().flags & SCOPE_ASYNC) > 0;
};
prototypeAccessors.canAwait.get = function() {
  for (var i = this.scopeStack.length - 1;i >= 0; i--) {
    var ref = this.scopeStack[i];
    var flags = ref.flags;
    if (flags & (SCOPE_CLASS_STATIC_BLOCK | SCOPE_CLASS_FIELD_INIT)) {
      return false;
    }
    if (flags & SCOPE_FUNCTION) {
      return (flags & SCOPE_ASYNC) > 0;
    }
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
prototypeAccessors.allowReturn.get = function() {
  if (this.inFunction) {
    return true;
  }
  if (this.options.allowReturnOutsideFunction && this.currentVarScope().flags & SCOPE_TOP) {
    return true;
  }
  return false;
};
prototypeAccessors.allowSuper.get = function() {
  var ref = this.currentThisScope();
  var flags = ref.flags;
  return (flags & SCOPE_SUPER) > 0 || this.options.allowSuperOutsideMethod;
};
prototypeAccessors.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
};
prototypeAccessors.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
prototypeAccessors.allowNewDotTarget.get = function() {
  for (var i = this.scopeStack.length - 1;i >= 0; i--) {
    var ref = this.scopeStack[i];
    var flags = ref.flags;
    if (flags & (SCOPE_CLASS_STATIC_BLOCK | SCOPE_CLASS_FIELD_INIT) || flags & SCOPE_FUNCTION && !(flags & SCOPE_ARROW)) {
      return true;
    }
  }
  return false;
};
prototypeAccessors.allowUsing.get = function() {
  var ref = this.currentScope();
  var flags = ref.flags;
  if (flags & SCOPE_SWITCH) {
    return false;
  }
  if (!this.inModule && flags & SCOPE_TOP) {
    return false;
  }
  return true;
};
prototypeAccessors.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & SCOPE_CLASS_STATIC_BLOCK) > 0;
};
Parser.extend = function extend() {
  var plugins = [], len = arguments.length;
  while (len--)
    plugins[len] = arguments[len];
  var cls = this;
  for (var i = 0;i < plugins.length; i++) {
    cls = plugins[i](cls);
  }
  return cls;
};
Parser.parse = function parse(input, options2) {
  return new this(options2, input).parse();
};
Parser.parseExpressionAt = function parseExpressionAt(input, pos, options2) {
  var parser = new this(options2, input, pos);
  parser.nextToken();
  return parser.parseExpression();
};
Parser.tokenizer = function tokenizer(input, options2) {
  return new this(options2, input);
};
Object.defineProperties(Parser.prototype, prototypeAccessors);
var pp$9 = Parser.prototype;
var literal = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
pp$9.strictDirective = function(start) {
  if (this.options.ecmaVersion < 5) {
    return false;
  }
  for (;; ) {
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    var match = literal.exec(this.input.slice(start));
    if (!match) {
      return false;
    }
    if ((match[1] || match[2]) === "use strict") {
      skipWhiteSpace.lastIndex = start + match[0].length;
      var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
      var next = this.input.charAt(end);
      return next === ";" || next === "}" || lineBreak.test(spaceAfter[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "=" || next === "i" && keywordOpAt(this, end));
    }
    start += match[0].length;
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    if (this.input[start] === ";") {
      start++;
    }
  }
};
function keywordOpAt(parser, pos) {
  var end = pos + 1, stop = Math.min(parser.input.length, pos + 11);
  while (end < stop) {
    var ch = parser.fullCharCodeAt(end);
    if (!isIdentifierChar(ch, true)) {
      break;
    }
    end += ch <= 65535 ? 1 : 2;
  }
  return end === pos + 2 && parser.input.slice(pos, end) === "in" || end === pos + 10 && parser.input.slice(pos, end) === "instanceof";
}
pp$9.eat = function(type) {
  if (this.type === type) {
    this.next();
    return true;
  } else {
    return false;
  }
};
pp$9.isContextual = function(name) {
  return this.type === types$1.name && this.value === name && !this.containsEsc;
};
pp$9.eatContextual = function(name) {
  if (!this.isContextual(name)) {
    return false;
  }
  this.next();
  return true;
};
pp$9.catchStackOverflow = function(f) {
  try {
    return f();
  } catch (e) {
    if (e instanceof Error && (/\bstack\b.*\b(exceeded|overflow)\b/i.test(e.message) || /\btoo much recursion\b/i.test(e.message))) {
      this.raise(this.start, "Not enough stack space to parse input");
    } else {
      throw e;
    }
  }
};
pp$9.expectContextual = function(name) {
  if (!this.eatContextual(name)) {
    this.unexpected();
  }
};
pp$9.canInsertSemicolon = function() {
  return this.type === types$1.eof || this.type === types$1.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};
pp$9.insertSemicolon = function() {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon) {
      this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
    }
    return true;
  }
};
pp$9.semicolon = function() {
  if (!this.eat(types$1.semi) && !this.insertSemicolon()) {
    this.unexpected();
  }
};
pp$9.afterTrailingComma = function(tokType, notNext) {
  if (this.type === tokType) {
    if (this.options.onTrailingComma) {
      this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
    }
    if (!notNext) {
      this.next();
    }
    return true;
  }
};
pp$9.expect = function(type) {
  this.eat(type) || this.unexpected();
};
pp$9.unexpected = function(pos) {
  this.raise(pos != null ? pos : this.start, "Unexpected token");
};
var DestructuringErrors = function DestructuringErrors() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
pp$9.checkPatternErrors = function(refDestructuringErrors, isAssign) {
  if (!refDestructuringErrors) {
    return;
  }
  if (refDestructuringErrors.trailingComma > -1) {
    this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element");
  }
  var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
  if (parens > -1) {
    this.raiseRecoverable(parens, isAssign ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
pp$9.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
  if (!refDestructuringErrors) {
    return false;
  }
  var shorthandAssign = refDestructuringErrors.shorthandAssign;
  var doubleProto = refDestructuringErrors.doubleProto;
  if (!andThrow) {
    return shorthandAssign >= 0 || doubleProto >= 0;
  }
  if (shorthandAssign >= 0) {
    this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns");
  }
  if (doubleProto >= 0) {
    this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
  }
};
pp$9.checkYieldAwaitInDefaultParams = function() {
  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) {
    this.raise(this.yieldPos, "Yield expression cannot be a default value");
  }
  if (this.awaitPos) {
    this.raise(this.awaitPos, "Await expression cannot be a default value");
  }
};
pp$9.isSimpleAssignTarget = function(expr) {
  if (expr.type === "ParenthesizedExpression") {
    return this.isSimpleAssignTarget(expr.expression);
  }
  return expr.type === "Identifier" || expr.type === "MemberExpression";
};
var pp$8 = Parser.prototype;
pp$8.parseTopLevel = function(node) {
  var exports$1 = Object.create(null);
  if (!node.body) {
    node.body = [];
  }
  while (this.type !== types$1.eof) {
    var stmt = this.parseStatement(null, true, exports$1);
    node.body.push(stmt);
  }
  if (this.inModule) {
    for (var i = 0, list = Object.keys(this.undefinedExports);i < list.length; i += 1) {
      var name = list[i];
      this.raiseRecoverable(this.undefinedExports[name].start, "Export '" + name + "' is not defined");
    }
  }
  this.adaptDirectivePrologue(node.body);
  this.next();
  node.sourceType = this.options.sourceType === "commonjs" ? "script" : this.options.sourceType;
  return this.finishNode(node, "Program");
};
var loopLabel = { kind: "loop" };
var switchLabel = { kind: "switch" };
pp$8.isLet = function(context) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, nextCh = this.fullCharCodeAt(next);
  if (nextCh === 91 || nextCh === 92) {
    return true;
  }
  if (context) {
    return false;
  }
  if (nextCh === 123) {
    return true;
  }
  if (isIdentifierStart(nextCh)) {
    var start = next;
    do {
      next += nextCh <= 65535 ? 1 : 2;
    } while (isIdentifierChar(nextCh = this.fullCharCodeAt(next)));
    if (nextCh === 92) {
      return true;
    }
    var ident = this.input.slice(start, next);
    if (!keywordRelationalOperator.test(ident)) {
      return true;
    }
  }
  return false;
};
pp$8.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, after;
  return !lineBreak.test(this.input.slice(this.pos, next)) && this.input.slice(next, next + 8) === "function" && (next + 8 === this.input.length || !(isIdentifierChar(after = this.fullCharCodeAt(next + 8)) || after === 92));
};
pp$8.isUsingKeyword = function(isAwaitUsing, isFor) {
  if (this.options.ecmaVersion < 17 || !this.isContextual(isAwaitUsing ? "await" : "using")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length;
  if (lineBreak.test(this.input.slice(this.pos, next))) {
    return false;
  }
  if (isAwaitUsing) {
    var usingEndPos = next + 5, after;
    if (this.input.slice(next, usingEndPos) !== "using" || usingEndPos === this.input.length || isIdentifierChar(after = this.fullCharCodeAt(usingEndPos)) || after === 92) {
      return false;
    }
    skipWhiteSpace.lastIndex = usingEndPos;
    var skipAfterUsing = skipWhiteSpace.exec(this.input);
    next = usingEndPos + skipAfterUsing[0].length;
    if (skipAfterUsing && lineBreak.test(this.input.slice(usingEndPos, next))) {
      return false;
    }
  }
  var ch = this.fullCharCodeAt(next);
  if (!isIdentifierStart(ch) && ch !== 92) {
    return false;
  }
  var idStart = next;
  do {
    next += ch <= 65535 ? 1 : 2;
  } while (isIdentifierChar(ch = this.fullCharCodeAt(next)));
  if (ch === 92) {
    return true;
  }
  var id = this.input.slice(idStart, next);
  if (keywordRelationalOperator.test(id)) {
    return false;
  }
  if (isFor && !isAwaitUsing && id === "of") {
    skipWhiteSpace.lastIndex = next;
    var skipAfterOf = skipWhiteSpace.exec(this.input);
    next = next + skipAfterOf[0].length;
    if (this.input.charCodeAt(next) !== 61 || (ch = this.input.charCodeAt(next + 1)) === 61 || ch === 62) {
      return false;
    }
  }
  return true;
};
pp$8.isAwaitUsing = function(isFor) {
  return this.isUsingKeyword(true, isFor);
};
pp$8.isUsing = function(isFor) {
  return this.isUsingKeyword(false, isFor);
};
pp$8.parseStatement = function(context, topLevel, exports$1) {
  var starttype = this.type, node = this.startNode(), kind;
  if (this.isLet(context)) {
    starttype = types$1._var;
    kind = "let";
  }
  switch (starttype) {
    case types$1._break:
    case types$1._continue:
      return this.parseBreakContinueStatement(node, starttype.keyword);
    case types$1._debugger:
      return this.parseDebuggerStatement(node);
    case types$1._do:
      return this.parseDoStatement(node);
    case types$1._for:
      return this.parseForStatement(node);
    case types$1._function:
      if (context && (this.strict || context !== "if" && context !== "label") && this.options.ecmaVersion >= 6) {
        this.unexpected();
      }
      return this.parseFunctionStatement(node, false, !context);
    case types$1._class:
      if (context) {
        this.unexpected();
      }
      return this.parseClass(node, true);
    case types$1._if:
      return this.parseIfStatement(node);
    case types$1._return:
      return this.parseReturnStatement(node);
    case types$1._switch:
      return this.parseSwitchStatement(node);
    case types$1._throw:
      return this.parseThrowStatement(node);
    case types$1._try:
      return this.parseTryStatement(node);
    case types$1._const:
    case types$1._var:
      kind = kind || this.value;
      if (context && kind !== "var") {
        this.unexpected();
      }
      return this.parseVarStatement(node, kind);
    case types$1._while:
      return this.parseWhileStatement(node);
    case types$1._with:
      return this.parseWithStatement(node);
    case types$1.braceL:
      return this.parseBlock(true, node);
    case types$1.semi:
      return this.parseEmptyStatement(node);
    case types$1._export:
    case types$1._import:
      if (this.options.ecmaVersion > 10 && starttype === types$1._import) {
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
        if (nextCh === 40 || nextCh === 46) {
          return this.parseExpressionStatement(node, this.parseExpression());
        }
      }
      if (!this.options.allowImportExportEverywhere) {
        if (!topLevel) {
          this.raise(this.start, "'import' and 'export' may only appear at the top level");
        }
        if (!this.inModule) {
          this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
        }
      }
      return starttype === types$1._import ? this.parseImport(node) : this.parseExport(node, exports$1);
    default:
      if (this.isAsyncFunction()) {
        if (context) {
          this.unexpected();
        }
        this.next();
        return this.parseFunctionStatement(node, true, !context);
      }
      var usingKind = this.isAwaitUsing(false) ? "await using" : this.isUsing(false) ? "using" : null;
      if (usingKind) {
        if (!this.allowUsing) {
          this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script` or in the bare case statement");
        }
        if (context) {
          this.raise(this.start, "Using declaration is not allowed in single-statement positions");
        }
        if (usingKind === "await using") {
          if (!this.canAwait) {
            this.raise(this.start, "Await using cannot appear outside of async function");
          }
          this.next();
        }
        this.next();
        this.parseVar(node, false, usingKind);
        this.semicolon();
        return this.finishNode(node, "VariableDeclaration");
      }
      var maybeName = this.value, expr = this.parseExpression();
      if (starttype === types$1.name && expr.type === "Identifier" && this.eat(types$1.colon)) {
        return this.parseLabeledStatement(node, maybeName, expr, context);
      } else {
        return this.parseExpressionStatement(node, expr);
      }
  }
};
pp$8.parseBreakContinueStatement = function(node, keyword) {
  var isBreak = keyword === "break";
  this.next();
  if (this.eat(types$1.semi) || this.insertSemicolon()) {
    node.label = null;
  } else if (this.type !== types$1.name) {
    this.unexpected();
  } else {
    node.label = this.parseIdent();
    this.semicolon();
  }
  var i = 0;
  for (;i < this.labels.length; ++i) {
    var lab = this.labels[i];
    if (node.label == null || lab.name === node.label.name) {
      if (lab.kind != null && (isBreak || lab.kind === "loop")) {
        break;
      }
      if (node.label && isBreak) {
        break;
      }
    }
  }
  if (i === this.labels.length) {
    this.raise(node.start, "Unsyntactic " + keyword);
  }
  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
};
pp$8.parseDebuggerStatement = function(node) {
  this.next();
  this.semicolon();
  return this.finishNode(node, "DebuggerStatement");
};
pp$8.parseDoStatement = function(node) {
  this.next();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("do");
  this.labels.pop();
  this.expect(types$1._while);
  node.test = this.parseParenExpression();
  if (this.options.ecmaVersion >= 6) {
    this.eat(types$1.semi);
  } else {
    this.semicolon();
  }
  return this.finishNode(node, "DoWhileStatement");
};
pp$8.parseForStatement = function(node) {
  this.next();
  var awaitAt = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  this.labels.push(loopLabel);
  this.enterScope(0);
  this.expect(types$1.parenL);
  if (this.type === types$1.semi) {
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, null);
  }
  var isLet = this.isLet();
  if (this.type === types$1._var || this.type === types$1._const || isLet) {
    var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
    this.next();
    this.parseVar(init$1, true, kind);
    this.finishNode(init$1, "VariableDeclaration");
    return this.parseForAfterInit(node, init$1, awaitAt);
  }
  var startsWithLet = this.isContextual("let"), isForOf = false;
  var usingKind = this.isUsing(true) ? "using" : this.isAwaitUsing(true) ? "await using" : null;
  if (usingKind) {
    var init$2 = this.startNode();
    this.next();
    if (usingKind === "await using") {
      if (!this.canAwait) {
        this.raise(this.start, "Await using cannot appear outside of async function");
      }
      this.next();
    }
    this.parseVar(init$2, true, usingKind);
    this.finishNode(init$2, "VariableDeclaration");
    return this.parseForAfterInit(node, init$2, awaitAt);
  }
  var containsEsc = this.containsEsc;
  var refDestructuringErrors = new DestructuringErrors;
  var initPos = this.start;
  var init = awaitAt > -1 ? this.parseExprSubscripts(refDestructuringErrors, "await") : this.parseExpression(true, refDestructuringErrors);
  if (this.type === types$1._in || (isForOf = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
    if (awaitAt > -1) {
      if (this.type === types$1._in) {
        this.unexpected(awaitAt);
      }
      node.await = true;
    } else if (isForOf && this.options.ecmaVersion >= 8) {
      if (init.start === initPos && !containsEsc && init.type === "Identifier" && init.name === "async") {
        this.unexpected();
      } else if (this.options.ecmaVersion >= 9) {
        node.await = false;
      }
    }
    if (startsWithLet && isForOf) {
      this.raise(init.start, "The left-hand side of a for-of loop may not start with 'let'.");
    }
    this.toAssignable(init, false, refDestructuringErrors);
    this.checkLValPattern(init);
    return this.parseForIn(node, init);
  } else {
    this.checkExpressionErrors(refDestructuringErrors, true);
  }
  if (awaitAt > -1) {
    this.unexpected(awaitAt);
  }
  return this.parseFor(node, init);
};
pp$8.parseForAfterInit = function(node, init, awaitAt) {
  if ((this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && init.declarations.length === 1) {
    if (this.type === types$1._in) {
      if ((init.kind === "using" || init.kind === "await using") && !init.declarations[0].init) {
        this.raise(this.start, "Using declaration is not allowed in for-in loops");
      }
      if (this.options.ecmaVersion >= 9 && awaitAt > -1) {
        this.unexpected(awaitAt);
      }
    } else if (this.options.ecmaVersion >= 9) {
      node.await = awaitAt > -1;
    }
    return this.parseForIn(node, init);
  }
  if (awaitAt > -1) {
    this.unexpected(awaitAt);
  }
  return this.parseFor(node, init);
};
pp$8.parseFunctionStatement = function(node, isAsync, declarationPosition) {
  this.next();
  return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync);
};
pp$8.parseIfStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  node.consequent = this.parseStatement("if");
  node.alternate = this.eat(types$1._else) ? this.parseStatement("if") : null;
  return this.finishNode(node, "IfStatement");
};
pp$8.parseReturnStatement = function(node) {
  if (!this.allowReturn) {
    this.raise(this.start, "'return' outside of function");
  }
  this.next();
  if (this.eat(types$1.semi) || this.insertSemicolon()) {
    node.argument = null;
  } else {
    node.argument = this.parseExpression();
    this.semicolon();
  }
  return this.finishNode(node, "ReturnStatement");
};
pp$8.parseSwitchStatement = function(node) {
  this.next();
  node.discriminant = this.parseParenExpression();
  node.cases = [];
  this.expect(types$1.braceL);
  this.labels.push(switchLabel);
  this.enterScope(SCOPE_SWITCH);
  var cur;
  for (var sawDefault = false;this.type !== types$1.braceR; ) {
    if (this.type === types$1._case || this.type === types$1._default) {
      var isCase = this.type === types$1._case;
      if (cur) {
        this.finishNode(cur, "SwitchCase");
      }
      node.cases.push(cur = this.startNode());
      cur.consequent = [];
      this.next();
      if (isCase) {
        cur.test = this.parseExpression();
      } else {
        if (sawDefault) {
          this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
        }
        sawDefault = true;
        cur.test = null;
      }
      this.expect(types$1.colon);
    } else {
      if (!cur) {
        this.unexpected();
      }
      cur.consequent.push(this.parseStatement(null));
    }
  }
  this.exitScope();
  if (cur) {
    this.finishNode(cur, "SwitchCase");
  }
  this.next();
  this.labels.pop();
  return this.finishNode(node, "SwitchStatement");
};
pp$8.parseThrowStatement = function(node) {
  this.next();
  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) {
    this.raise(this.lastTokEnd, "Illegal newline after throw");
  }
  node.argument = this.parseExpression();
  this.semicolon();
  return this.finishNode(node, "ThrowStatement");
};
var empty$1 = [];
pp$8.parseCatchClauseParam = function() {
  var param = this.parseBindingAtom();
  var simple = param.type === "Identifier";
  this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
  this.checkLValPattern(param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
  this.expect(types$1.parenR);
  return param;
};
pp$8.parseTryStatement = function(node) {
  this.next();
  node.block = this.parseBlock();
  node.handler = null;
  if (this.type === types$1._catch) {
    var clause = this.startNode();
    this.next();
    if (this.eat(types$1.parenL)) {
      clause.param = this.parseCatchClauseParam();
    } else {
      if (this.options.ecmaVersion < 10) {
        this.unexpected();
      }
      clause.param = null;
      this.enterScope(0);
    }
    clause.body = this.parseBlock(false);
    this.exitScope();
    node.handler = this.finishNode(clause, "CatchClause");
  }
  node.finalizer = this.eat(types$1._finally) ? this.parseBlock() : null;
  if (!node.handler && !node.finalizer) {
    this.raise(node.start, "Missing catch or finally clause");
  }
  return this.finishNode(node, "TryStatement");
};
pp$8.parseVarStatement = function(node, kind, allowMissingInitializer) {
  this.next();
  this.parseVar(node, false, kind, allowMissingInitializer);
  this.semicolon();
  return this.finishNode(node, "VariableDeclaration");
};
pp$8.parseWhileStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("while");
  this.labels.pop();
  return this.finishNode(node, "WhileStatement");
};
pp$8.parseWithStatement = function(node) {
  if (this.strict) {
    this.raise(this.start, "'with' in strict mode");
  }
  this.next();
  node.object = this.parseParenExpression();
  node.body = this.parseStatement("with");
  return this.finishNode(node, "WithStatement");
};
pp$8.parseEmptyStatement = function(node) {
  this.next();
  return this.finishNode(node, "EmptyStatement");
};
pp$8.parseLabeledStatement = function(node, maybeName, expr, context) {
  for (var i$1 = 0, list = this.labels;i$1 < list.length; i$1 += 1) {
    var label = list[i$1];
    if (label.name === maybeName) {
      this.raise(expr.start, "Label '" + maybeName + "' is already declared");
    }
  }
  var kind = this.type.isLoop ? "loop" : this.type === types$1._switch ? "switch" : null;
  for (var i = this.labels.length - 1;i >= 0; i--) {
    var label$1 = this.labels[i];
    if (label$1.statementStart === node.start) {
      label$1.statementStart = this.start;
      label$1.kind = kind;
    } else {
      break;
    }
  }
  this.labels.push({ name: maybeName, kind, statementStart: this.start });
  node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
  this.labels.pop();
  node.label = expr;
  return this.finishNode(node, "LabeledStatement");
};
pp$8.parseExpressionStatement = function(node, expr) {
  node.expression = expr;
  this.semicolon();
  return this.finishNode(node, "ExpressionStatement");
};
pp$8.parseBlock = function(createNewLexicalScope, node, exitStrict) {
  if (createNewLexicalScope === undefined)
    createNewLexicalScope = true;
  if (node === undefined)
    node = this.startNode();
  node.body = [];
  this.expect(types$1.braceL);
  if (createNewLexicalScope) {
    this.enterScope(0);
  }
  while (this.type !== types$1.braceR) {
    var stmt = this.parseStatement(null);
    node.body.push(stmt);
  }
  if (exitStrict) {
    this.strict = false;
  }
  this.next();
  if (createNewLexicalScope) {
    this.exitScope();
  }
  return this.finishNode(node, "BlockStatement");
};
pp$8.parseFor = function(node, init) {
  node.init = init;
  this.expect(types$1.semi);
  node.test = this.type === types$1.semi ? null : this.parseExpression();
  this.expect(types$1.semi);
  node.update = this.type === types$1.parenR ? null : this.parseExpression();
  this.expect(types$1.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, "ForStatement");
};
pp$8.parseForIn = function(node, init) {
  var isForIn = this.type === types$1._in;
  this.next();
  if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.options.ecmaVersion < 8 || this.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
    this.raise(init.start, (isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer");
  }
  node.left = init;
  node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
  this.expect(types$1.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
};
pp$8.parseVar = function(node, isFor, kind, allowMissingInitializer) {
  node.declarations = [];
  node.kind = kind;
  for (;; ) {
    var decl = this.startNode();
    this.parseVarId(decl, kind);
    if (this.eat(types$1.eq)) {
      decl.init = this.parseMaybeAssign(isFor);
    } else if (!allowMissingInitializer && kind === "const" && !(this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
      this.unexpected();
    } else if (!allowMissingInitializer && (kind === "using" || kind === "await using") && this.options.ecmaVersion >= 17 && this.type !== types$1._in && !this.isContextual("of")) {
      this.raise(this.lastTokEnd, "Missing initializer in " + kind + " declaration");
    } else if (!allowMissingInitializer && decl.id.type !== "Identifier" && !(isFor && (this.type === types$1._in || this.isContextual("of")))) {
      this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
    } else {
      decl.init = null;
    }
    node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
    if (!this.eat(types$1.comma)) {
      break;
    }
  }
  return node;
};
pp$8.parseVarId = function(decl, kind) {
  decl.id = kind === "using" || kind === "await using" ? this.parseIdent() : this.parseBindingAtom();
  this.checkLValPattern(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
};
var FUNC_STATEMENT = 1;
var FUNC_HANGING_STATEMENT = 2;
var FUNC_NULLABLE_ID = 4;
pp$8.parseFunction = function(node, statement, allowExpressionBody, isAsync, forInit) {
  this.initFunction(node);
  if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
    if (this.type === types$1.star && statement & FUNC_HANGING_STATEMENT) {
      this.unexpected();
    }
    node.generator = this.eat(types$1.star);
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  if (statement & FUNC_STATEMENT) {
    node.id = statement & FUNC_NULLABLE_ID && this.type !== types$1.name ? null : this.parseIdent();
    if (node.id && !(statement & FUNC_HANGING_STATEMENT)) {
      this.checkLValSimple(node.id, this.strict || node.generator || node.async ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION);
    }
  }
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(node.async, node.generator));
  if (!(statement & FUNC_STATEMENT)) {
    node.id = this.type === types$1.name ? this.parseIdent() : null;
  }
  this.parseFunctionParams(node);
  this.parseFunctionBody(node, allowExpressionBody, false, forInit);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, statement & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression");
};
pp$8.parseFunctionParams = function(node) {
  this.expect(types$1.parenL);
  node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
};
pp$8.parseClass = function(node, isStatement) {
  this.next();
  var oldStrict = this.strict;
  this.strict = true;
  this.parseClassId(node, isStatement);
  this.parseClassSuper(node);
  var privateNameMap = this.enterClassBody();
  var classBody = this.startNode();
  var hadConstructor = false;
  classBody.body = [];
  this.expect(types$1.braceL);
  while (this.type !== types$1.braceR) {
    var element = this.parseClassElement(node.superClass !== null);
    if (element) {
      classBody.body.push(element);
      if (element.type === "MethodDefinition" && element.kind === "constructor") {
        if (hadConstructor) {
          this.raiseRecoverable(element.start, "Duplicate constructor in the same class");
        }
        hadConstructor = true;
      } else if (element.key && element.key.type === "PrivateIdentifier" && isPrivateNameConflicted(privateNameMap, element)) {
        this.raiseRecoverable(element.key.start, "Identifier '#" + element.key.name + "' has already been declared");
      }
    }
  }
  this.strict = oldStrict;
  this.next();
  node.body = this.finishNode(classBody, "ClassBody");
  this.exitClassBody();
  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
};
pp$8.parseClassElement = function(constructorAllowsSuper) {
  if (this.eat(types$1.semi)) {
    return null;
  }
  var ecmaVersion = this.options.ecmaVersion;
  var node = this.startNode();
  var keyName = "";
  var isGenerator = false;
  var isAsync = false;
  var kind = "method";
  var isStatic = false;
  if (this.eatContextual("static")) {
    if (ecmaVersion >= 13 && this.eat(types$1.braceL)) {
      this.parseClassStaticBlock(node);
      return node;
    }
    if (this.isClassElementNameStart() || this.type === types$1.star) {
      isStatic = true;
    } else {
      keyName = "static";
    }
  }
  node.static = isStatic;
  if (!keyName && ecmaVersion >= 8 && this.eatContextual("async")) {
    if ((this.isClassElementNameStart() || this.type === types$1.star) && !this.canInsertSemicolon()) {
      isAsync = true;
    } else {
      keyName = "async";
    }
  }
  if (!keyName && (ecmaVersion >= 9 || !isAsync) && this.eat(types$1.star)) {
    isGenerator = true;
  }
  if (!keyName && !isAsync && !isGenerator) {
    var lastValue = this.value;
    if (this.eatContextual("get") || this.eatContextual("set")) {
      if (this.isClassElementNameStart()) {
        kind = lastValue;
      } else {
        keyName = lastValue;
      }
    }
  }
  if (keyName) {
    node.computed = false;
    node.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc);
    node.key.name = keyName;
    this.finishNode(node.key, "Identifier");
  } else {
    this.parseClassElementName(node);
  }
  if (ecmaVersion < 13 || this.type === types$1.parenL || kind !== "method" || isGenerator || isAsync) {
    var isConstructor = !node.static && checkKeyName(node, "constructor");
    var allowsDirectSuper = isConstructor && constructorAllowsSuper;
    if (isConstructor && kind !== "method") {
      this.raise(node.key.start, "Constructor can't have get/set modifier");
    }
    node.kind = isConstructor ? "constructor" : kind;
    this.parseClassMethod(node, isGenerator, isAsync, allowsDirectSuper);
  } else {
    this.parseClassField(node);
  }
  return node;
};
pp$8.isClassElementNameStart = function() {
  return this.type === types$1.name || this.type === types$1.privateId || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword;
};
pp$8.parseClassElementName = function(element) {
  if (this.type === types$1.privateId) {
    if (this.value === "constructor") {
      this.raise(this.start, "Classes can't have an element named '#constructor'");
    }
    element.computed = false;
    element.key = this.parsePrivateIdent();
  } else {
    this.parsePropertyName(element);
  }
};
pp$8.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
  var key = method.key;
  if (method.kind === "constructor") {
    if (isGenerator) {
      this.raise(key.start, "Constructor can't be a generator");
    }
    if (isAsync) {
      this.raise(key.start, "Constructor can't be an async method");
    }
  } else if (method.static && checkKeyName(method, "prototype")) {
    this.raise(key.start, "Classes may not have a static property named prototype");
  }
  var value = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
  if (method.kind === "get" && value.params.length !== 0) {
    this.raiseRecoverable(value.start, "getter should have no params");
  }
  if (method.kind === "set" && value.params.length !== 1) {
    this.raiseRecoverable(value.start, "setter should have exactly one param");
  }
  if (method.kind === "set" && value.params[0].type === "RestElement") {
    this.raiseRecoverable(value.params[0].start, "Setter cannot use rest params");
  }
  return this.finishNode(method, "MethodDefinition");
};
pp$8.parseClassField = function(field) {
  if (checkKeyName(field, "constructor")) {
    this.raise(field.key.start, "Classes can't have a field named 'constructor'");
  } else if (field.static && checkKeyName(field, "prototype")) {
    this.raise(field.key.start, "Classes can't have a static field named 'prototype'");
  }
  if (this.eat(types$1.eq)) {
    this.enterScope(SCOPE_CLASS_FIELD_INIT | SCOPE_SUPER);
    field.value = this.parseMaybeAssign();
    this.exitScope();
  } else {
    field.value = null;
  }
  this.semicolon();
  return this.finishNode(field, "PropertyDefinition");
};
pp$8.parseClassStaticBlock = function(node) {
  node.body = [];
  var oldLabels = this.labels;
  this.labels = [];
  this.enterScope(SCOPE_CLASS_STATIC_BLOCK | SCOPE_SUPER);
  while (this.type !== types$1.braceR) {
    var stmt = this.parseStatement(null);
    node.body.push(stmt);
  }
  this.next();
  this.exitScope();
  this.labels = oldLabels;
  return this.finishNode(node, "StaticBlock");
};
pp$8.parseClassId = function(node, isStatement) {
  if (this.type === types$1.name) {
    node.id = this.parseIdent();
    if (isStatement) {
      this.checkLValSimple(node.id, BIND_LEXICAL, false);
    }
  } else {
    if (isStatement === true) {
      this.unexpected();
    }
    node.id = null;
  }
};
pp$8.parseClassSuper = function(node) {
  node.superClass = this.eat(types$1._extends) ? this.parseExprSubscripts(null, false) : null;
};
pp$8.enterClassBody = function() {
  var element = { declared: Object.create(null), used: [] };
  this.privateNameStack.push(element);
  return element.declared;
};
pp$8.exitClassBody = function() {
  var ref = this.privateNameStack.pop();
  var declared = ref.declared;
  var used = ref.used;
  if (!this.options.checkPrivateFields) {
    return;
  }
  var len = this.privateNameStack.length;
  var parent = len === 0 ? null : this.privateNameStack[len - 1];
  for (var i = 0;i < used.length; ++i) {
    var id = used[i];
    if (!hasOwn(declared, id.name)) {
      if (parent) {
        parent.used.push(id);
      } else {
        this.raiseRecoverable(id.start, "Private field '#" + id.name + "' must be declared in an enclosing class");
      }
    }
  }
};
function isPrivateNameConflicted(privateNameMap, element) {
  var name = element.key.name;
  var curr = privateNameMap[name];
  var next = "true";
  if (element.type === "MethodDefinition" && (element.kind === "get" || element.kind === "set")) {
    next = (element.static ? "s" : "i") + element.kind;
  }
  if (curr === "iget" && next === "iset" || curr === "iset" && next === "iget" || curr === "sget" && next === "sset" || curr === "sset" && next === "sget") {
    privateNameMap[name] = "true";
    return false;
  } else if (!curr) {
    privateNameMap[name] = next;
    return false;
  } else {
    return true;
  }
}
function checkKeyName(node, name) {
  var computed = node.computed;
  var key = node.key;
  return !computed && (key.type === "Identifier" && key.name === name || key.type === "Literal" && key.value === name);
}
pp$8.parseExportAllDeclaration = function(node, exports$1) {
  if (this.options.ecmaVersion >= 11) {
    if (this.eatContextual("as")) {
      node.exported = this.parseModuleExportName();
      this.checkExport(exports$1, node.exported, this.lastTokStart);
    } else {
      node.exported = null;
    }
  }
  this.expectContextual("from");
  if (this.type !== types$1.string) {
    this.unexpected();
  }
  node.source = this.parseExprAtom();
  if (this.options.ecmaVersion >= 16) {
    node.attributes = this.parseWithClause();
  }
  this.semicolon();
  return this.finishNode(node, "ExportAllDeclaration");
};
pp$8.parseExport = function(node, exports$1) {
  this.next();
  if (this.eat(types$1.star)) {
    return this.parseExportAllDeclaration(node, exports$1);
  }
  if (this.eat(types$1._default)) {
    this.checkExport(exports$1, "default", this.lastTokStart);
    node.declaration = this.parseExportDefaultDeclaration();
    return this.finishNode(node, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement()) {
    node.declaration = this.parseExportDeclaration(node);
    if (node.declaration.type === "VariableDeclaration") {
      this.checkVariableExport(exports$1, node.declaration.declarations);
    } else {
      this.checkExport(exports$1, node.declaration.id, node.declaration.id.start);
    }
    node.specifiers = [];
    node.source = null;
    if (this.options.ecmaVersion >= 16) {
      node.attributes = [];
    }
  } else {
    node.declaration = null;
    node.specifiers = this.parseExportSpecifiers(exports$1);
    if (this.eatContextual("from")) {
      if (this.type !== types$1.string) {
        this.unexpected();
      }
      node.source = this.parseExprAtom();
      if (this.options.ecmaVersion >= 16) {
        node.attributes = this.parseWithClause();
      }
    } else {
      for (var i = 0, list = node.specifiers;i < list.length; i += 1) {
        var spec = list[i];
        this.checkUnreserved(spec.local);
        this.checkLocalExport(spec.local);
        if (spec.local.type === "Literal") {
          this.raise(spec.local.start, "A string literal cannot be used as an exported binding without `from`.");
        }
      }
      node.source = null;
      if (this.options.ecmaVersion >= 16) {
        node.attributes = [];
      }
    }
    this.semicolon();
  }
  return this.finishNode(node, "ExportNamedDeclaration");
};
pp$8.parseExportDeclaration = function(node) {
  return this.parseStatement(null);
};
pp$8.parseExportDefaultDeclaration = function() {
  var isAsync;
  if (this.type === types$1._function || (isAsync = this.isAsyncFunction())) {
    var fNode = this.startNode();
    this.next();
    if (isAsync) {
      this.next();
    }
    return this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
  } else if (this.type === types$1._class) {
    var cNode = this.startNode();
    return this.parseClass(cNode, "nullableID");
  } else {
    var declaration = this.parseMaybeAssign();
    this.semicolon();
    return declaration;
  }
};
pp$8.checkExport = function(exports$1, name, pos) {
  if (!exports$1) {
    return;
  }
  if (typeof name !== "string") {
    name = name.type === "Identifier" ? name.name : name.value;
  }
  if (hasOwn(exports$1, name)) {
    this.raiseRecoverable(pos, "Duplicate export '" + name + "'");
  }
  exports$1[name] = true;
};
pp$8.checkPatternExport = function(exports$1, pat) {
  var type = pat.type;
  if (type === "Identifier") {
    this.checkExport(exports$1, pat, pat.start);
  } else if (type === "ObjectPattern") {
    for (var i = 0, list = pat.properties;i < list.length; i += 1) {
      var prop = list[i];
      this.checkPatternExport(exports$1, prop);
    }
  } else if (type === "ArrayPattern") {
    for (var i$1 = 0, list$1 = pat.elements;i$1 < list$1.length; i$1 += 1) {
      var elt = list$1[i$1];
      if (elt) {
        this.checkPatternExport(exports$1, elt);
      }
    }
  } else if (type === "Property") {
    this.checkPatternExport(exports$1, pat.value);
  } else if (type === "AssignmentPattern") {
    this.checkPatternExport(exports$1, pat.left);
  } else if (type === "RestElement") {
    this.checkPatternExport(exports$1, pat.argument);
  }
};
pp$8.checkVariableExport = function(exports$1, decls) {
  if (!exports$1) {
    return;
  }
  for (var i = 0, list = decls;i < list.length; i += 1) {
    var decl = list[i];
    this.checkPatternExport(exports$1, decl.id);
  }
};
pp$8.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
pp$8.parseExportSpecifier = function(exports$1) {
  var node = this.startNode();
  node.local = this.parseModuleExportName();
  node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local;
  this.checkExport(exports$1, node.exported, node.exported.start);
  return this.finishNode(node, "ExportSpecifier");
};
pp$8.parseExportSpecifiers = function(exports$1) {
  var nodes = [], first = true;
  this.expect(types$1.braceL);
  while (!this.eat(types$1.braceR)) {
    if (!first) {
      this.expect(types$1.comma);
      if (this.afterTrailingComma(types$1.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    nodes.push(this.parseExportSpecifier(exports$1));
  }
  return nodes;
};
pp$8.parseImport = function(node) {
  this.next();
  if (this.type === types$1.string) {
    node.specifiers = empty$1;
    node.source = this.parseExprAtom();
  } else {
    node.specifiers = this.parseImportSpecifiers();
    this.expectContextual("from");
    node.source = this.type === types$1.string ? this.parseExprAtom() : this.unexpected();
  }
  if (this.options.ecmaVersion >= 16) {
    node.attributes = this.parseWithClause();
  }
  this.semicolon();
  return this.finishNode(node, "ImportDeclaration");
};
pp$8.parseImportSpecifier = function() {
  var node = this.startNode();
  node.imported = this.parseModuleExportName();
  if (this.eatContextual("as")) {
    node.local = this.parseIdent();
  } else {
    this.checkUnreserved(node.imported);
    node.local = node.imported;
  }
  this.checkLValSimple(node.local, BIND_LEXICAL);
  return this.finishNode(node, "ImportSpecifier");
};
pp$8.parseImportDefaultSpecifier = function() {
  var node = this.startNode();
  node.local = this.parseIdent();
  this.checkLValSimple(node.local, BIND_LEXICAL);
  return this.finishNode(node, "ImportDefaultSpecifier");
};
pp$8.parseImportNamespaceSpecifier = function() {
  var node = this.startNode();
  this.next();
  this.expectContextual("as");
  node.local = this.parseIdent();
  this.checkLValSimple(node.local, BIND_LEXICAL);
  return this.finishNode(node, "ImportNamespaceSpecifier");
};
pp$8.parseImportSpecifiers = function() {
  var nodes = [], first = true;
  if (this.type === types$1.name) {
    nodes.push(this.parseImportDefaultSpecifier());
    if (!this.eat(types$1.comma)) {
      return nodes;
    }
  }
  if (this.type === types$1.star) {
    nodes.push(this.parseImportNamespaceSpecifier());
    return nodes;
  }
  this.expect(types$1.braceL);
  while (!this.eat(types$1.braceR)) {
    if (!first) {
      this.expect(types$1.comma);
      if (this.afterTrailingComma(types$1.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    nodes.push(this.parseImportSpecifier());
  }
  return nodes;
};
pp$8.parseWithClause = function() {
  var nodes = [];
  if (!this.eat(types$1._with)) {
    return nodes;
  }
  this.expect(types$1.braceL);
  var attributeKeys = {};
  var first = true;
  while (!this.eat(types$1.braceR)) {
    if (!first) {
      this.expect(types$1.comma);
      if (this.afterTrailingComma(types$1.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var attr = this.parseImportAttribute();
    var keyName = attr.key.type === "Identifier" ? attr.key.name : attr.key.value;
    if (hasOwn(attributeKeys, keyName)) {
      this.raiseRecoverable(attr.key.start, "Duplicate attribute key '" + keyName + "'");
    }
    attributeKeys[keyName] = true;
    nodes.push(attr);
  }
  return nodes;
};
pp$8.parseImportAttribute = function() {
  var node = this.startNode();
  node.key = this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
  this.expect(types$1.colon);
  if (this.type !== types$1.string) {
    this.unexpected();
  }
  node.value = this.parseExprAtom();
  return this.finishNode(node, "ImportAttribute");
};
pp$8.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === types$1.string) {
    var stringLiteral = this.parseLiteral(this.value);
    if (loneSurrogate.test(stringLiteral.value)) {
      this.raise(stringLiteral.start, "An export name cannot include a lone surrogate.");
    }
    return stringLiteral;
  }
  return this.parseIdent(true);
};
pp$8.adaptDirectivePrologue = function(statements) {
  for (var i = 0;i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
    statements[i].directive = statements[i].expression.raw.slice(1, -1);
  }
};
pp$8.isDirectiveCandidate = function(statement) {
  return this.options.ecmaVersion >= 5 && statement.type === "ExpressionStatement" && statement.expression.type === "Literal" && typeof statement.expression.value === "string" && (this.input[statement.start] === '"' || this.input[statement.start] === "'");
};
var pp$7 = Parser.prototype;
pp$7.toAssignable = function(node, isBinding, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 6 && node) {
    switch (node.type) {
      case "Identifier":
        if (this.inAsync && node.name === "await") {
          this.raise(node.start, "Cannot use 'await' as identifier inside an async function");
        }
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        node.type = "ObjectPattern";
        if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        for (var i = 0, list = node.properties;i < list.length; i += 1) {
          var prop = list[i];
          this.toAssignable(prop, isBinding);
          if (prop.type === "RestElement" && (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")) {
            this.raise(prop.argument.start, "Unexpected token");
          }
        }
        break;
      case "Property":
        if (node.kind !== "init") {
          this.raise(node.key.start, "Object pattern can't contain getter or setter");
        }
        this.toAssignable(node.value, isBinding);
        break;
      case "ArrayExpression":
        node.type = "ArrayPattern";
        if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        this.toAssignableList(node.elements, isBinding);
        break;
      case "SpreadElement":
        node.type = "RestElement";
        this.toAssignable(node.argument, isBinding);
        if (node.argument.type === "AssignmentPattern") {
          this.raise(node.argument.start, "Rest elements cannot have a default value");
        }
        break;
      case "AssignmentExpression":
        if (node.operator !== "=") {
          this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
        }
        node.type = "AssignmentPattern";
        delete node.operator;
        this.toAssignable(node.left, isBinding);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(node.expression, isBinding, refDestructuringErrors);
        break;
      case "ChainExpression":
        this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!isBinding) {
          break;
        }
      default:
        this.raise(node.start, "Assigning to rvalue");
    }
  } else if (refDestructuringErrors) {
    this.checkPatternErrors(refDestructuringErrors, true);
  }
  return node;
};
pp$7.toAssignableList = function(exprList, isBinding) {
  var end = exprList.length;
  for (var i = 0;i < end; i++) {
    var elt = exprList[i];
    if (elt) {
      this.toAssignable(elt, isBinding);
    }
  }
  if (end) {
    var last = exprList[end - 1];
    if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier") {
      this.unexpected(last.argument.start);
    }
  }
  return exprList;
};
pp$7.parseSpread = function(refDestructuringErrors) {
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
  return this.finishNode(node, "SpreadElement");
};
pp$7.parseRestBinding = function() {
  var node = this.startNode();
  this.next();
  if (this.options.ecmaVersion === 6 && this.type !== types$1.name) {
    this.unexpected();
  }
  node.argument = this.parseBindingAtom();
  return this.finishNode(node, "RestElement");
};
pp$7.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6) {
    switch (this.type) {
      case types$1.bracketL:
        var node = this.startNode();
        this.next();
        node.elements = this.parseBindingList(types$1.bracketR, true, true);
        return this.finishNode(node, "ArrayPattern");
      case types$1.braceL:
        return this.parseObj(true);
    }
  }
  return this.parseIdent();
};
pp$7.parseBindingList = function(close, allowEmpty, allowTrailingComma, allowModifiers) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (first) {
      first = false;
    } else {
      this.expect(types$1.comma);
    }
    if (allowEmpty && this.type === types$1.comma) {
      elts.push(null);
    } else if (allowTrailingComma && this.afterTrailingComma(close)) {
      break;
    } else if (this.type === types$1.ellipsis) {
      var rest = this.parseRestBinding();
      this.parseBindingListItem(rest);
      elts.push(rest);
      if (this.type === types$1.comma) {
        this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
      }
      this.expect(close);
      break;
    } else {
      elts.push(this.parseAssignableListItem(allowModifiers));
    }
  }
  return elts;
};
pp$7.parseAssignableListItem = function(allowModifiers) {
  var elem = this.parseMaybeDefault(this.start, this.startLoc);
  this.parseBindingListItem(elem);
  return elem;
};
pp$7.parseBindingListItem = function(param) {
  return param;
};
pp$7.parseMaybeDefault = function(startPos, startLoc, left) {
  left = left || this.parseBindingAtom();
  if (this.options.ecmaVersion < 6 || !this.eat(types$1.eq)) {
    return left;
  }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.right = this.parseMaybeAssign();
  return this.finishNode(node, "AssignmentPattern");
};
pp$7.checkLValSimple = function(expr, bindingType, checkClashes) {
  if (bindingType === undefined)
    bindingType = BIND_NONE;
  var isBind = bindingType !== BIND_NONE;
  switch (expr.type) {
    case "Identifier":
      if (this.strict && this.reservedWordsStrictBind.test(expr.name)) {
        this.raiseRecoverable(expr.start, (isBind ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
      }
      if (isBind) {
        if (bindingType === BIND_LEXICAL && expr.name === "let") {
          this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name");
        }
        if (checkClashes) {
          if (hasOwn(checkClashes, expr.name)) {
            this.raiseRecoverable(expr.start, "Argument name clash");
          }
          checkClashes[expr.name] = true;
        }
        if (bindingType !== BIND_OUTSIDE) {
          this.declareName(expr.name, bindingType, expr.start);
        }
      }
      break;
    case "ChainExpression":
      this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      if (isBind) {
        this.raiseRecoverable(expr.start, "Binding member expression");
      }
      break;
    case "ParenthesizedExpression":
      if (isBind) {
        this.raiseRecoverable(expr.start, "Binding parenthesized expression");
      }
      return this.checkLValSimple(expr.expression, bindingType, checkClashes);
    default:
      this.raise(expr.start, (isBind ? "Binding" : "Assigning to") + " rvalue");
  }
};
pp$7.checkLValPattern = function(expr, bindingType, checkClashes) {
  if (bindingType === undefined)
    bindingType = BIND_NONE;
  switch (expr.type) {
    case "ObjectPattern":
      for (var i = 0, list = expr.properties;i < list.length; i += 1) {
        var prop = list[i];
        this.checkLValInnerPattern(prop, bindingType, checkClashes);
      }
      break;
    case "ArrayPattern":
      for (var i$1 = 0, list$1 = expr.elements;i$1 < list$1.length; i$1 += 1) {
        var elem = list$1[i$1];
        if (elem) {
          this.checkLValInnerPattern(elem, bindingType, checkClashes);
        }
      }
      break;
    default:
      this.checkLValSimple(expr, bindingType, checkClashes);
  }
};
pp$7.checkLValInnerPattern = function(expr, bindingType, checkClashes) {
  if (bindingType === undefined)
    bindingType = BIND_NONE;
  switch (expr.type) {
    case "Property":
      this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(expr.left, bindingType, checkClashes);
      break;
    case "RestElement":
      this.checkLValPattern(expr.argument, bindingType, checkClashes);
      break;
    default:
      this.checkLValPattern(expr, bindingType, checkClashes);
  }
};
var TokContext = function TokContext(token, isExpr, preserveSpace, override, generator) {
  this.token = token;
  this.isExpr = !!isExpr;
  this.preserveSpace = !!preserveSpace;
  this.override = override;
  this.generator = !!generator;
};
var types2 = {
  b_stat: new TokContext("{", false),
  b_expr: new TokContext("{", true),
  b_tmpl: new TokContext("${", false),
  p_stat: new TokContext("(", false),
  p_expr: new TokContext("(", true),
  q_tmpl: new TokContext("`", true, true, function(p) {
    return p.tryReadTemplateToken();
  }),
  f_stat: new TokContext("function", false),
  f_expr: new TokContext("function", true),
  f_expr_gen: new TokContext("function", true, false, null, true),
  f_gen: new TokContext("function", false, false, null, true)
};
var pp$6 = Parser.prototype;
pp$6.initialContext = function() {
  return [types2.b_stat];
};
pp$6.curContext = function() {
  return this.context[this.context.length - 1];
};
pp$6.braceIsBlock = function(prevType) {
  var parent = this.curContext();
  if (parent === types2.f_expr || parent === types2.f_stat) {
    return true;
  }
  if (prevType === types$1.colon && (parent === types2.b_stat || parent === types2.b_expr)) {
    return !parent.isExpr;
  }
  if (prevType === types$1._return || prevType === types$1.name && this.exprAllowed) {
    return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
  }
  if (prevType === types$1._else || prevType === types$1.semi || prevType === types$1.eof || prevType === types$1.parenR || prevType === types$1.arrow) {
    return true;
  }
  if (prevType === types$1.braceL) {
    return parent === types2.b_stat;
  }
  if (prevType === types$1._var || prevType === types$1._const || prevType === types$1.name) {
    return false;
  }
  return !this.exprAllowed;
};
pp$6.inGeneratorContext = function() {
  for (var i = this.context.length - 1;i >= 1; i--) {
    var context = this.context[i];
    if (context.token === "function") {
      return context.generator;
    }
  }
  return false;
};
pp$6.updateContext = function(prevType) {
  var update, type = this.type;
  if (type.keyword && prevType === types$1.dot) {
    this.exprAllowed = false;
  } else if (update = type.updateContext) {
    update.call(this, prevType);
  } else {
    this.exprAllowed = type.beforeExpr;
  }
};
pp$6.overrideContext = function(tokenCtx) {
  if (this.curContext() !== tokenCtx) {
    this.context[this.context.length - 1] = tokenCtx;
  }
};
types$1.parenR.updateContext = types$1.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = true;
    return;
  }
  var out = this.context.pop();
  if (out === types2.b_stat && this.curContext().token === "function") {
    out = this.context.pop();
  }
  this.exprAllowed = !out.isExpr;
};
types$1.braceL.updateContext = function(prevType) {
  this.context.push(this.braceIsBlock(prevType) ? types2.b_stat : types2.b_expr);
  this.exprAllowed = true;
};
types$1.dollarBraceL.updateContext = function() {
  this.context.push(types2.b_tmpl);
  this.exprAllowed = true;
};
types$1.parenL.updateContext = function(prevType) {
  var statementParens = prevType === types$1._if || prevType === types$1._for || prevType === types$1._with || prevType === types$1._while;
  this.context.push(statementParens ? types2.p_stat : types2.p_expr);
  this.exprAllowed = true;
};
types$1.incDec.updateContext = function() {};
types$1._function.updateContext = types$1._class.updateContext = function(prevType) {
  if (prevType.beforeExpr && prevType !== types$1._else && !(prevType === types$1.semi && this.curContext() !== types2.p_stat) && !(prevType === types$1._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) && !((prevType === types$1.colon || prevType === types$1.braceL) && this.curContext() === types2.b_stat)) {
    this.context.push(types2.f_expr);
  } else {
    this.context.push(types2.f_stat);
  }
  this.exprAllowed = false;
};
types$1.colon.updateContext = function() {
  if (this.curContext().token === "function") {
    this.context.pop();
  }
  this.exprAllowed = true;
};
types$1.backQuote.updateContext = function() {
  if (this.curContext() === types2.q_tmpl) {
    this.context.pop();
  } else {
    this.context.push(types2.q_tmpl);
  }
  this.exprAllowed = false;
};
types$1.star.updateContext = function(prevType) {
  if (prevType === types$1._function) {
    var index = this.context.length - 1;
    if (this.context[index] === types2.f_expr) {
      this.context[index] = types2.f_expr_gen;
    } else {
      this.context[index] = types2.f_gen;
    }
  }
  this.exprAllowed = true;
};
types$1.name.updateContext = function(prevType) {
  var allowed = false;
  if (this.options.ecmaVersion >= 6 && prevType !== types$1.dot) {
    if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) {
      allowed = true;
    }
  }
  this.exprAllowed = allowed;
};
var pp$5 = Parser.prototype;
pp$5.checkPropClash = function(prop, propHash, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement") {
    return;
  }
  if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand)) {
    return;
  }
  var key = prop.key;
  var name;
  switch (key.type) {
    case "Identifier":
      name = key.name;
      break;
    case "Literal":
      name = String(key.value);
      break;
    default:
      return;
  }
  var kind = prop.kind;
  if (this.options.ecmaVersion >= 6) {
    if (name === "__proto__" && kind === "init") {
      if (propHash.proto) {
        if (refDestructuringErrors) {
          if (refDestructuringErrors.doubleProto < 0) {
            refDestructuringErrors.doubleProto = key.start;
          }
        } else {
          this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
        }
      }
      propHash.proto = true;
    }
    return;
  }
  name = "$" + name;
  var other = propHash[name];
  if (other) {
    var redefinition;
    if (kind === "init") {
      redefinition = this.strict && other.init || other.get || other.set;
    } else {
      redefinition = other.init || other[kind];
    }
    if (redefinition) {
      this.raiseRecoverable(key.start, "Redefinition of property");
    }
  } else {
    other = propHash[name] = {
      init: false,
      get: false,
      set: false
    };
  }
  other[kind] = true;
};
pp$5.parseExpression = function(forInit, refDestructuringErrors) {
  var this$1$1 = this;
  return this.catchStackOverflow(function() {
    var { start: startPos, startLoc } = this$1$1;
    var expr = this$1$1.parseMaybeAssign(forInit, refDestructuringErrors);
    if (this$1$1.type === types$1.comma) {
      var node = this$1$1.startNodeAt(startPos, startLoc);
      node.expressions = [expr];
      while (this$1$1.eat(types$1.comma)) {
        node.expressions.push(this$1$1.parseMaybeAssign(forInit, refDestructuringErrors));
      }
      return this$1$1.finishNode(node, "SequenceExpression");
    }
    return expr;
  });
};
pp$5.parseMaybeAssign = function(forInit, refDestructuringErrors, afterLeftParse) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) {
      return this.parseYield(forInit);
    } else {
      this.exprAllowed = false;
    }
  }
  var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldDoubleProto = -1;
  if (refDestructuringErrors) {
    oldParenAssign = refDestructuringErrors.parenthesizedAssign;
    oldTrailingComma = refDestructuringErrors.trailingComma;
    oldDoubleProto = refDestructuringErrors.doubleProto;
    refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
  } else {
    refDestructuringErrors = new DestructuringErrors;
    ownDestructuringErrors = true;
  }
  var startPos = this.start, startLoc = this.startLoc;
  if (this.type === types$1.parenL || this.type === types$1.name) {
    this.potentialArrowAt = this.start;
    this.potentialArrowInForAwait = forInit === "await";
  }
  var left = this.parseMaybeConditional(forInit, refDestructuringErrors);
  if (afterLeftParse) {
    left = afterLeftParse.call(this, left, startPos, startLoc);
  }
  if (this.type.isAssign) {
    var node = this.startNodeAt(startPos, startLoc);
    node.operator = this.value;
    if (this.type === types$1.eq) {
      left = this.toAssignable(left, false, refDestructuringErrors);
    }
    if (!ownDestructuringErrors) {
      refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
      if (refDestructuringErrors.shorthandAssign >= left.start) {
        refDestructuringErrors.shorthandAssign = -1;
      }
      if (refDestructuringErrors.doubleProto >= left.start) {
        refDestructuringErrors.doubleProto = -1;
      }
    }
    if (this.type === types$1.eq) {
      this.checkLValPattern(left);
    } else {
      this.checkLValSimple(left);
    }
    node.left = left;
    this.next();
    node.right = this.parseMaybeAssign(forInit);
    if (oldDoubleProto > -1) {
      refDestructuringErrors.doubleProto = oldDoubleProto;
    }
    return this.finishNode(node, "AssignmentExpression");
  } else {
    if (ownDestructuringErrors) {
      this.checkExpressionErrors(refDestructuringErrors, true);
    }
  }
  if (oldParenAssign > -1) {
    refDestructuringErrors.parenthesizedAssign = oldParenAssign;
  }
  if (oldTrailingComma > -1) {
    refDestructuringErrors.trailingComma = oldTrailingComma;
  }
  return left;
};
pp$5.parseMaybeConditional = function(forInit, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprOps(forInit, refDestructuringErrors);
  if (this.checkExpressionErrors(refDestructuringErrors)) {
    return expr;
  }
  if (!(expr.type === "ArrowFunctionExpression" && expr.start === startPos) && this.eat(types$1.question)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.test = expr;
    node.consequent = this.parseMaybeAssign();
    this.expect(types$1.colon);
    node.alternate = this.parseMaybeAssign(forInit);
    return this.finishNode(node, "ConditionalExpression");
  }
  return expr;
};
pp$5.parseExprOps = function(forInit, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeUnary(refDestructuringErrors, false, false, forInit);
  if (this.checkExpressionErrors(refDestructuringErrors)) {
    return expr;
  }
  return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, forInit);
};
pp$5.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, forInit) {
  var prec = this.type.binop;
  if (prec != null && (!forInit || this.type !== types$1._in)) {
    if (prec > minPrec) {
      var logical = this.type === types$1.logicalOR || this.type === types$1.logicalAND;
      var coalesce = this.type === types$1.coalesce;
      if (coalesce) {
        prec = types$1.logicalAND.binop;
      }
      var op = this.value;
      this.next();
      var startPos = this.start, startLoc = this.startLoc;
      var right = this.parseExprOp(this.parseMaybeUnary(null, false, false, forInit), startPos, startLoc, prec, forInit);
      var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
      if (logical && this.type === types$1.coalesce || coalesce && (this.type === types$1.logicalOR || this.type === types$1.logicalAND)) {
        this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
      }
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, forInit);
    }
  }
  return left;
};
pp$5.buildBinary = function(startPos, startLoc, left, right, op, logical) {
  if (right.type === "PrivateIdentifier") {
    this.raise(right.start, "Private identifier can only be left side of binary expression");
  }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.operator = op;
  node.right = right;
  return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression");
};
pp$5.parseMaybeUnary = function(refDestructuringErrors, sawUnary, incDec, forInit) {
  var startPos = this.start, startLoc = this.startLoc, expr;
  if (this.isContextual("await") && this.canAwait) {
    expr = this.parseAwait(forInit);
    sawUnary = true;
  } else if (this.type.prefix) {
    var node = this.startNode(), update = this.type === types$1.incDec;
    node.operator = this.value;
    node.prefix = true;
    this.next();
    node.argument = this.parseMaybeUnary(null, true, update, forInit);
    this.checkExpressionErrors(refDestructuringErrors, true);
    if (update) {
      this.checkLValSimple(node.argument);
    } else if (this.strict && node.operator === "delete" && isLocalVariableAccess(node.argument)) {
      this.raiseRecoverable(node.start, "Deleting local variable in strict mode");
    } else if (node.operator === "delete" && isPrivateFieldAccess(node.argument)) {
      this.raiseRecoverable(node.start, "Private fields can not be deleted");
    } else {
      sawUnary = true;
    }
    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
  } else if (!sawUnary && this.type === types$1.privateId) {
    if ((forInit || this.privateNameStack.length === 0) && this.options.checkPrivateFields) {
      this.unexpected();
    }
    expr = this.parsePrivateIdent();
    if (this.type !== types$1._in) {
      this.unexpected();
    }
  } else {
    expr = this.parseExprSubscripts(refDestructuringErrors, forInit);
    if (this.checkExpressionErrors(refDestructuringErrors)) {
      return expr;
    }
    while (this.type.postfix && !this.canInsertSemicolon()) {
      var node$1 = this.startNodeAt(startPos, startLoc);
      node$1.operator = this.value;
      node$1.prefix = false;
      node$1.argument = expr;
      this.checkLValSimple(expr);
      this.next();
      expr = this.finishNode(node$1, "UpdateExpression");
    }
  }
  if (!incDec && !(expr.type === "ArrowFunctionExpression" && expr.start === startPos) && this.eat(types$1.starstar)) {
    if (sawUnary) {
      this.unexpected(this.lastTokStart);
    } else {
      return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false, false, forInit), "**", false);
    }
  } else {
    return expr;
  }
};
function isLocalVariableAccess(node) {
  return node.type === "Identifier" || node.type === "ParenthesizedExpression" && isLocalVariableAccess(node.expression);
}
function isPrivateFieldAccess(node) {
  return node.type === "MemberExpression" && node.property.type === "PrivateIdentifier" || node.type === "ChainExpression" && isPrivateFieldAccess(node.expression) || node.type === "ParenthesizedExpression" && isPrivateFieldAccess(node.expression);
}
pp$5.parseExprSubscripts = function(refDestructuringErrors, forInit) {
  var startPos = this.start, startLoc = this.startLoc;
  var oldDoubleProto = -1, oldShorthandAssign = -1;
  if (refDestructuringErrors) {
    oldDoubleProto = refDestructuringErrors.doubleProto;
    oldShorthandAssign = refDestructuringErrors.shorthandAssign;
    refDestructuringErrors.doubleProto = refDestructuringErrors.shorthandAssign = -1;
  }
  var expr = this.parseExprAtom(refDestructuringErrors, forInit);
  if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") {
    return expr;
  }
  var result = this.parseSubscripts(expr, startPos, startLoc, false, forInit);
  if (refDestructuringErrors) {
    if (result.end > expr.end) {
      this.checkExpressionErrors(refDestructuringErrors, true);
      if (refDestructuringErrors.parenthesizedAssign >= result.start) {
        refDestructuringErrors.parenthesizedAssign = -1;
      }
      if (refDestructuringErrors.parenthesizedBind >= result.start) {
        refDestructuringErrors.parenthesizedBind = -1;
      }
      if (refDestructuringErrors.trailingComma >= result.start) {
        refDestructuringErrors.trailingComma = -1;
      }
    }
    if (oldDoubleProto > -1) {
      refDestructuringErrors.doubleProto = oldDoubleProto;
    }
    if (oldShorthandAssign > -1) {
      refDestructuringErrors.shorthandAssign = oldShorthandAssign;
    }
  }
  return result;
};
pp$5.parseSubscripts = function(base, startPos, startLoc, noCalls, forInit) {
  var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" && this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && this.potentialArrowAt === base.start;
  var optionalChained = false;
  while (true) {
    var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit);
    if (element.optional) {
      optionalChained = true;
    }
    if (element.end === base.end || element.type === "ArrowFunctionExpression") {
      if (optionalChained) {
        var chainNode = this.startNodeAt(startPos, startLoc);
        chainNode.expression = element;
        element = this.finishNode(chainNode, "ChainExpression");
      }
      return element;
    }
    base = element;
    maybeAsyncArrow = false;
  }
};
pp$5.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(types$1.arrow);
};
pp$5.parseSubscriptAsyncArrow = function(startPos, startLoc, exprList, forInit) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true, forInit);
};
pp$5.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit) {
  var optionalSupported = this.options.ecmaVersion >= 11;
  var optional = optionalSupported && this.eat(types$1.questionDot);
  if (noCalls && optional) {
    this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  }
  var computed = this.eat(types$1.bracketL);
  if (computed || optional && this.type !== types$1.parenL && this.type !== types$1.backQuote || this.eat(types$1.dot)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.object = base;
    if (computed) {
      node.property = this.parseExpression();
      this.expect(types$1.bracketR);
    } else if (this.type === types$1.privateId && base.type !== "Super") {
      node.property = this.parsePrivateIdent();
    } else {
      node.property = this.parseIdent(this.options.allowReserved !== "never");
    }
    node.computed = !!computed;
    if (optionalSupported) {
      node.optional = optional;
    }
    base = this.finishNode(node, "MemberExpression");
  } else if (!noCalls && this.eat(types$1.parenL)) {
    var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    var exprList = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
    if (maybeAsyncArrow && !optional && this.shouldParseAsyncArrow()) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      if (this.awaitIdentPos > 0) {
        this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
      }
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      this.awaitIdentPos = oldAwaitIdentPos;
      return this.parseSubscriptAsyncArrow(startPos, startLoc, exprList, forInit);
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
    var node$1 = this.startNodeAt(startPos, startLoc);
    node$1.callee = base;
    node$1.arguments = exprList;
    if (optionalSupported) {
      node$1.optional = optional;
    }
    base = this.finishNode(node$1, "CallExpression");
  } else if (this.type === types$1.backQuote) {
    if (optional || optionalChained) {
      this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    }
    var node$2 = this.startNodeAt(startPos, startLoc);
    node$2.tag = base;
    node$2.quasi = this.parseTemplate({ isTagged: true });
    base = this.finishNode(node$2, "TaggedTemplateExpression");
  }
  return base;
};
pp$5.parseExprAtom = function(refDestructuringErrors, forInit, forNew) {
  if (this.type === types$1.slash) {
    this.readRegexp();
  }
  var node, canBeArrow = this.potentialArrowAt === this.start;
  switch (this.type) {
    case types$1._super:
      if (!this.allowSuper) {
        this.raise(this.start, "'super' keyword outside a method");
      }
      node = this.startNode();
      this.next();
      if (this.type === types$1.parenL && !this.allowDirectSuper) {
        this.raise(node.start, "super() call outside constructor of a subclass");
      }
      if (this.type !== types$1.dot && this.type !== types$1.bracketL && this.type !== types$1.parenL) {
        this.unexpected();
      }
      return this.finishNode(node, "Super");
    case types$1._this:
      node = this.startNode();
      this.next();
      return this.finishNode(node, "ThisExpression");
    case types$1.name:
      var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
      var id = this.parseIdent(false);
      if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types$1._function)) {
        this.overrideContext(types2.f_expr);
        return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true, forInit);
      }
      if (canBeArrow && !this.canInsertSemicolon()) {
        if (this.eat(types$1.arrow)) {
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false, forInit);
        }
        if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types$1.name && !containsEsc && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
          id = this.parseIdent(false);
          if (this.canInsertSemicolon() || !this.eat(types$1.arrow)) {
            this.unexpected();
          }
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true, forInit);
        }
      }
      return id;
    case types$1.regexp:
      var value = this.value;
      node = this.parseLiteral(value.value);
      node.regex = { pattern: value.pattern, flags: value.flags };
      return node;
    case types$1.num:
    case types$1.string:
      return this.parseLiteral(this.value);
    case types$1._null:
    case types$1._true:
    case types$1._false:
      node = this.startNode();
      node.value = this.type === types$1._null ? null : this.type === types$1._true;
      node.raw = this.type.keyword;
      this.next();
      return this.finishNode(node, "Literal");
    case types$1.parenL:
      var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow, forInit);
      if (refDestructuringErrors) {
        if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr)) {
          refDestructuringErrors.parenthesizedAssign = start;
        }
        if (refDestructuringErrors.parenthesizedBind < 0) {
          refDestructuringErrors.parenthesizedBind = start;
        }
      }
      return expr;
    case types$1.bracketL:
      node = this.startNode();
      this.next();
      node.elements = this.parseExprList(types$1.bracketR, true, true, refDestructuringErrors);
      return this.finishNode(node, "ArrayExpression");
    case types$1.braceL:
      this.overrideContext(types2.b_expr);
      return this.parseObj(false, refDestructuringErrors);
    case types$1._function:
      node = this.startNode();
      this.next();
      return this.parseFunction(node, 0);
    case types$1._class:
      return this.parseClass(this.startNode(), false);
    case types$1._new:
      return this.parseNew();
    case types$1.backQuote:
      return this.parseTemplate();
    case types$1._import:
      if (this.options.ecmaVersion >= 11) {
        return this.parseExprImport(forNew);
      } else {
        return this.unexpected();
      }
    default:
      return this.parseExprAtomDefault();
  }
};
pp$5.parseExprAtomDefault = function() {
  this.unexpected();
};
pp$5.parseExprImport = function(forNew) {
  var node = this.startNode();
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  }
  this.next();
  if (this.type === types$1.parenL && !forNew) {
    return this.parseDynamicImport(node);
  } else if (this.type === types$1.dot) {
    var meta = this.startNodeAt(node.start, node.loc && node.loc.start);
    meta.name = "import";
    node.meta = this.finishNode(meta, "Identifier");
    return this.parseImportMeta(node);
  } else {
    this.unexpected();
  }
};
pp$5.parseDynamicImport = function(node) {
  this.next();
  node.source = this.parseMaybeAssign();
  if (this.options.ecmaVersion >= 16) {
    if (!this.eat(types$1.parenR)) {
      this.expect(types$1.comma);
      if (!this.afterTrailingComma(types$1.parenR)) {
        node.options = this.parseMaybeAssign();
        if (!this.eat(types$1.parenR)) {
          this.expect(types$1.comma);
          if (!this.afterTrailingComma(types$1.parenR)) {
            this.unexpected();
          }
        }
      } else {
        node.options = null;
      }
    } else {
      node.options = null;
    }
  } else {
    if (!this.eat(types$1.parenR)) {
      var errorPos = this.start;
      if (this.eat(types$1.comma) && this.eat(types$1.parenR)) {
        this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
      } else {
        this.unexpected(errorPos);
      }
    }
  }
  return this.finishNode(node, "ImportExpression");
};
pp$5.parseImportMeta = function(node) {
  this.next();
  var containsEsc = this.containsEsc;
  node.property = this.parseIdent(true);
  if (node.property.name !== "meta") {
    this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'");
  }
  if (containsEsc) {
    this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters");
  }
  if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere) {
    this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module");
  }
  return this.finishNode(node, "MetaProperty");
};
pp$5.parseLiteral = function(value) {
  var node = this.startNode();
  node.value = value;
  node.raw = this.input.slice(this.start, this.end);
  if (node.raw.charCodeAt(node.raw.length - 1) === 110) {
    node.bigint = node.value != null ? node.value.toString() : node.raw.slice(0, -1).replace(/_/g, "");
  }
  this.next();
  return this.finishNode(node, "Literal");
};
pp$5.parseParenExpression = function() {
  this.expect(types$1.parenL);
  var val = this.parseExpression();
  this.expect(types$1.parenR);
  return val;
};
pp$5.shouldParseArrow = function(exprList) {
  return !this.canInsertSemicolon();
};
pp$5.parseParenAndDistinguishExpression = function(canBeArrow, forInit) {
  var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var innerStartPos = this.start, innerStartLoc = this.startLoc;
    var exprList = [], first = true, lastIsComma = false;
    var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
    this.yieldPos = 0;
    this.awaitPos = 0;
    while (this.type !== types$1.parenR) {
      first ? first = false : this.expect(types$1.comma);
      if (allowTrailingComma && this.afterTrailingComma(types$1.parenR, true)) {
        lastIsComma = true;
        break;
      } else if (this.type === types$1.ellipsis) {
        spreadStart = this.start;
        exprList.push(this.parseParenItem(this.parseRestBinding()));
        if (this.type === types$1.comma) {
          this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
        }
        break;
      } else {
        exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
      }
    }
    var innerEndPos = this.lastTokEnd, innerEndLoc = this.lastTokEndLoc;
    this.expect(types$1.parenR);
    if (canBeArrow && this.shouldParseArrow(exprList) && this.eat(types$1.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      return this.parseParenArrowList(startPos, startLoc, exprList, forInit);
    }
    if (!exprList.length || lastIsComma) {
      this.unexpected(this.lastTokStart);
    }
    if (spreadStart) {
      this.unexpected(spreadStart);
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }
  } else {
    val = this.parseParenExpression();
  }
  if (this.options.preserveParens) {
    var par = this.startNodeAt(startPos, startLoc);
    par.expression = val;
    return this.finishNode(par, "ParenthesizedExpression");
  } else {
    return val;
  }
};
pp$5.parseParenItem = function(item) {
  return item;
};
pp$5.parseParenArrowList = function(startPos, startLoc, exprList, forInit) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, false, forInit);
};
var empty = [];
pp$5.parseNew = function() {
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  }
  var node = this.startNode();
  this.next();
  if (this.options.ecmaVersion >= 6 && this.type === types$1.dot) {
    var meta = this.startNodeAt(node.start, node.loc && node.loc.start);
    meta.name = "new";
    node.meta = this.finishNode(meta, "Identifier");
    this.next();
    var containsEsc = this.containsEsc;
    node.property = this.parseIdent(true);
    if (node.property.name !== "target") {
      this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'");
    }
    if (containsEsc) {
      this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters");
    }
    if (!this.allowNewDotTarget) {
      this.raiseRecoverable(node.start, "'new.target' can only be used in functions and class static block");
    }
    return this.finishNode(node, "MetaProperty");
  }
  var startPos = this.start, startLoc = this.startLoc;
  node.callee = this.parseSubscripts(this.parseExprAtom(null, false, true), startPos, startLoc, true, false);
  if (node.callee.type === "Super") {
    this.raiseRecoverable(startPos, "Invalid use of 'super'");
  }
  if (this.eat(types$1.parenL)) {
    node.arguments = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false);
  } else {
    node.arguments = empty;
  }
  return this.finishNode(node, "NewExpression");
};
pp$5.parseTemplateElement = function(ref) {
  var isTagged = ref.isTagged;
  var elem = this.startNode();
  if (this.type === types$1.invalidTemplate) {
    if (!isTagged) {
      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
    }
    elem.value = {
      raw: this.value.replace(/\r\n?/g, `
`),
      cooked: null
    };
  } else {
    elem.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
      cooked: this.value
    };
  }
  this.next();
  elem.tail = this.type === types$1.backQuote;
  return this.finishNode(elem, "TemplateElement");
};
pp$5.parseTemplate = function(ref) {
  if (ref === undefined)
    ref = {};
  var isTagged = ref.isTagged;
  if (isTagged === undefined)
    isTagged = false;
  var node = this.startNode();
  this.next();
  node.expressions = [];
  var curElt = this.parseTemplateElement({ isTagged });
  node.quasis = [curElt];
  while (!curElt.tail) {
    if (this.type === types$1.eof) {
      this.raise(this.pos, "Unterminated template literal");
    }
    this.expect(types$1.dollarBraceL);
    node.expressions.push(this.parseExpression());
    this.expect(types$1.braceR);
    node.quasis.push(curElt = this.parseTemplateElement({ isTagged }));
  }
  this.next();
  return this.finishNode(node, "TemplateLiteral");
};
pp$5.isAsyncProp = function(prop) {
  return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" && (this.type === types$1.name || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types$1.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};
pp$5.parseObj = function(isPattern, refDestructuringErrors) {
  var node = this.startNode(), first = true, propHash = {};
  node.properties = [];
  this.next();
  while (!this.eat(types$1.braceR)) {
    if (!first) {
      this.expect(types$1.comma);
      if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types$1.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var prop = this.parseProperty(isPattern, refDestructuringErrors);
    if (!isPattern) {
      this.checkPropClash(prop, propHash, refDestructuringErrors);
    }
    node.properties.push(prop);
  }
  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
};
pp$5.parseProperty = function(isPattern, refDestructuringErrors) {
  var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
  if (this.options.ecmaVersion >= 9 && this.eat(types$1.ellipsis)) {
    if (isPattern) {
      prop.argument = this.parseIdent(false);
      if (this.type === types$1.comma) {
        this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
      }
      return this.finishNode(prop, "RestElement");
    }
    prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    if (this.type === types$1.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
      refDestructuringErrors.trailingComma = this.start;
    }
    return this.finishNode(prop, "SpreadElement");
  }
  if (this.options.ecmaVersion >= 6) {
    prop.method = false;
    prop.shorthand = false;
    if (isPattern || refDestructuringErrors) {
      startPos = this.start;
      startLoc = this.startLoc;
    }
    if (!isPattern) {
      isGenerator = this.eat(types$1.star);
    }
  }
  var containsEsc = this.containsEsc;
  this.parsePropertyName(prop);
  if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
    isAsync = true;
    isGenerator = this.options.ecmaVersion >= 9 && this.eat(types$1.star);
    this.parsePropertyName(prop);
  } else {
    isAsync = false;
  }
  this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
  return this.finishNode(prop, "Property");
};
pp$5.parseGetterSetter = function(prop) {
  var kind = prop.key.name;
  this.parsePropertyName(prop);
  prop.value = this.parseMethod(false);
  prop.kind = kind;
  var paramCount = prop.kind === "get" ? 0 : 1;
  if (prop.value.params.length !== paramCount) {
    var start = prop.value.start;
    if (prop.kind === "get") {
      this.raiseRecoverable(start, "getter should have no params");
    } else {
      this.raiseRecoverable(start, "setter should have exactly one param");
    }
  } else {
    if (prop.kind === "set" && prop.value.params[0].type === "RestElement") {
      this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params");
    }
  }
};
pp$5.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
  if ((isGenerator || isAsync) && this.type === types$1.colon) {
    this.unexpected();
  }
  if (this.eat(types$1.colon)) {
    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
    prop.kind = "init";
  } else if (this.options.ecmaVersion >= 6 && this.type === types$1.parenL) {
    if (isPattern) {
      this.unexpected();
    }
    prop.method = true;
    prop.value = this.parseMethod(isGenerator, isAsync);
    prop.kind = "init";
  } else if (!isPattern && !containsEsc && this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.type !== types$1.comma && this.type !== types$1.braceR && this.type !== types$1.eq)) {
    if (isGenerator || isAsync) {
      this.unexpected();
    }
    this.parseGetterSetter(prop);
  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
    if (isGenerator || isAsync) {
      this.unexpected();
    }
    this.checkUnreserved(prop.key);
    if (prop.key.name === "await" && !this.awaitIdentPos) {
      this.awaitIdentPos = startPos;
    }
    if (isPattern) {
      prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
    } else if (this.type === types$1.eq && refDestructuringErrors) {
      if (refDestructuringErrors.shorthandAssign < 0) {
        refDestructuringErrors.shorthandAssign = this.start;
      }
      prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
    } else {
      prop.value = this.copyNode(prop.key);
    }
    prop.kind = "init";
    prop.shorthand = true;
  } else {
    this.unexpected();
  }
};
pp$5.parsePropertyName = function(prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(types$1.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssign();
      this.expect(types$1.bracketR);
      return prop.key;
    } else {
      prop.computed = false;
    }
  }
  return prop.key = this.type === types$1.num || this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
pp$5.initFunction = function(node) {
  node.id = null;
  if (this.options.ecmaVersion >= 6) {
    node.generator = node.expression = false;
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = false;
  }
};
pp$5.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
  var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.initFunction(node);
  if (this.options.ecmaVersion >= 6) {
    node.generator = isGenerator;
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
  this.expect(types$1.parenL);
  node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
  this.parseFunctionBody(node, false, true, false);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "FunctionExpression");
};
pp$5.parseArrowExpression = function(node, params, isAsync, forInit) {
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
  this.initFunction(node);
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  node.params = this.toAssignableList(params, true);
  this.parseFunctionBody(node, true, false, forInit);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "ArrowFunctionExpression");
};
pp$5.parseFunctionBody = function(node, isArrowFunction, isMethod, forInit) {
  var isExpression = isArrowFunction && this.type !== types$1.braceL;
  var oldStrict = this.strict, useStrict = false;
  if (isExpression) {
    node.body = this.parseMaybeAssign(forInit);
    node.expression = true;
    this.checkParams(node, false);
  } else {
    var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
    if (!oldStrict || nonSimple) {
      useStrict = this.strictDirective(this.end);
      if (useStrict && nonSimple) {
        this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list");
      }
    }
    var oldLabels = this.labels;
    this.labels = [];
    if (useStrict) {
      this.strict = true;
    }
    this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
    if (this.strict && node.id) {
      this.checkLValSimple(node.id, BIND_OUTSIDE);
    }
    node.body = this.parseBlock(false, undefined, useStrict && !oldStrict);
    node.expression = false;
    this.adaptDirectivePrologue(node.body.body);
    this.labels = oldLabels;
  }
  this.exitScope();
};
pp$5.isSimpleParamList = function(params) {
  for (var i = 0, list = params;i < list.length; i += 1) {
    var param = list[i];
    if (param.type !== "Identifier") {
      return false;
    }
  }
  return true;
};
pp$5.checkParams = function(node, allowDuplicates) {
  var nameHash = Object.create(null);
  for (var i = 0, list = node.params;i < list.length; i += 1) {
    var param = list[i];
    this.checkLValInnerPattern(param, BIND_VAR, allowDuplicates ? null : nameHash);
  }
};
pp$5.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (!first) {
      this.expect(types$1.comma);
      if (allowTrailingComma && this.afterTrailingComma(close)) {
        break;
      }
    } else {
      first = false;
    }
    var elt = undefined;
    if (allowEmpty && this.type === types$1.comma) {
      elt = null;
    } else if (this.type === types$1.ellipsis) {
      elt = this.parseSpread(refDestructuringErrors);
      if (refDestructuringErrors && this.type === types$1.comma && refDestructuringErrors.trailingComma < 0) {
        refDestructuringErrors.trailingComma = this.start;
      }
    } else {
      elt = this.parseMaybeAssign(false, refDestructuringErrors);
    }
    elts.push(elt);
  }
  return elts;
};
pp$5.checkUnreserved = function(ref) {
  var start = ref.start;
  var end = ref.end;
  var name = ref.name;
  if (this.inGenerator && name === "yield") {
    this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator");
  }
  if (this.inAsync && name === "await") {
    this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function");
  }
  if (!(this.currentThisScope().flags & SCOPE_VAR) && name === "arguments") {
    this.raiseRecoverable(start, "Cannot use 'arguments' in class field initializer");
  }
  if (this.inClassStaticBlock && (name === "arguments" || name === "await")) {
    this.raise(start, "Cannot use " + name + " in class static initialization block");
  }
  if (this.keywords.test(name)) {
    this.raise(start, "Unexpected keyword '" + name + "'");
  }
  if (this.options.ecmaVersion < 6 && this.input.slice(start, end).indexOf("\\") !== -1) {
    return;
  }
  var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
  if (re.test(name)) {
    if (!this.inAsync && name === "await") {
      this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function");
    }
    this.raiseRecoverable(start, "The keyword '" + name + "' is reserved");
  }
};
pp$5.parseIdent = function(liberal) {
  var node = this.parseIdentNode();
  this.next(!!liberal);
  this.finishNode(node, "Identifier");
  if (!liberal) {
    this.checkUnreserved(node);
    if (node.name === "await" && !this.awaitIdentPos) {
      this.awaitIdentPos = node.start;
    }
  }
  return node;
};
pp$5.parseIdentNode = function() {
  var node = this.startNode();
  if (this.type === types$1.name) {
    node.name = this.value;
  } else if (this.type.keyword) {
    node.name = this.type.keyword;
    if ((node.name === "class" || node.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
      this.context.pop();
    }
    this.type = types$1.name;
  } else {
    this.unexpected();
  }
  return node;
};
pp$5.parsePrivateIdent = function() {
  var node = this.startNode();
  if (this.type === types$1.privateId) {
    node.name = this.value;
  } else {
    this.unexpected();
  }
  this.next();
  this.finishNode(node, "PrivateIdentifier");
  if (this.options.checkPrivateFields) {
    if (this.privateNameStack.length === 0) {
      this.raise(node.start, "Private field '#" + node.name + "' must be declared in an enclosing class");
    } else {
      this.privateNameStack[this.privateNameStack.length - 1].used.push(node);
    }
  }
  return node;
};
pp$5.parseYield = function(forInit) {
  if (!this.yieldPos) {
    this.yieldPos = this.start;
  }
  var node = this.startNode();
  this.next();
  if (this.type === types$1.semi || this.canInsertSemicolon() || this.type !== types$1.star && !this.type.startsExpr) {
    node.delegate = false;
    node.argument = null;
  } else {
    node.delegate = this.eat(types$1.star);
    node.argument = this.parseMaybeAssign(forInit);
  }
  return this.finishNode(node, "YieldExpression");
};
pp$5.parseAwait = function(forInit) {
  if (!this.awaitPos) {
    this.awaitPos = this.start;
  }
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeUnary(null, true, false, forInit);
  return this.finishNode(node, "AwaitExpression");
};
var pp$4 = Parser.prototype;
pp$4.raise = function(pos, message) {
  var loc = getLineInfo(this.input, pos);
  message += " (" + loc.line + ":" + loc.column + ")";
  if (this.sourceFile) {
    message += " in " + this.sourceFile;
  }
  var err = new SyntaxError(message);
  err.pos = pos;
  err.loc = loc;
  err.raisedAt = this.pos;
  throw err;
};
pp$4.raiseRecoverable = pp$4.raise;
pp$4.curPosition = function() {
  if (this.options.locations) {
    return new Position(this.curLine, this.pos - this.lineStart);
  }
};
var pp$3 = Parser.prototype;
var Scope = function Scope(flags) {
  this.flags = flags;
  this.var = [];
  this.lexical = [];
  this.functions = [];
};
pp$3.enterScope = function(flags) {
  this.scopeStack.push(new Scope(flags));
};
pp$3.exitScope = function() {
  this.scopeStack.pop();
};
pp$3.treatFunctionsAsVarInScope = function(scope) {
  return scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_TOP;
};
pp$3.declareName = function(name, bindingType, pos) {
  var redeclared = false;
  if (bindingType === BIND_LEXICAL) {
    var scope = this.currentScope();
    redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
    scope.lexical.push(name);
    if (this.inModule && scope.flags & SCOPE_TOP) {
      delete this.undefinedExports[name];
    }
  } else if (bindingType === BIND_SIMPLE_CATCH) {
    var scope$1 = this.currentScope();
    scope$1.lexical.push(name);
  } else if (bindingType === BIND_FUNCTION) {
    var scope$2 = this.currentScope();
    if (this.treatFunctionsAsVar) {
      redeclared = scope$2.lexical.indexOf(name) > -1;
    } else {
      redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1;
    }
    scope$2.functions.push(name);
  } else {
    for (var i = this.scopeStack.length - 1;i >= 0; --i) {
      var scope$3 = this.scopeStack[i];
      if (scope$3.lexical.indexOf(name) > -1 && !(scope$3.flags & SCOPE_SIMPLE_CATCH && scope$3.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
        redeclared = true;
        break;
      }
      scope$3.var.push(name);
      if (this.inModule && scope$3.flags & SCOPE_TOP) {
        delete this.undefinedExports[name];
      }
      if (scope$3.flags & SCOPE_VAR) {
        break;
      }
    }
  }
  if (redeclared) {
    this.raiseRecoverable(pos, "Identifier '" + name + "' has already been declared");
  }
};
pp$3.checkLocalExport = function(id) {
  if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1) {
    this.undefinedExports[id.name] = id;
  }
};
pp$3.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
pp$3.currentVarScope = function() {
  for (var i = this.scopeStack.length - 1;; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & (SCOPE_VAR | SCOPE_CLASS_FIELD_INIT | SCOPE_CLASS_STATIC_BLOCK)) {
      return scope;
    }
  }
};
pp$3.currentThisScope = function() {
  for (var i = this.scopeStack.length - 1;; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & (SCOPE_VAR | SCOPE_CLASS_FIELD_INIT | SCOPE_CLASS_STATIC_BLOCK) && !(scope.flags & SCOPE_ARROW)) {
      return scope;
    }
  }
};
var Node = function Node(parser, pos, loc) {
  this.type = "";
  this.start = pos;
  this.end = 0;
  if (parser.options.locations) {
    this.loc = new SourceLocation(parser, loc);
  }
  if (parser.options.directSourceFile) {
    this.sourceFile = parser.options.directSourceFile;
  }
  if (parser.options.ranges) {
    this.range = [pos, 0];
  }
};
var pp$2 = Parser.prototype;
pp$2.startNode = function() {
  return new Node(this, this.start, this.startLoc);
};
pp$2.startNodeAt = function(pos, loc) {
  return new Node(this, pos, loc);
};
function finishNodeAt(node, type, pos, loc) {
  node.type = type;
  node.end = pos;
  if (this.options.locations) {
    node.loc.end = loc;
  }
  if (this.options.ranges) {
    node.range[1] = pos;
  }
  return node;
}
pp$2.finishNode = function(node, type) {
  return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc);
};
pp$2.finishNodeAt = function(node, type, pos, loc) {
  return finishNodeAt.call(this, node, type, pos, loc);
};
pp$2.copyNode = function(node) {
  var newNode = new Node(this, node.start, this.startLoc);
  for (var prop in node) {
    newNode[prop] = node[prop];
  }
  return newNode;
};
var scriptValuesAddedInUnicode = "Berf Beria_Erfe Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sidetic Sidt Sunu Sunuwar Tai_Yo Tayo Todhri Todr Tolong_Siki Tols Tulu_Tigalari Tutg Unknown Zzzz";
var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
var ecma11BinaryProperties = ecma10BinaryProperties;
var ecma12BinaryProperties = ecma11BinaryProperties + " EBase EComp EMod EPres ExtPict";
var ecma13BinaryProperties = ecma12BinaryProperties;
var ecma14BinaryProperties = ecma13BinaryProperties;
var unicodeBinaryProperties = {
  9: ecma9BinaryProperties,
  10: ecma10BinaryProperties,
  11: ecma11BinaryProperties,
  12: ecma12BinaryProperties,
  13: ecma13BinaryProperties,
  14: ecma14BinaryProperties
};
var ecma14BinaryPropertiesOfStrings = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji";
var unicodeBinaryPropertiesOfStrings = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: ecma14BinaryPropertiesOfStrings
};
var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
var ecma9ScriptValues = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
var ecma12ScriptValues = ecma11ScriptValues + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
var ecma13ScriptValues = ecma12ScriptValues + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";
var ecma14ScriptValues = ecma13ScriptValues + " " + scriptValuesAddedInUnicode;
var unicodeScriptValues = {
  9: ecma9ScriptValues,
  10: ecma10ScriptValues,
  11: ecma11ScriptValues,
  12: ecma12ScriptValues,
  13: ecma13ScriptValues,
  14: ecma14ScriptValues
};
var data = {};
function buildUnicodeData(ecmaVersion) {
  var d = data[ecmaVersion] = {
    binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
    binaryOfStrings: wordsRegexp(unicodeBinaryPropertiesOfStrings[ecmaVersion]),
    nonBinary: {
      General_Category: wordsRegexp(unicodeGeneralCategoryValues),
      Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
    }
  };
  d.nonBinary.Script_Extensions = d.nonBinary.Script;
  d.nonBinary.gc = d.nonBinary.General_Category;
  d.nonBinary.sc = d.nonBinary.Script;
  d.nonBinary.scx = d.nonBinary.Script_Extensions;
}
for (i = 0, list = [9, 10, 11, 12, 13, 14];i < list.length; i += 1) {
  ecmaVersion = list[i];
  buildUnicodeData(ecmaVersion);
}
var ecmaVersion;
var i;
var list;
var pp$1 = Parser.prototype;
var BranchID = function BranchID(parent, base) {
  this.parent = parent;
  this.base = base || this;
};
BranchID.prototype.separatedFrom = function separatedFrom(alt) {
  for (var self = this;self; self = self.parent) {
    for (var other = alt;other; other = other.parent) {
      if (self.base === other.base && self !== other) {
        return true;
      }
    }
  }
  return false;
};
BranchID.prototype.sibling = function sibling() {
  return new BranchID(this.parent, this.base);
};
var RegExpValidationState = function RegExpValidationState(parser) {
  this.parser = parser;
  this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "") + (parser.options.ecmaVersion >= 13 ? "d" : "") + (parser.options.ecmaVersion >= 15 ? "v" : "");
  this.unicodeProperties = data[parser.options.ecmaVersion >= 14 ? 14 : parser.options.ecmaVersion];
  this.source = "";
  this.flags = "";
  this.start = 0;
  this.switchU = false;
  this.switchV = false;
  this.switchN = false;
  this.pos = 0;
  this.lastIntValue = 0;
  this.lastStringValue = "";
  this.lastAssertionIsQuantifiable = false;
  this.numCapturingParens = 0;
  this.maxBackReference = 0;
  this.groupNames = Object.create(null);
  this.backReferenceNames = [];
  this.branchID = null;
};
RegExpValidationState.prototype.reset = function reset(start, pattern, flags) {
  var unicodeSets = flags.indexOf("v") !== -1;
  var unicode = flags.indexOf("u") !== -1;
  this.start = start | 0;
  this.source = pattern + "";
  this.flags = flags;
  if (unicodeSets && this.parser.options.ecmaVersion >= 15) {
    this.switchU = true;
    this.switchV = true;
    this.switchN = true;
  } else {
    this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
    this.switchV = false;
    this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
  }
};
RegExpValidationState.prototype.raise = function raise(message) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + message);
};
RegExpValidationState.prototype.at = function at(i, forceU) {
  if (forceU === undefined)
    forceU = false;
  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return -1;
  }
  var c = s.charCodeAt(i);
  if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i + 1 >= l) {
    return c;
  }
  var next = s.charCodeAt(i + 1);
  return next >= 56320 && next <= 57343 ? (c << 10) + next - 56613888 : c;
};
RegExpValidationState.prototype.nextIndex = function nextIndex(i, forceU) {
  if (forceU === undefined)
    forceU = false;
  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return l;
  }
  var c = s.charCodeAt(i), next;
  if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i + 1 >= l || (next = s.charCodeAt(i + 1)) < 56320 || next > 57343) {
    return i + 1;
  }
  return i + 2;
};
RegExpValidationState.prototype.current = function current(forceU) {
  if (forceU === undefined)
    forceU = false;
  return this.at(this.pos, forceU);
};
RegExpValidationState.prototype.lookahead = function lookahead(forceU) {
  if (forceU === undefined)
    forceU = false;
  return this.at(this.nextIndex(this.pos, forceU), forceU);
};
RegExpValidationState.prototype.advance = function advance(forceU) {
  if (forceU === undefined)
    forceU = false;
  this.pos = this.nextIndex(this.pos, forceU);
};
RegExpValidationState.prototype.eat = function eat(ch, forceU) {
  if (forceU === undefined)
    forceU = false;
  if (this.current(forceU) === ch) {
    this.advance(forceU);
    return true;
  }
  return false;
};
RegExpValidationState.prototype.eatChars = function eatChars(chs, forceU) {
  if (forceU === undefined)
    forceU = false;
  var pos = this.pos;
  for (var i = 0, list = chs;i < list.length; i += 1) {
    var ch = list[i];
    var current = this.at(pos, forceU);
    if (current === -1 || current !== ch) {
      return false;
    }
    pos = this.nextIndex(pos, forceU);
  }
  this.pos = pos;
  return true;
};
pp$1.validateRegExpFlags = function(state) {
  var validFlags = state.validFlags;
  var flags = state.flags;
  var u = false;
  var v = false;
  for (var i = 0;i < flags.length; i++) {
    var flag = flags.charAt(i);
    if (validFlags.indexOf(flag) === -1) {
      this.raise(state.start, "Invalid regular expression flag");
    }
    if (flags.indexOf(flag, i + 1) > -1) {
      this.raise(state.start, "Duplicate regular expression flag");
    }
    if (flag === "u") {
      u = true;
    }
    if (flag === "v") {
      v = true;
    }
  }
  if (this.options.ecmaVersion >= 15 && u && v) {
    this.raise(state.start, "Invalid regular expression flag");
  }
};
function hasProp(obj) {
  for (var _ in obj) {
    return true;
  }
  return false;
}
pp$1.validateRegExpPattern = function(state) {
  this.regexp_pattern(state);
  if (!state.switchN && this.options.ecmaVersion >= 9 && hasProp(state.groupNames)) {
    state.switchN = true;
    this.regexp_pattern(state);
  }
};
pp$1.regexp_pattern = function(state) {
  state.pos = 0;
  state.lastIntValue = 0;
  state.lastStringValue = "";
  state.lastAssertionIsQuantifiable = false;
  state.numCapturingParens = 0;
  state.maxBackReference = 0;
  state.groupNames = Object.create(null);
  state.backReferenceNames.length = 0;
  state.branchID = null;
  this.regexp_disjunction(state);
  if (state.pos !== state.source.length) {
    if (state.eat(41)) {
      state.raise("Unmatched ')'");
    }
    if (state.eat(93) || state.eat(125)) {
      state.raise("Lone quantifier brackets");
    }
  }
  if (state.maxBackReference > state.numCapturingParens) {
    state.raise("Invalid escape");
  }
  for (var i = 0, list = state.backReferenceNames;i < list.length; i += 1) {
    var name = list[i];
    if (!state.groupNames[name]) {
      state.raise("Invalid named capture referenced");
    }
  }
};
pp$1.regexp_disjunction = function(state) {
  var trackDisjunction = this.options.ecmaVersion >= 16;
  if (trackDisjunction) {
    state.branchID = new BranchID(state.branchID, null);
  }
  this.regexp_alternative(state);
  while (state.eat(124)) {
    if (trackDisjunction) {
      state.branchID = state.branchID.sibling();
    }
    this.regexp_alternative(state);
  }
  if (trackDisjunction) {
    state.branchID = state.branchID.parent;
  }
  if (this.regexp_eatQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  if (state.eat(123)) {
    state.raise("Lone quantifier brackets");
  }
};
pp$1.regexp_alternative = function(state) {
  while (state.pos < state.source.length && this.regexp_eatTerm(state)) {}
};
pp$1.regexp_eatTerm = function(state) {
  if (this.regexp_eatAssertion(state)) {
    if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
      if (state.switchU) {
        state.raise("Invalid quantifier");
      }
    }
    return true;
  }
  if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
    this.regexp_eatQuantifier(state);
    return true;
  }
  return false;
};
pp$1.regexp_eatAssertion = function(state) {
  var start = state.pos;
  state.lastAssertionIsQuantifiable = false;
  if (state.eat(94) || state.eat(36)) {
    return true;
  }
  if (state.eat(92)) {
    if (state.eat(66) || state.eat(98)) {
      return true;
    }
    state.pos = start;
  }
  if (state.eat(40) && state.eat(63)) {
    var lookbehind = false;
    if (this.options.ecmaVersion >= 9) {
      lookbehind = state.eat(60);
    }
    if (state.eat(61) || state.eat(33)) {
      this.regexp_disjunction(state);
      if (!state.eat(41)) {
        state.raise("Unterminated group");
      }
      state.lastAssertionIsQuantifiable = !lookbehind;
      return true;
    }
  }
  state.pos = start;
  return false;
};
pp$1.regexp_eatQuantifier = function(state, noError) {
  if (noError === undefined)
    noError = false;
  if (this.regexp_eatQuantifierPrefix(state, noError)) {
    state.eat(63);
    return true;
  }
  return false;
};
pp$1.regexp_eatQuantifierPrefix = function(state, noError) {
  return state.eat(42) || state.eat(43) || state.eat(63) || this.regexp_eatBracedQuantifier(state, noError);
};
pp$1.regexp_eatBracedQuantifier = function(state, noError) {
  var start = state.pos;
  if (state.eat(123)) {
    var min = 0, max = -1;
    if (this.regexp_eatDecimalDigits(state)) {
      min = state.lastIntValue;
      if (state.eat(44) && this.regexp_eatDecimalDigits(state)) {
        max = state.lastIntValue;
      }
      if (state.eat(125)) {
        if (max !== -1 && max < min && !noError) {
          state.raise("numbers out of order in {} quantifier");
        }
        return true;
      }
    }
    if (state.switchU && !noError) {
      state.raise("Incomplete quantifier");
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatAtom = function(state) {
  return this.regexp_eatPatternCharacters(state) || state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
};
pp$1.regexp_eatReverseSolidusAtomEscape = function(state) {
  var start = state.pos;
  if (state.eat(92)) {
    if (this.regexp_eatAtomEscape(state)) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatUncapturingGroup = function(state) {
  var start = state.pos;
  if (state.eat(40)) {
    if (state.eat(63)) {
      if (this.options.ecmaVersion >= 16) {
        var addModifiers = this.regexp_eatModifiers(state);
        var hasHyphen = state.eat(45);
        if (addModifiers || hasHyphen) {
          for (var i = 0;i < addModifiers.length; i++) {
            var modifier = addModifiers.charAt(i);
            if (addModifiers.indexOf(modifier, i + 1) > -1) {
              state.raise("Duplicate regular expression modifiers");
            }
          }
          if (hasHyphen) {
            var removeModifiers = this.regexp_eatModifiers(state);
            if (!addModifiers && !removeModifiers && state.current() === 58) {
              state.raise("Invalid regular expression modifiers");
            }
            for (var i$1 = 0;i$1 < removeModifiers.length; i$1++) {
              var modifier$1 = removeModifiers.charAt(i$1);
              if (removeModifiers.indexOf(modifier$1, i$1 + 1) > -1 || addModifiers.indexOf(modifier$1) > -1) {
                state.raise("Duplicate regular expression modifiers");
              }
            }
          }
        }
      }
      if (state.eat(58)) {
        this.regexp_disjunction(state);
        if (state.eat(41)) {
          return true;
        }
        state.raise("Unterminated group");
      }
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatCapturingGroup = function(state) {
  if (state.eat(40)) {
    if (this.options.ecmaVersion >= 9) {
      this.regexp_groupSpecifier(state);
    } else if (state.current() === 63) {
      state.raise("Invalid group");
    }
    this.regexp_disjunction(state);
    if (state.eat(41)) {
      state.numCapturingParens += 1;
      return true;
    }
    state.raise("Unterminated group");
  }
  return false;
};
pp$1.regexp_eatModifiers = function(state) {
  var modifiers = "";
  var ch = 0;
  while ((ch = state.current()) !== -1 && isRegularExpressionModifier(ch)) {
    modifiers += codePointToString(ch);
    state.advance();
  }
  return modifiers;
};
function isRegularExpressionModifier(ch) {
  return ch === 105 || ch === 109 || ch === 115;
}
pp$1.regexp_eatExtendedAtom = function(state) {
  return state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
};
pp$1.regexp_eatInvalidBracedQuantifier = function(state) {
  if (this.regexp_eatBracedQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  return false;
};
pp$1.regexp_eatSyntaxCharacter = function(state) {
  var ch = state.current();
  if (isSyntaxCharacter(ch)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
function isSyntaxCharacter(ch) {
  return ch === 36 || ch >= 40 && ch <= 43 || ch === 46 || ch === 63 || ch >= 91 && ch <= 94 || ch >= 123 && ch <= 125;
}
pp$1.regexp_eatPatternCharacters = function(state) {
  var start = state.pos;
  var ch = 0;
  while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
    state.advance();
  }
  return state.pos !== start;
};
pp$1.regexp_eatExtendedPatternCharacter = function(state) {
  var ch = state.current();
  if (ch !== -1 && ch !== 36 && !(ch >= 40 && ch <= 43) && ch !== 46 && ch !== 63 && ch !== 91 && ch !== 94 && ch !== 124) {
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_groupSpecifier = function(state) {
  if (state.eat(63)) {
    if (!this.regexp_eatGroupName(state)) {
      state.raise("Invalid group");
    }
    var trackDisjunction = this.options.ecmaVersion >= 16;
    var known = state.groupNames[state.lastStringValue];
    if (known) {
      if (trackDisjunction) {
        for (var i = 0, list = known;i < list.length; i += 1) {
          var altID = list[i];
          if (!altID.separatedFrom(state.branchID)) {
            state.raise("Duplicate capture group name");
          }
        }
      } else {
        state.raise("Duplicate capture group name");
      }
    }
    if (trackDisjunction) {
      (known || (state.groupNames[state.lastStringValue] = [])).push(state.branchID);
    } else {
      state.groupNames[state.lastStringValue] = true;
    }
  }
};
pp$1.regexp_eatGroupName = function(state) {
  state.lastStringValue = "";
  if (state.eat(60)) {
    if (this.regexp_eatRegExpIdentifierName(state) && state.eat(62)) {
      return true;
    }
    state.raise("Invalid capture group name");
  }
  return false;
};
pp$1.regexp_eatRegExpIdentifierName = function(state) {
  state.lastStringValue = "";
  if (this.regexp_eatRegExpIdentifierStart(state)) {
    state.lastStringValue += codePointToString(state.lastIntValue);
    while (this.regexp_eatRegExpIdentifierPart(state)) {
      state.lastStringValue += codePointToString(state.lastIntValue);
    }
    return true;
  }
  return false;
};
pp$1.regexp_eatRegExpIdentifierStart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch = state.current(forceU);
  state.advance(forceU);
  if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierStart(ch)) {
    state.lastIntValue = ch;
    return true;
  }
  state.pos = start;
  return false;
};
function isRegExpIdentifierStart(ch) {
  return isIdentifierStart(ch, true) || ch === 36 || ch === 95;
}
pp$1.regexp_eatRegExpIdentifierPart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch = state.current(forceU);
  state.advance(forceU);
  if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierPart(ch)) {
    state.lastIntValue = ch;
    return true;
  }
  state.pos = start;
  return false;
};
function isRegExpIdentifierPart(ch) {
  return isIdentifierChar(ch, true) || ch === 36 || ch === 95 || ch === 8204 || ch === 8205;
}
pp$1.regexp_eatAtomEscape = function(state) {
  if (this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) {
    return true;
  }
  if (state.switchU) {
    if (state.current() === 99) {
      state.raise("Invalid unicode escape");
    }
    state.raise("Invalid escape");
  }
  return false;
};
pp$1.regexp_eatBackReference = function(state) {
  var start = state.pos;
  if (this.regexp_eatDecimalEscape(state)) {
    var n = state.lastIntValue;
    if (state.switchU) {
      if (n > state.maxBackReference) {
        state.maxBackReference = n;
      }
      return true;
    }
    if (n <= state.numCapturingParens) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatKGroupName = function(state) {
  if (state.eat(107)) {
    if (this.regexp_eatGroupName(state)) {
      state.backReferenceNames.push(state.lastStringValue);
      return true;
    }
    state.raise("Invalid named reference");
  }
  return false;
};
pp$1.regexp_eatCharacterEscape = function(state) {
  return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state, false) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
};
pp$1.regexp_eatCControlLetter = function(state) {
  var start = state.pos;
  if (state.eat(99)) {
    if (this.regexp_eatControlLetter(state)) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatZero = function(state) {
  if (state.current() === 48 && !isDecimalDigit(state.lookahead())) {
    state.lastIntValue = 0;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatControlEscape = function(state) {
  var ch = state.current();
  if (ch === 116) {
    state.lastIntValue = 9;
    state.advance();
    return true;
  }
  if (ch === 110) {
    state.lastIntValue = 10;
    state.advance();
    return true;
  }
  if (ch === 118) {
    state.lastIntValue = 11;
    state.advance();
    return true;
  }
  if (ch === 102) {
    state.lastIntValue = 12;
    state.advance();
    return true;
  }
  if (ch === 114) {
    state.lastIntValue = 13;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatControlLetter = function(state) {
  var ch = state.current();
  if (isControlLetter(ch)) {
    state.lastIntValue = ch % 32;
    state.advance();
    return true;
  }
  return false;
};
function isControlLetter(ch) {
  return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
}
pp$1.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
  if (forceU === undefined)
    forceU = false;
  var start = state.pos;
  var switchU = forceU || state.switchU;
  if (state.eat(117)) {
    if (this.regexp_eatFixedHexDigits(state, 4)) {
      var lead = state.lastIntValue;
      if (switchU && lead >= 55296 && lead <= 56319) {
        var leadSurrogateEnd = state.pos;
        if (state.eat(92) && state.eat(117) && this.regexp_eatFixedHexDigits(state, 4)) {
          var trail = state.lastIntValue;
          if (trail >= 56320 && trail <= 57343) {
            state.lastIntValue = (lead - 55296) * 1024 + (trail - 56320) + 65536;
            return true;
          }
        }
        state.pos = leadSurrogateEnd;
        state.lastIntValue = lead;
      }
      return true;
    }
    if (switchU && state.eat(123) && this.regexp_eatHexDigits(state) && state.eat(125) && isValidUnicode(state.lastIntValue)) {
      return true;
    }
    if (switchU) {
      state.raise("Invalid unicode escape");
    }
    state.pos = start;
  }
  return false;
};
function isValidUnicode(ch) {
  return ch >= 0 && ch <= 1114111;
}
pp$1.regexp_eatIdentityEscape = function(state) {
  if (state.switchU) {
    if (this.regexp_eatSyntaxCharacter(state)) {
      return true;
    }
    if (state.eat(47)) {
      state.lastIntValue = 47;
      return true;
    }
    return false;
  }
  var ch = state.current();
  if (ch !== 99 && (!state.switchN || ch !== 107)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatDecimalEscape = function(state) {
  state.lastIntValue = 0;
  var ch = state.current();
  if (ch >= 49 && ch <= 57) {
    do {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
      state.advance();
    } while ((ch = state.current()) >= 48 && ch <= 57);
    return true;
  }
  return false;
};
var CharSetNone = 0;
var CharSetOk = 1;
var CharSetString = 2;
pp$1.regexp_eatCharacterClassEscape = function(state) {
  var ch = state.current();
  if (isCharacterClassEscape(ch)) {
    state.lastIntValue = -1;
    state.advance();
    return CharSetOk;
  }
  var negate = false;
  if (state.switchU && this.options.ecmaVersion >= 9 && ((negate = ch === 80) || ch === 112)) {
    state.lastIntValue = -1;
    state.advance();
    var result;
    if (state.eat(123) && (result = this.regexp_eatUnicodePropertyValueExpression(state)) && state.eat(125)) {
      if (negate && result === CharSetString) {
        state.raise("Invalid property name");
      }
      return result;
    }
    state.raise("Invalid property name");
  }
  return CharSetNone;
};
function isCharacterClassEscape(ch) {
  return ch === 100 || ch === 68 || ch === 115 || ch === 83 || ch === 119 || ch === 87;
}
pp$1.regexp_eatUnicodePropertyValueExpression = function(state) {
  var start = state.pos;
  if (this.regexp_eatUnicodePropertyName(state) && state.eat(61)) {
    var name = state.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(state)) {
      var value = state.lastStringValue;
      this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
      return CharSetOk;
    }
  }
  state.pos = start;
  if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
    var nameOrValue = state.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
  }
  return CharSetNone;
};
pp$1.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
  if (!hasOwn(state.unicodeProperties.nonBinary, name)) {
    state.raise("Invalid property name");
  }
  if (!state.unicodeProperties.nonBinary[name].test(value)) {
    state.raise("Invalid property value");
  }
};
pp$1.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
  if (state.unicodeProperties.binary.test(nameOrValue)) {
    return CharSetOk;
  }
  if (state.switchV && state.unicodeProperties.binaryOfStrings.test(nameOrValue)) {
    return CharSetString;
  }
  state.raise("Invalid property name");
};
pp$1.regexp_eatUnicodePropertyName = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyNameCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== "";
};
function isUnicodePropertyNameCharacter(ch) {
  return isControlLetter(ch) || ch === 95;
}
pp$1.regexp_eatUnicodePropertyValue = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyValueCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== "";
};
function isUnicodePropertyValueCharacter(ch) {
  return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch);
}
pp$1.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
  return this.regexp_eatUnicodePropertyValue(state);
};
pp$1.regexp_eatCharacterClass = function(state) {
  if (state.eat(91)) {
    var negate = state.eat(94);
    var result = this.regexp_classContents(state);
    if (!state.eat(93)) {
      state.raise("Unterminated character class");
    }
    if (negate && result === CharSetString) {
      state.raise("Negated character class may contain strings");
    }
    return true;
  }
  return false;
};
pp$1.regexp_classContents = function(state) {
  if (state.current() === 93) {
    return CharSetOk;
  }
  if (state.switchV) {
    return this.regexp_classSetExpression(state);
  }
  this.regexp_nonEmptyClassRanges(state);
  return CharSetOk;
};
pp$1.regexp_nonEmptyClassRanges = function(state) {
  while (this.regexp_eatClassAtom(state)) {
    var left = state.lastIntValue;
    if (state.eat(45) && this.regexp_eatClassAtom(state)) {
      var right = state.lastIntValue;
      if (state.switchU && (left === -1 || right === -1)) {
        state.raise("Invalid character class");
      }
      if (left !== -1 && right !== -1 && left > right) {
        state.raise("Range out of order in character class");
      }
    }
  }
};
pp$1.regexp_eatClassAtom = function(state) {
  var start = state.pos;
  if (state.eat(92)) {
    if (this.regexp_eatClassEscape(state)) {
      return true;
    }
    if (state.switchU) {
      var ch$1 = state.current();
      if (ch$1 === 99 || isOctalDigit(ch$1)) {
        state.raise("Invalid class escape");
      }
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  var ch = state.current();
  if (ch !== 93) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatClassEscape = function(state) {
  var start = state.pos;
  if (state.eat(98)) {
    state.lastIntValue = 8;
    return true;
  }
  if (state.switchU && state.eat(45)) {
    state.lastIntValue = 45;
    return true;
  }
  if (!state.switchU && state.eat(99)) {
    if (this.regexp_eatClassControlLetter(state)) {
      return true;
    }
    state.pos = start;
  }
  return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
};
pp$1.regexp_classSetExpression = function(state) {
  var result = CharSetOk, subResult;
  if (this.regexp_eatClassSetRange(state))
    ;
  else if (subResult = this.regexp_eatClassSetOperand(state)) {
    if (subResult === CharSetString) {
      result = CharSetString;
    }
    var start = state.pos;
    while (state.eatChars([38, 38])) {
      if (state.current() !== 38 && (subResult = this.regexp_eatClassSetOperand(state))) {
        if (subResult !== CharSetString) {
          result = CharSetOk;
        }
        continue;
      }
      state.raise("Invalid character in character class");
    }
    if (start !== state.pos) {
      return result;
    }
    while (state.eatChars([45, 45])) {
      if (this.regexp_eatClassSetOperand(state)) {
        continue;
      }
      state.raise("Invalid character in character class");
    }
    if (start !== state.pos) {
      return result;
    }
  } else {
    state.raise("Invalid character in character class");
  }
  for (;; ) {
    if (this.regexp_eatClassSetRange(state)) {
      continue;
    }
    subResult = this.regexp_eatClassSetOperand(state);
    if (!subResult) {
      return result;
    }
    if (subResult === CharSetString) {
      result = CharSetString;
    }
  }
};
pp$1.regexp_eatClassSetRange = function(state) {
  var start = state.pos;
  if (this.regexp_eatClassSetCharacter(state)) {
    var left = state.lastIntValue;
    if (state.eat(45) && this.regexp_eatClassSetCharacter(state)) {
      var right = state.lastIntValue;
      if (left !== -1 && right !== -1 && left > right) {
        state.raise("Range out of order in character class");
      }
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatClassSetOperand = function(state) {
  if (this.regexp_eatClassSetCharacter(state)) {
    return CharSetOk;
  }
  return this.regexp_eatClassStringDisjunction(state) || this.regexp_eatNestedClass(state);
};
pp$1.regexp_eatNestedClass = function(state) {
  var start = state.pos;
  if (state.eat(91)) {
    var negate = state.eat(94);
    var result = this.regexp_classContents(state);
    if (state.eat(93)) {
      if (negate && result === CharSetString) {
        state.raise("Negated character class may contain strings");
      }
      return result;
    }
    state.pos = start;
  }
  if (state.eat(92)) {
    var result$1 = this.regexp_eatCharacterClassEscape(state);
    if (result$1) {
      return result$1;
    }
    state.pos = start;
  }
  return null;
};
pp$1.regexp_eatClassStringDisjunction = function(state) {
  var start = state.pos;
  if (state.eatChars([92, 113])) {
    if (state.eat(123)) {
      var result = this.regexp_classStringDisjunctionContents(state);
      if (state.eat(125)) {
        return result;
      }
    } else {
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  return null;
};
pp$1.regexp_classStringDisjunctionContents = function(state) {
  var result = this.regexp_classString(state);
  while (state.eat(124)) {
    if (this.regexp_classString(state) === CharSetString) {
      result = CharSetString;
    }
  }
  return result;
};
pp$1.regexp_classString = function(state) {
  var count = 0;
  while (this.regexp_eatClassSetCharacter(state)) {
    count++;
  }
  return count === 1 ? CharSetOk : CharSetString;
};
pp$1.regexp_eatClassSetCharacter = function(state) {
  var start = state.pos;
  if (state.eat(92)) {
    if (this.regexp_eatCharacterEscape(state) || this.regexp_eatClassSetReservedPunctuator(state)) {
      return true;
    }
    if (state.eat(98)) {
      state.lastIntValue = 8;
      return true;
    }
    state.pos = start;
    return false;
  }
  var ch = state.current();
  if (ch < 0 || ch === state.lookahead() && isClassSetReservedDoublePunctuatorCharacter(ch)) {
    return false;
  }
  if (isClassSetSyntaxCharacter(ch)) {
    return false;
  }
  state.advance();
  state.lastIntValue = ch;
  return true;
};
function isClassSetReservedDoublePunctuatorCharacter(ch) {
  return ch === 33 || ch >= 35 && ch <= 38 || ch >= 42 && ch <= 44 || ch === 46 || ch >= 58 && ch <= 64 || ch === 94 || ch === 96 || ch === 126;
}
function isClassSetSyntaxCharacter(ch) {
  return ch === 40 || ch === 41 || ch === 45 || ch === 47 || ch >= 91 && ch <= 93 || ch >= 123 && ch <= 125;
}
pp$1.regexp_eatClassSetReservedPunctuator = function(state) {
  var ch = state.current();
  if (isClassSetReservedPunctuator(ch)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
function isClassSetReservedPunctuator(ch) {
  return ch === 33 || ch === 35 || ch === 37 || ch === 38 || ch === 44 || ch === 45 || ch >= 58 && ch <= 62 || ch === 64 || ch === 96 || ch === 126;
}
pp$1.regexp_eatClassControlLetter = function(state) {
  var ch = state.current();
  if (isDecimalDigit(ch) || ch === 95) {
    state.lastIntValue = ch % 32;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatHexEscapeSequence = function(state) {
  var start = state.pos;
  if (state.eat(120)) {
    if (this.regexp_eatFixedHexDigits(state, 2)) {
      return true;
    }
    if (state.switchU) {
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatDecimalDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isDecimalDigit(ch = state.current())) {
    state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
    state.advance();
  }
  return state.pos !== start;
};
function isDecimalDigit(ch) {
  return ch >= 48 && ch <= 57;
}
pp$1.regexp_eatHexDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isHexDigit(ch = state.current())) {
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return state.pos !== start;
};
function isHexDigit(ch) {
  return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
}
function hexToInt(ch) {
  if (ch >= 65 && ch <= 70) {
    return 10 + (ch - 65);
  }
  if (ch >= 97 && ch <= 102) {
    return 10 + (ch - 97);
  }
  return ch - 48;
}
pp$1.regexp_eatLegacyOctalEscapeSequence = function(state) {
  if (this.regexp_eatOctalDigit(state)) {
    var n1 = state.lastIntValue;
    if (this.regexp_eatOctalDigit(state)) {
      var n2 = state.lastIntValue;
      if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
        state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
      } else {
        state.lastIntValue = n1 * 8 + n2;
      }
    } else {
      state.lastIntValue = n1;
    }
    return true;
  }
  return false;
};
pp$1.regexp_eatOctalDigit = function(state) {
  var ch = state.current();
  if (isOctalDigit(ch)) {
    state.lastIntValue = ch - 48;
    state.advance();
    return true;
  }
  state.lastIntValue = 0;
  return false;
};
function isOctalDigit(ch) {
  return ch >= 48 && ch <= 55;
}
pp$1.regexp_eatFixedHexDigits = function(state, length) {
  var start = state.pos;
  state.lastIntValue = 0;
  for (var i = 0;i < length; ++i) {
    var ch = state.current();
    if (!isHexDigit(ch)) {
      state.pos = start;
      return false;
    }
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return true;
};
var Token = function Token(p) {
  this.type = p.type;
  this.value = p.value;
  this.start = p.start;
  this.end = p.end;
  if (p.options.locations) {
    this.loc = new SourceLocation(p, p.startLoc, p.endLoc);
  }
  if (p.options.ranges) {
    this.range = [p.start, p.end];
  }
};
var pp = Parser.prototype;
pp.next = function(ignoreEscapeSequenceInKeyword) {
  if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
  }
  if (this.options.onToken) {
    this.options.onToken(new Token(this));
  }
  this.lastTokEnd = this.end;
  this.lastTokStart = this.start;
  this.lastTokEndLoc = this.endLoc;
  this.lastTokStartLoc = this.startLoc;
  this.nextToken();
};
pp.getToken = function() {
  this.next();
  return new Token(this);
};
if (typeof Symbol !== "undefined") {
  pp[Symbol.iterator] = function() {
    var this$1$1 = this;
    return {
      next: function() {
        var token = this$1$1.getToken();
        return {
          done: token.type === types$1.eof,
          value: token
        };
      }
    };
  };
}
pp.nextToken = function() {
  var curContext = this.curContext();
  if (!curContext || !curContext.preserveSpace) {
    this.skipSpace();
  }
  this.start = this.pos;
  if (this.options.locations) {
    this.startLoc = this.curPosition();
  }
  if (this.pos >= this.input.length) {
    return this.finishToken(types$1.eof);
  }
  if (curContext.override) {
    return curContext.override(this);
  } else {
    this.readToken(this.fullCharCodeAtPos());
  }
};
pp.readToken = function(code2) {
  if (isIdentifierStart(code2, this.options.ecmaVersion >= 6) || code2 === 92) {
    return this.readWord();
  }
  return this.getTokenFromCode(code2);
};
pp.fullCharCodeAt = function(pos) {
  var code2 = this.input.charCodeAt(pos);
  if (code2 <= 55295 || code2 >= 56320) {
    return code2;
  }
  var next = this.input.charCodeAt(pos + 1);
  return next <= 56319 || next >= 57344 ? code2 : (code2 << 10) + next - 56613888;
};
pp.fullCharCodeAtPos = function() {
  return this.fullCharCodeAt(this.pos);
};
pp.skipBlockComment = function() {
  var startLoc = this.options.onComment && this.curPosition();
  var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
  if (end === -1) {
    this.raise(this.pos - 2, "Unterminated comment");
  }
  this.pos = end + 2;
  if (this.options.locations) {
    for (var nextBreak = undefined, pos = start;(nextBreak = nextLineBreak(this.input, pos, this.pos)) > -1; ) {
      ++this.curLine;
      pos = this.lineStart = nextBreak;
    }
  }
  if (this.options.onComment) {
    this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos, startLoc, this.curPosition());
  }
};
pp.skipLineComment = function(startSkip) {
  var start = this.pos;
  var startLoc = this.options.onComment && this.curPosition();
  var ch = this.input.charCodeAt(this.pos += startSkip);
  while (this.pos < this.input.length && !isNewLine(ch)) {
    ch = this.input.charCodeAt(++this.pos);
  }
  if (this.options.onComment) {
    this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos, startLoc, this.curPosition());
  }
};
pp.skipSpace = function() {
  loop:
    while (this.pos < this.input.length) {
      var ch = this.input.charCodeAt(this.pos);
      switch (ch) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          if (this.input.charCodeAt(this.pos + 1) === 10) {
            ++this.pos;
          }
        case 10:
        case 8232:
        case 8233:
          ++this.pos;
          if (this.options.locations) {
            ++this.curLine;
            this.lineStart = this.pos;
          }
          break;
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break loop;
          }
          break;
        default:
          if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
            ++this.pos;
          } else {
            break loop;
          }
      }
    }
};
pp.finishToken = function(type, val) {
  this.end = this.pos;
  if (this.options.locations) {
    this.endLoc = this.curPosition();
  }
  var prevType = this.type;
  this.type = type;
  this.value = val;
  this.updateContext(prevType);
};
pp.readToken_dot = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next >= 48 && next <= 57) {
    return this.readNumber(true);
  }
  var next2 = this.input.charCodeAt(this.pos + 2);
  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
    this.pos += 3;
    return this.finishToken(types$1.ellipsis);
  } else {
    ++this.pos;
    return this.finishToken(types$1.dot);
  }
};
pp.readToken_slash = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (this.exprAllowed) {
    ++this.pos;
    return this.readRegexp();
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(types$1.slash, 1);
};
pp.readToken_mult_modulo_exp = function(code2) {
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  var tokentype = code2 === 42 ? types$1.star : types$1.modulo;
  if (this.options.ecmaVersion >= 7 && code2 === 42 && next === 42) {
    ++size;
    tokentype = types$1.starstar;
    next = this.input.charCodeAt(this.pos + 2);
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, size + 1);
  }
  return this.finishOp(tokentype, size);
};
pp.readToken_pipe_amp = function(code2) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code2) {
    if (this.options.ecmaVersion >= 12) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 === 61) {
        return this.finishOp(types$1.assign, 3);
      }
    }
    return this.finishOp(code2 === 124 ? types$1.logicalOR : types$1.logicalAND, 2);
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(code2 === 124 ? types$1.bitwiseOR : types$1.bitwiseAND, 1);
};
pp.readToken_caret = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(types$1.bitwiseXOR, 1);
};
pp.readToken_plus_min = function(code2) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code2) {
    if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
      this.skipLineComment(3);
      this.skipSpace();
      return this.nextToken();
    }
    return this.finishOp(types$1.incDec, 2);
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(types$1.plusMin, 1);
};
pp.readToken_lt_gt = function(code2) {
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  if (next === code2) {
    size = code2 === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
    if (this.input.charCodeAt(this.pos + size) === 61) {
      return this.finishOp(types$1.assign, size + 1);
    }
    return this.finishOp(types$1.bitShift, size);
  }
  if (next === 33 && code2 === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
    this.skipLineComment(4);
    this.skipSpace();
    return this.nextToken();
  }
  if (next === 61) {
    size = 2;
  }
  return this.finishOp(types$1.relational, size);
};
pp.readToken_eq_excl = function(code2) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) {
    return this.finishOp(types$1.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
  }
  if (code2 === 61 && next === 62 && this.options.ecmaVersion >= 6) {
    this.pos += 2;
    return this.finishToken(types$1.arrow);
  }
  return this.finishOp(code2 === 61 ? types$1.eq : types$1.prefix, 1);
};
pp.readToken_question = function() {
  var ecmaVersion = this.options.ecmaVersion;
  if (ecmaVersion >= 11) {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 46) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 < 48 || next2 > 57) {
        return this.finishOp(types$1.questionDot, 2);
      }
    }
    if (next === 63) {
      if (ecmaVersion >= 12) {
        var next2$1 = this.input.charCodeAt(this.pos + 2);
        if (next2$1 === 61) {
          return this.finishOp(types$1.assign, 3);
        }
      }
      return this.finishOp(types$1.coalesce, 2);
    }
  }
  return this.finishOp(types$1.question, 1);
};
pp.readToken_numberSign = function() {
  var ecmaVersion = this.options.ecmaVersion;
  var code2 = 35;
  if (ecmaVersion >= 13) {
    ++this.pos;
    code2 = this.fullCharCodeAtPos();
    if (isIdentifierStart(code2, true) || code2 === 92) {
      return this.finishToken(types$1.privateId, this.readWord1());
    }
  }
  this.raise(this.pos, "Unexpected character '" + codePointToString(code2) + "'");
};
pp.getTokenFromCode = function(code2) {
  switch (code2) {
    case 46:
      return this.readToken_dot();
    case 40:
      ++this.pos;
      return this.finishToken(types$1.parenL);
    case 41:
      ++this.pos;
      return this.finishToken(types$1.parenR);
    case 59:
      ++this.pos;
      return this.finishToken(types$1.semi);
    case 44:
      ++this.pos;
      return this.finishToken(types$1.comma);
    case 91:
      ++this.pos;
      return this.finishToken(types$1.bracketL);
    case 93:
      ++this.pos;
      return this.finishToken(types$1.bracketR);
    case 123:
      ++this.pos;
      return this.finishToken(types$1.braceL);
    case 125:
      ++this.pos;
      return this.finishToken(types$1.braceR);
    case 58:
      ++this.pos;
      return this.finishToken(types$1.colon);
    case 96:
      if (this.options.ecmaVersion < 6) {
        break;
      }
      ++this.pos;
      return this.finishToken(types$1.backQuote);
    case 48:
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 120 || next === 88) {
        return this.readRadixNumber(16);
      }
      if (this.options.ecmaVersion >= 6) {
        if (next === 111 || next === 79) {
          return this.readRadixNumber(8);
        }
        if (next === 98 || next === 66) {
          return this.readRadixNumber(2);
        }
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(false);
    case 34:
    case 39:
      return this.readString(code2);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(code2);
    case 124:
    case 38:
      return this.readToken_pipe_amp(code2);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(code2);
    case 60:
    case 62:
      return this.readToken_lt_gt(code2);
    case 61:
    case 33:
      return this.readToken_eq_excl(code2);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(types$1.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + codePointToString(code2) + "'");
};
pp.finishOp = function(type, size) {
  var str = this.input.slice(this.pos, this.pos + size);
  this.pos += size;
  return this.finishToken(type, str);
};
pp.readRegexp = function() {
  var escaped, inClass, start = this.pos;
  for (;; ) {
    if (this.pos >= this.input.length) {
      this.raise(start, "Unterminated regular expression");
    }
    var ch = this.input.charAt(this.pos);
    if (lineBreak.test(ch)) {
      this.raise(start, "Unterminated regular expression");
    }
    if (!escaped) {
      if (ch === "[") {
        inClass = true;
      } else if (ch === "]" && inClass) {
        inClass = false;
      } else if (ch === "/" && !inClass) {
        break;
      }
      escaped = ch === "\\";
    } else {
      escaped = false;
    }
    ++this.pos;
  }
  var pattern = this.input.slice(start, this.pos);
  ++this.pos;
  var flagsStart = this.pos;
  var flags = this.readWord1();
  if (this.containsEsc) {
    this.unexpected(flagsStart);
  }
  var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
  state.reset(start, pattern, flags);
  this.validateRegExpFlags(state);
  this.validateRegExpPattern(state);
  var value = null;
  try {
    value = new RegExp(pattern, flags);
  } catch (e) {}
  return this.finishToken(types$1.regexp, { pattern, flags, value });
};
pp.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
  var allowSeparators = this.options.ecmaVersion >= 12 && len === undefined;
  var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;
  var start = this.pos, total = 0, lastCode = 0;
  for (var i = 0, e = len == null ? Infinity : len;i < e; ++i, ++this.pos) {
    var code2 = this.input.charCodeAt(this.pos), val = undefined;
    if (allowSeparators && code2 === 95) {
      if (isLegacyOctalNumericLiteral) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
      }
      if (lastCode === 95) {
        this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
      }
      if (i === 0) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
      }
      lastCode = code2;
      continue;
    }
    if (code2 >= 97) {
      val = code2 - 97 + 10;
    } else if (code2 >= 65) {
      val = code2 - 65 + 10;
    } else if (code2 >= 48 && code2 <= 57) {
      val = code2 - 48;
    } else {
      val = Infinity;
    }
    if (val >= radix) {
      break;
    }
    lastCode = code2;
    total = total * radix + val;
  }
  if (allowSeparators && lastCode === 95) {
    this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
  }
  if (this.pos === start || len != null && this.pos - start !== len) {
    return null;
  }
  return total;
};
function stringToNumber(str, isLegacyOctalNumericLiteral) {
  if (isLegacyOctalNumericLiteral) {
    return parseInt(str, 8);
  }
  return parseFloat(str.replace(/_/g, ""));
}
function stringToBigInt(str) {
  if (typeof BigInt !== "function") {
    return null;
  }
  return BigInt(str.replace(/_/g, ""));
}
pp.readRadixNumber = function(radix) {
  var start = this.pos;
  this.pos += 2;
  var val = this.readInt(radix);
  if (val == null) {
    this.raise(this.start + 2, "Expected number in radix " + radix);
  }
  if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
    val = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
  } else if (isIdentifierStart(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  return this.finishToken(types$1.num, val);
};
pp.readNumber = function(startsWithDot) {
  var start = this.pos;
  if (!startsWithDot && this.readInt(10, undefined, true) === null) {
    this.raise(start, "Invalid number");
  }
  var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
  if (octal && this.strict) {
    this.raise(start, "Invalid number");
  }
  var next = this.input.charCodeAt(this.pos);
  if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
    var val$1 = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
    if (isIdentifierStart(this.fullCharCodeAtPos())) {
      this.raise(this.pos, "Identifier directly after number");
    }
    return this.finishToken(types$1.num, val$1);
  }
  if (octal && /[89]/.test(this.input.slice(start, this.pos))) {
    octal = false;
  }
  if (next === 46 && !octal) {
    ++this.pos;
    this.readInt(10);
    next = this.input.charCodeAt(this.pos);
  }
  if ((next === 69 || next === 101) && !octal) {
    next = this.input.charCodeAt(++this.pos);
    if (next === 43 || next === 45) {
      ++this.pos;
    }
    if (this.readInt(10) === null) {
      this.raise(start, "Invalid number");
    }
  }
  if (isIdentifierStart(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  var val = stringToNumber(this.input.slice(start, this.pos), octal);
  return this.finishToken(types$1.num, val);
};
pp.readCodePoint = function() {
  var ch = this.input.charCodeAt(this.pos), code2;
  if (ch === 123) {
    if (this.options.ecmaVersion < 6) {
      this.unexpected();
    }
    var codePos = ++this.pos;
    code2 = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
    ++this.pos;
    if (code2 > 1114111) {
      this.invalidStringToken(codePos, "Code point out of bounds");
    }
  } else {
    code2 = this.readHexChar(4);
  }
  return code2;
};
pp.readString = function(quote) {
  var out = "", chunkStart = ++this.pos;
  for (;; ) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated string constant");
    }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === quote) {
      break;
    }
    if (ch === 92) {
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(false);
      chunkStart = this.pos;
    } else if (ch === 8232 || ch === 8233) {
      if (this.options.ecmaVersion < 10) {
        this.raise(this.start, "Unterminated string constant");
      }
      ++this.pos;
      if (this.options.locations) {
        this.curLine++;
        this.lineStart = this.pos;
      }
    } else {
      if (isNewLine(ch)) {
        this.raise(this.start, "Unterminated string constant");
      }
      ++this.pos;
    }
  }
  out += this.input.slice(chunkStart, this.pos++);
  return this.finishToken(types$1.string, out);
};
var INVALID_TEMPLATE_ESCAPE_ERROR = {};
pp.tryReadTemplateToken = function() {
  this.inTemplateElement = true;
  try {
    this.readTmplToken();
  } catch (err) {
    if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
      this.readInvalidTemplateToken();
    } else {
      throw err;
    }
  }
  this.inTemplateElement = false;
};
pp.invalidStringToken = function(position, message) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
    throw INVALID_TEMPLATE_ESCAPE_ERROR;
  } else {
    this.raise(position, message);
  }
};
pp.readTmplToken = function() {
  var out = "", chunkStart = this.pos;
  for (;; ) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated template");
    }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
      if (this.pos === this.start && (this.type === types$1.template || this.type === types$1.invalidTemplate)) {
        if (ch === 36) {
          this.pos += 2;
          return this.finishToken(types$1.dollarBraceL);
        } else {
          ++this.pos;
          return this.finishToken(types$1.backQuote);
        }
      }
      out += this.input.slice(chunkStart, this.pos);
      return this.finishToken(types$1.template, out);
    }
    if (ch === 92) {
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(true);
      chunkStart = this.pos;
    } else if (isNewLine(ch)) {
      out += this.input.slice(chunkStart, this.pos);
      ++this.pos;
      switch (ch) {
        case 13:
          if (this.input.charCodeAt(this.pos) === 10) {
            ++this.pos;
          }
        case 10:
          out += `
`;
          break;
        default:
          out += String.fromCharCode(ch);
          break;
      }
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
      chunkStart = this.pos;
    } else {
      ++this.pos;
    }
  }
};
pp.readInvalidTemplateToken = function() {
  for (;this.pos < this.input.length; this.pos++) {
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{") {
          break;
        }
      case "`":
        return this.finishToken(types$1.invalidTemplate, this.input.slice(this.start, this.pos));
      case "\r":
        if (this.input[this.pos + 1] === `
`) {
          ++this.pos;
        }
      case `
`:
      case "\u2028":
      case "\u2029":
        ++this.curLine;
        this.lineStart = this.pos + 1;
        break;
    }
  }
  this.raise(this.start, "Unterminated template");
};
pp.readEscapedChar = function(inTemplate) {
  var ch = this.input.charCodeAt(++this.pos);
  ++this.pos;
  switch (ch) {
    case 110:
      return `
`;
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return codePointToString(this.readCodePoint());
    case 116:
      return "\t";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      if (this.input.charCodeAt(this.pos) === 10) {
        ++this.pos;
      }
    case 10:
      if (this.options.locations) {
        this.lineStart = this.pos;
        ++this.curLine;
      }
      return "";
    case 56:
    case 57:
      if (this.strict) {
        this.invalidStringToken(this.pos - 1, "Invalid escape sequence");
      }
      if (inTemplate) {
        var codePos = this.pos - 1;
        this.invalidStringToken(codePos, "Invalid escape sequence in template string");
      }
    default:
      if (ch >= 48 && ch <= 55) {
        var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
        var octal = parseInt(octalStr, 8);
        if (octal > 255) {
          octalStr = octalStr.slice(0, -1);
          octal = parseInt(octalStr, 8);
        }
        this.pos += octalStr.length - 1;
        ch = this.input.charCodeAt(this.pos);
        if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
          this.invalidStringToken(this.pos - 1 - octalStr.length, inTemplate ? "Octal literal in template string" : "Octal literal in strict mode");
        }
        return String.fromCharCode(octal);
      }
      if (isNewLine(ch)) {
        if (this.options.locations) {
          this.lineStart = this.pos;
          ++this.curLine;
        }
        return "";
      }
      return String.fromCharCode(ch);
  }
};
pp.readHexChar = function(len) {
  var codePos = this.pos;
  var n = this.readInt(16, len);
  if (n === null) {
    this.invalidStringToken(codePos, "Bad character escape sequence");
  }
  return n;
};
pp.readWord1 = function() {
  this.containsEsc = false;
  var word = "", first = true, chunkStart = this.pos;
  var astral = this.options.ecmaVersion >= 6;
  while (this.pos < this.input.length) {
    var ch = this.fullCharCodeAtPos();
    if (isIdentifierChar(ch, astral)) {
      this.pos += ch <= 65535 ? 1 : 2;
    } else if (ch === 92) {
      this.containsEsc = true;
      word += this.input.slice(chunkStart, this.pos);
      var escStart = this.pos;
      if (this.input.charCodeAt(++this.pos) !== 117) {
        this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
      }
      ++this.pos;
      var esc = this.readCodePoint();
      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) {
        this.invalidStringToken(escStart, "Invalid Unicode escape");
      }
      word += codePointToString(esc);
      chunkStart = this.pos;
    } else {
      break;
    }
    first = false;
  }
  return word + this.input.slice(chunkStart, this.pos);
};
pp.readWord = function() {
  var word = this.readWord1();
  var type = types$1.name;
  if (this.keywords.test(word)) {
    type = keywords[word];
  }
  return this.finishToken(type, word);
};
var version3 = "8.19.0";
Parser.acorn = {
  Parser,
  version: version3,
  defaultOptions: defaultOptions2,
  Position,
  SourceLocation,
  getLineInfo,
  Node,
  TokenType,
  tokTypes: types$1,
  keywordTypes: keywords,
  TokContext,
  tokContexts: types2,
  isIdentifierChar,
  isIdentifierStart,
  Token,
  isNewLine,
  lineBreak,
  lineBreakG,
  nonASCIIwhitespace
};
function parse4(input, options2) {
  return Parser.parse(input, options2);
}

// .cache/browser-demo/almost-src/shims/rollup.ts
var rollupInstance = null;
var loadPromise = null;
async function loadRollup() {
  if (rollupInstance)
    return rollupInstance;
  if (loadPromise)
    return loadPromise;
  loadPromise = (async () => {
    try {
      const rollup2 = await import(ROLLUP_BROWSER_CDN);
      rollupInstance = rollup2;
      console.log("[rollup] Browser version loaded");
      return rollup2;
    } catch (error) {
      console.error("[rollup] Failed to load browser version:", error);
      loadPromise = null;
      throw error;
    }
  })();
  return loadPromise;
}
var VERSION = ROLLUP_BROWSER_VERSION;
async function rollup(options2) {
  const r = await loadRollup();
  return r.rollup(options2);
}
async function watch3(options2) {
  const r = await loadRollup();
  return r.watch(options2);
}
function parseAst(input, options2) {
  return parse4(input, {
    ecmaVersion: "latest",
    sourceType: "module",
    allowReturnOutsideFunction: options2?.allowReturnOutsideFunction ?? false,
    locations: true
  });
}
async function parseAstAsync(input, options2) {
  return parseAst(input, options2);
}
function getPackageBase() {
  return "";
}
var rollup_default = {
  VERSION,
  rollup,
  watch: watch3,
  loadRollup,
  parseAst,
  parseAstAsync
};

// .cache/browser-demo/almost-src/shims/v8.ts
var exports_v8 = {};
__export(exports_v8, {
  DefaultDeserializer: () => DefaultDeserializer,
  DefaultSerializer: () => DefaultSerializer,
  Deserializer: () => Deserializer,
  Serializer: () => Serializer,
  default: () => v8_default,
  deserialize: () => deserialize,
  getHeapCodeStatistics: () => getHeapCodeStatistics,
  getHeapSnapshot: () => getHeapSnapshot,
  getHeapSpaceStatistics: () => getHeapSpaceStatistics,
  getHeapStatistics: () => getHeapStatistics,
  promiseHooks: () => promiseHooks,
  serialize: () => serialize,
  setFlagsFromString: () => setFlagsFromString,
  stopCoverage: () => stopCoverage,
  takeCoverage: () => takeCoverage,
  writeHeapSnapshot: () => writeHeapSnapshot
});
function getHeapStatistics() {
  return {
    total_heap_size: 0,
    total_heap_size_executable: 0,
    total_physical_size: 0,
    total_available_size: 0,
    used_heap_size: 0,
    heap_size_limit: 0,
    malloced_memory: 0,
    peak_malloced_memory: 0,
    does_zap_garbage: 0,
    number_of_native_contexts: 0,
    number_of_detached_contexts: 0
  };
}
function getHeapSpaceStatistics() {
  return [];
}
function getHeapCodeStatistics() {
  return {
    code_and_metadata_size: 0,
    bytecode_and_metadata_size: 0,
    external_script_source_size: 0
  };
}
function getHeapSnapshot() {
  return null;
}
function writeHeapSnapshot() {
  return "";
}
function setFlagsFromString(_flags) {}
function takeCoverage() {}
function stopCoverage() {}
function serialize(value) {
  const json = JSON.stringify(value);
  return Buffer.from(json);
}
function deserialize(buffer) {
  return JSON.parse(buffer.toString());
}

class Serializer {
  writeHeader() {}
  writeValue(_value) {}
  releaseBuffer() {
    return Buffer.from("");
  }
}

class Deserializer {
  constructor(_buffer) {}
  readHeader() {
    return true;
  }
  readValue() {
    return null;
  }
}

class DefaultSerializer extends Serializer {
}

class DefaultDeserializer extends Deserializer {
}
function promiseHooks() {
  return {
    onInit: () => {},
    onSettled: () => {},
    onBefore: () => {},
    onAfter: () => {},
    createHook: () => ({ enable: () => {}, disable: () => {} })
  };
}
var v8_default = {
  getHeapStatistics,
  getHeapSpaceStatistics,
  getHeapCodeStatistics,
  getHeapSnapshot,
  writeHeapSnapshot,
  setFlagsFromString,
  takeCoverage,
  stopCoverage,
  serialize,
  deserialize,
  Serializer,
  Deserializer,
  DefaultSerializer,
  DefaultDeserializer,
  promiseHooks
};

// .cache/browser-demo/almost-src/shims/readline.ts
var exports_readline = {};
__export(exports_readline, {
  Interface: () => Interface,
  clearLine: () => clearLine,
  clearScreenDown: () => clearScreenDown,
  createInterface: () => createInterface,
  cursorTo: () => cursorTo,
  default: () => readline_default,
  emitKeypressEvents: () => emitKeypressEvents,
  moveCursor: () => moveCursor,
  promises: () => promises3
});
class Interface extends EventEmitter {
  promptText;
  constructor(_options2) {
    super();
    this.promptText = _options2?.prompt ?? "";
  }
  prompt(_preserveCursor) {}
  setPrompt(prompt) {
    this.promptText = prompt;
  }
  getPrompt() {
    return this.promptText;
  }
  question(_query, callback) {
    setTimeout(() => callback(""), 0);
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  close() {
    this.emit("close");
  }
  write(_data, _key) {}
  line = "";
  cursor = 0;
  getCursorPos() {
    return { rows: 0, cols: 0 };
  }
}
function createInterface(options2) {
  return new Interface(options2);
}
function clearLine(_stream, _dir, _callback) {
  _callback?.();
  return true;
}
function clearScreenDown(_stream, _callback) {
  _callback?.();
  return true;
}
function cursorTo(_stream, _x, _y, _callback) {
  _callback?.();
  return true;
}
function moveCursor(_stream, _dx, _dy, _callback) {
  _callback?.();
  return true;
}
function emitKeypressEvents(_stream, _interface) {}
var promises3 = {
  createInterface: (options2) => {
    const rl = createInterface(options2);
    return {
      question: (query) => new Promise((resolve) => {
        rl.question(query, resolve);
      }),
      close: () => rl.close(),
      [Symbol.asyncIterator]: async function* () {}
    };
  }
};
var readline_default = {
  Interface,
  createInterface,
  clearLine,
  clearScreenDown,
  cursorTo,
  moveCursor,
  emitKeypressEvents,
  promises: promises3
};

// .cache/browser-demo/almost-src/shims/tls.ts
var exports_tls = {};
__export(exports_tls, {
  DEFAULT_ECDH_CURVE: () => DEFAULT_ECDH_CURVE,
  DEFAULT_MAX_VERSION: () => DEFAULT_MAX_VERSION,
  DEFAULT_MIN_VERSION: () => DEFAULT_MIN_VERSION,
  Server: () => Server4,
  TLSSocket: () => TLSSocket,
  connect: () => connect2,
  createSecureContext: () => createSecureContext,
  createServer: () => createServer3,
  default: () => tls_default,
  getCiphers: () => getCiphers2,
  rootCertificates: () => rootCertificates
});
class TLSSocket extends EventEmitter {
  authorized = false;
  encrypted = true;
  constructor(_socket, _options2) {
    super();
  }
  getPeerCertificate(_detailed) {
    return {};
  }
  getCipher() {
    return null;
  }
  getProtocol() {
    return null;
  }
  setServername(_name) {}
  renegotiate(_options2, _callback) {
    return false;
  }
}

class Server4 extends EventEmitter {
  constructor(_options2, _connectionListener) {
    super();
  }
  listen(..._args) {
    return this;
  }
  close(_callback) {
    return this;
  }
  address() {
    return null;
  }
  getTicketKeys() {
    return Buffer.from("");
  }
  setTicketKeys(_keys) {}
  setSecureContext(_options2) {}
}
function createServer3(_options2, _connectionListener) {
  return new Server4(_options2, _connectionListener);
}
function connect2(_options2, _callback) {
  const socket = new TLSSocket;
  if (_callback) {
    setTimeout(_callback, 0);
  }
  return socket;
}
var createSecureContext = (_options2) => ({});
var getCiphers2 = () => ["TLS_AES_256_GCM_SHA384", "TLS_AES_128_GCM_SHA256"];
var DEFAULT_ECDH_CURVE = "auto";
var DEFAULT_MAX_VERSION = "TLSv1.3";
var DEFAULT_MIN_VERSION = "TLSv1.2";
var rootCertificates = [];
var tls_default = {
  TLSSocket,
  Server: Server4,
  createServer: createServer3,
  connect: connect2,
  createSecureContext,
  getCiphers: getCiphers2,
  DEFAULT_ECDH_CURVE,
  DEFAULT_MAX_VERSION,
  DEFAULT_MIN_VERSION,
  rootCertificates
};

// .cache/browser-demo/almost-src/shims/http2.ts
var exports_http2 = {};
__export(exports_http2, {
  ClientHttp2Session: () => ClientHttp2Session,
  Http2ServerRequest: () => Http2ServerRequest,
  Http2ServerResponse: () => Http2ServerResponse,
  Http2Session: () => Http2Session,
  Http2Stream: () => Http2Stream,
  ServerHttp2Session: () => ServerHttp2Session,
  connect: () => connect3,
  constants: () => constants7,
  createSecureServer: () => createSecureServer,
  createServer: () => createServer4,
  default: () => http2_default,
  getDefaultSettings: () => getDefaultSettings,
  getPackedSettings: () => getPackedSettings,
  getUnpackedSettings: () => getUnpackedSettings,
  sensitiveHeaders: () => sensitiveHeaders
});
class Http2Session extends EventEmitter {
  close(_callback) {
    if (_callback)
      setTimeout(_callback, 0);
  }
  destroy(_error, _code) {}
  get destroyed() {
    return false;
  }
  get encrypted() {
    return false;
  }
  get closed() {
    return false;
  }
  ping(_callback) {
    return false;
  }
  ref() {}
  unref() {}
  setTimeout(_msecs, _callback) {}
}

class ClientHttp2Session extends Http2Session {
}

class ServerHttp2Session extends Http2Session {
}

class Http2Stream extends EventEmitter {
  close(_code, _callback) {}
  get id() {
    return 0;
  }
  get pending() {
    return false;
  }
  get destroyed() {
    return false;
  }
  get closed() {
    return false;
  }
  priority(_options2) {}
  setTimeout(_msecs, _callback) {}
  end(_data, _encoding, _callback) {}
}

class Http2ServerRequest extends EventEmitter {
}

class Http2ServerResponse extends EventEmitter {
  writeHead(_statusCode, _headers) {
    return this;
  }
  end(_data) {}
}
function createServer4(_options2, _onRequestHandler) {
  return new EventEmitter;
}
function createSecureServer(_options2, _onRequestHandler) {
  return new EventEmitter;
}
function connect3(_authority, _options2, _listener) {
  return new ClientHttp2Session;
}
var constants7 = {
  NGHTTP2_SESSION_SERVER: 0,
  NGHTTP2_SESSION_CLIENT: 1,
  HTTP2_HEADER_STATUS: ":status",
  HTTP2_HEADER_METHOD: ":method",
  HTTP2_HEADER_AUTHORITY: ":authority",
  HTTP2_HEADER_SCHEME: ":scheme",
  HTTP2_HEADER_PATH: ":path",
  HTTP_STATUS_OK: 200,
  HTTP_STATUS_NOT_FOUND: 404
};
function getDefaultSettings() {
  return {};
}
function getPackedSettings(_settings) {
  return Buffer.from("");
}
function getUnpackedSettings(_buf) {
  return {};
}
var sensitiveHeaders = Symbol("sensitiveHeaders");
var http2_default = {
  Http2Session,
  ClientHttp2Session,
  ServerHttp2Session,
  Http2Stream,
  Http2ServerRequest,
  Http2ServerResponse,
  createServer: createServer4,
  createSecureServer,
  connect: connect3,
  constants: constants7,
  getDefaultSettings,
  getPackedSettings,
  getUnpackedSettings,
  sensitiveHeaders
};

// .cache/browser-demo/almost-src/shims/cluster.ts
var exports_cluster = {};
__export(exports_cluster, {
  SCHED_NONE: () => SCHED_NONE,
  SCHED_RR: () => SCHED_RR,
  Worker: () => Worker2,
  default: () => cluster_default,
  disconnect: () => disconnect,
  emit: () => emit,
  fork: () => fork2,
  isMaster: () => isMaster,
  isPrimary: () => isPrimary,
  isWorker: () => isWorker,
  on: () => on,
  once: () => once,
  removeListener: () => removeListener,
  schedulingPolicy: () => schedulingPolicy,
  settings: () => settings,
  setupMaster: () => setupMaster,
  setupPrimary: () => setupPrimary,
  worker: () => worker,
  workers: () => workers
});
var isMaster = true;
var isPrimary = true;
var isWorker = false;

class Worker2 extends EventEmitter {
  id = 0;
  process = null;
  send(_message, _callback) {
    return false;
  }
  kill(_signal) {}
  disconnect() {}
  isDead() {
    return false;
  }
  isConnected() {
    return false;
  }
}
var worker = null;
var workers = {};
function fork2(_env) {
  return new Worker2;
}
function disconnect(_callback) {
  if (_callback)
    setTimeout(_callback, 0);
}
var settings = {};
var SCHED_NONE = 1;
var SCHED_RR = 2;
var schedulingPolicy = SCHED_RR;
function setupMaster(_settings) {}
function setupPrimary(_settings) {}
var clusterEmitter = new EventEmitter;
var on = clusterEmitter.on.bind(clusterEmitter);
var once = clusterEmitter.once.bind(clusterEmitter);
var emit = clusterEmitter.emit.bind(clusterEmitter);
var removeListener = clusterEmitter.removeListener.bind(clusterEmitter);
var cluster_default = {
  isMaster,
  isPrimary,
  isWorker,
  Worker: Worker2,
  worker,
  workers,
  fork: fork2,
  disconnect,
  settings,
  SCHED_NONE,
  SCHED_RR,
  schedulingPolicy,
  setupMaster,
  setupPrimary,
  on,
  once,
  emit,
  removeListener
};

// .cache/browser-demo/almost-src/shims/dgram.ts
var exports_dgram = {};
__export(exports_dgram, {
  Socket: () => Socket2,
  createSocket: () => createSocket,
  default: () => dgram_default
});
class Socket2 extends EventEmitter {
  bind(_port, _address, _callback) {
    if (_callback)
      setTimeout(_callback, 0);
    return this;
  }
  close(_callback) {
    if (_callback)
      setTimeout(_callback, 0);
  }
  send(_msg, _offset, _length, _port, _address, _callback) {
    if (_callback)
      setTimeout(() => _callback(null, 0), 0);
  }
  address() {
    return { address: "0.0.0.0", family: "IPv4", port: 0 };
  }
  setBroadcast(_flag) {}
  setTTL(_ttl) {
    return _ttl;
  }
  setMulticastTTL(_ttl) {
    return _ttl;
  }
  setMulticastLoopback(_flag) {
    return _flag;
  }
  setMulticastInterface(_multicastInterface) {}
  addMembership(_multicastAddress, _multicastInterface) {}
  dropMembership(_multicastAddress, _multicastInterface) {}
  ref() {
    return this;
  }
  unref() {
    return this;
  }
  setRecvBufferSize(_size) {}
  setSendBufferSize(_size) {}
  getRecvBufferSize() {
    return 0;
  }
  getSendBufferSize() {
    return 0;
  }
}
function createSocket(_type, _callback) {
  return new Socket2;
}
var dgram_default = {
  Socket: Socket2,
  createSocket
};

// .cache/browser-demo/almost-src/shims/vm.ts
var exports_vm = {};
__export(exports_vm, {
  Module: () => Module2,
  Script: () => Script,
  SourceTextModule: () => SourceTextModule,
  SyntheticModule: () => SyntheticModule,
  compileFunction: () => compileFunction,
  createContext: () => createContext,
  default: () => vm_default,
  isContext: () => isContext,
  runInContext: () => runInContext,
  runInNewContext: () => runInNewContext,
  runInThisContext: () => runInThisContext
});

class Script {
  code;
  constructor(code2, _options2) {
    this.code = code2;
  }
  runInThisContext(_options) {
    return eval(this.code);
  }
  runInNewContext(contextObject, _options2) {
    const keys = contextObject ? Object.keys(contextObject) : [];
    const values = contextObject ? Object.values(contextObject) : [];
    const fn2 = new Function(...keys, `return eval(${JSON.stringify(this.code)})`);
    return fn2(...values);
  }
  runInContext(_context, _options2) {
    return this.runInNewContext(_context, _options2);
  }
  createCachedData() {
    return Buffer.from("");
  }
}
function createContext(contextObject, _options2) {
  return contextObject || {};
}
function isContext(_sandbox) {
  return true;
}
function runInThisContext(code, _options) {
  return eval(code);
}
function runInNewContext(code2, contextObject, _options2) {
  const script = new Script(code2);
  return script.runInNewContext(contextObject);
}
function runInContext(code2, context, _options2) {
  return runInNewContext(code2, context);
}
function compileFunction(code2, params, _options2) {
  return new Function(...params || [], code2);
}

class Module2 {
  constructor(_code, _options2) {}
  link(_linker) {
    return Promise.resolve();
  }
  evaluate(_options2) {
    return Promise.resolve();
  }
  get status() {
    return "unlinked";
  }
  get identifier() {
    return "";
  }
  get context() {
    return {};
  }
  get namespace() {
    return {};
  }
}

class SourceTextModule extends Module2 {
}

class SyntheticModule extends Module2 {
  setExport(_name, _value) {}
}
var vm_default = {
  Script,
  createContext,
  isContext,
  runInThisContext,
  runInNewContext,
  runInContext,
  compileFunction,
  Module: Module2,
  SourceTextModule,
  SyntheticModule
};

// .cache/browser-demo/almost-src/shims/inspector.ts
var exports_inspector = {};
__export(exports_inspector, {
  Session: () => Session,
  close: () => close,
  console: () => console2,
  default: () => inspector_default,
  open: () => open,
  url: () => url,
  waitForDebugger: () => waitForDebugger
});
class Session extends EventEmitter {
  connect() {}
  connectToMainThread() {}
  disconnect() {}
  post(_method, _params, _callback) {
    if (_callback)
      setTimeout(() => _callback(null, {}), 0);
  }
}
function open(_port, _host, _wait) {}
function close() {}
function url() {
  return;
}
function waitForDebugger() {}
var console2 = globalThis.console;
var inspector_default = {
  Session,
  open,
  close,
  url,
  waitForDebugger,
  console: console2
};

// .cache/browser-demo/almost-src/shims/async_hooks.ts
var exports_async_hooks = {};
__export(exports_async_hooks, {
  AsyncLocalStorage: () => AsyncLocalStorage,
  AsyncResource: () => AsyncResource,
  createHook: () => createHook,
  default: () => async_hooks_default,
  executionAsyncId: () => executionAsyncId,
  executionAsyncResource: () => executionAsyncResource,
  triggerAsyncId: () => triggerAsyncId
});

class AsyncResource {
  constructor(_type, _options2) {}
  runInAsyncScope(fn2, thisArg, ...args) {
    return fn2.apply(thisArg, args);
  }
  emitDestroy() {
    return this;
  }
  asyncId() {
    return 0;
  }
  triggerAsyncId() {
    return 0;
  }
  static bind(fn2, _type) {
    return fn2;
  }
}

class AsyncLocalStorage {
  store;
  disable() {}
  getStore() {
    return this.store;
  }
  run(store, callback) {
    const prev = this.store;
    this.store = store;
    try {
      return callback();
    } finally {
      this.store = prev;
    }
  }
  exit(callback) {
    const prev = this.store;
    this.store = undefined;
    try {
      return callback();
    } finally {
      this.store = prev;
    }
  }
  enterWith(store) {
    this.store = store;
  }
}
function createHook(_callbacks) {
  return {
    enable() {
      return this;
    },
    disable() {
      return this;
    }
  };
}
function executionAsyncId() {
  return 0;
}
function executionAsyncResource() {
  return {};
}
function triggerAsyncId() {
  return 0;
}
var async_hooks_default = {
  AsyncResource,
  AsyncLocalStorage,
  createHook,
  executionAsyncId,
  executionAsyncResource,
  triggerAsyncId
};

// .cache/browser-demo/almost-src/shims/domain.ts
var exports_domain = {};
__export(exports_domain, {
  Domain: () => Domain,
  active: () => active,
  create: () => create,
  default: () => domain_default
});
class Domain extends EventEmitter {
  members = [];
  add(emitter) {
    this.members.push(emitter);
  }
  remove(emitter) {
    const index = this.members.indexOf(emitter);
    if (index !== -1) {
      this.members.splice(index, 1);
    }
  }
  bind(callback) {
    return callback;
  }
  intercept(callback) {
    return callback;
  }
  run(fn2) {
    return fn2();
  }
  dispose() {
    this.members = [];
  }
  enter() {}
  exit() {}
}
function create() {
  return new Domain;
}
var active = null;
var domain_default = {
  Domain,
  create,
  active
};

// .cache/browser-demo/almost-src/shims/diagnostics_channel.ts
var exports_diagnostics_channel = {};
__export(exports_diagnostics_channel, {
  Channel: () => Channel,
  TracingChannel: () => TracingChannel,
  channel: () => channel,
  default: () => diagnostics_channel_default,
  hasSubscribers: () => hasSubscribers,
  subscribe: () => subscribe,
  tracingChannel: () => tracingChannel,
  unsubscribe: () => unsubscribe
});

class Channel {
  name;
  _subscribers = new Set;
  constructor(name) {
    this.name = name;
  }
  get hasSubscribers() {
    return this._subscribers.size > 0;
  }
  publish(message) {
    for (const subscriber of this._subscribers) {
      try {
        subscriber(message, this.name);
      } catch (err) {
        console.error("Error in diagnostics channel subscriber:", err);
      }
    }
  }
  subscribe(onMessage) {
    this._subscribers.add(onMessage);
  }
  unsubscribe(onMessage) {
    return this._subscribers.delete(onMessage);
  }
  bindStore(store, transform) {}
  unbindStore(store) {
    return false;
  }
}
var channels = new Map;
function channel(name) {
  let ch = channels.get(name);
  if (!ch) {
    ch = new Channel(name);
    channels.set(name, ch);
  }
  return ch;
}
function hasSubscribers(name) {
  const ch = channels.get(name);
  return ch ? ch.hasSubscribers : false;
}
function subscribe(name, onMessage) {
  channel(name).subscribe(onMessage);
}
function unsubscribe(name, onMessage) {
  const ch = channels.get(name);
  return ch ? ch.unsubscribe(onMessage) : false;
}

class TracingChannel {
  channels;
  constructor(nameOrChannels) {
    if (typeof nameOrChannels === "string") {
      this.channels = {
        start: channel(`tracing:${nameOrChannels}:start`),
        end: channel(`tracing:${nameOrChannels}:end`),
        asyncStart: channel(`tracing:${nameOrChannels}:asyncStart`),
        asyncEnd: channel(`tracing:${nameOrChannels}:asyncEnd`),
        error: channel(`tracing:${nameOrChannels}:error`)
      };
    } else {
      this.channels = nameOrChannels;
    }
  }
  get hasSubscribers() {
    return Object.values(this.channels).some((ch) => ch.hasSubscribers);
  }
  subscribe(handlers) {
    if (handlers.start)
      this.channels.start.subscribe(handlers.start);
    if (handlers.end)
      this.channels.end.subscribe(handlers.end);
    if (handlers.asyncStart)
      this.channels.asyncStart.subscribe(handlers.asyncStart);
    if (handlers.asyncEnd)
      this.channels.asyncEnd.subscribe(handlers.asyncEnd);
    if (handlers.error)
      this.channels.error.subscribe(handlers.error);
  }
  unsubscribe(handlers) {
    if (handlers.start)
      this.channels.start.unsubscribe(handlers.start);
    if (handlers.end)
      this.channels.end.unsubscribe(handlers.end);
    if (handlers.asyncStart)
      this.channels.asyncStart.unsubscribe(handlers.asyncStart);
    if (handlers.asyncEnd)
      this.channels.asyncEnd.unsubscribe(handlers.asyncEnd);
    if (handlers.error)
      this.channels.error.unsubscribe(handlers.error);
  }
  traceSync(fn2, context, thisArg) {
    this.channels.start.publish(context);
    try {
      const result = fn2.call(thisArg);
      this.channels.end.publish(context);
      return result;
    } catch (error) {
      this.channels.error.publish({ error, ...context });
      throw error;
    }
  }
  async tracePromise(fn2, context, thisArg) {
    this.channels.start.publish(context);
    try {
      const result = await fn2.call(thisArg);
      this.channels.asyncEnd.publish(context);
      return result;
    } catch (error) {
      this.channels.error.publish({ error, ...context });
      throw error;
    }
  }
  traceCallback(fn2, position, context, thisArg) {
    return fn2;
  }
}
function tracingChannel(name) {
  return new TracingChannel(name);
}
var diagnostics_channel_default = {
  channel,
  hasSubscribers,
  subscribe,
  unsubscribe,
  tracingChannel,
  Channel,
  TracingChannel
};

// .cache/browser-demo/almost-src/shims/assert.ts
class AssertionError extends Error {
  actual;
  expected;
  operator;
  generatedMessage;
  code = "ERR_ASSERTION";
  constructor(options2) {
    const message = options2.message || `${JSON.stringify(options2.actual)} ${options2.operator || "=="} ${JSON.stringify(options2.expected)}`;
    super(message);
    this.name = "AssertionError";
    this.actual = options2.actual;
    this.expected = options2.expected;
    this.operator = options2.operator || "";
    this.generatedMessage = !options2.message;
    if (Error.captureStackTrace && options2.stackStartFn) {
      Error.captureStackTrace(this, options2.stackStartFn);
    }
  }
}
function isDeepStrictEqual(actual, expected) {
  if (actual === expected) {
    return true;
  }
  if (actual === null || expected === null || actual === undefined || expected === undefined) {
    return actual === expected;
  }
  if (typeof actual !== typeof expected) {
    return false;
  }
  if (typeof actual === "number" && Number.isNaN(actual) && Number.isNaN(expected)) {
    return true;
  }
  if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();
  }
  if (actual instanceof RegExp && expected instanceof RegExp) {
    return actual.source === expected.source && actual.flags === expected.flags;
  }
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.length !== expected.length) {
      return false;
    }
    for (let i = 0;i < actual.length; i++) {
      if (!isDeepStrictEqual(actual[i], expected[i])) {
        return false;
      }
    }
    return true;
  }
  if (actual instanceof Uint8Array && expected instanceof Uint8Array) {
    if (actual.length !== expected.length) {
      return false;
    }
    for (let i = 0;i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
  if (actual instanceof Map && expected instanceof Map) {
    if (actual.size !== expected.size) {
      return false;
    }
    const actualEntries = Array.from(actual.entries());
    for (let i = 0;i < actualEntries.length; i++) {
      const [key, value] = actualEntries[i];
      if (!expected.has(key) || !isDeepStrictEqual(value, expected.get(key))) {
        return false;
      }
    }
    return true;
  }
  if (actual instanceof Set && expected instanceof Set) {
    if (actual.size !== expected.size) {
      return false;
    }
    const actualValues = Array.from(actual.values());
    const expectedValues = Array.from(expected.values());
    for (let i = 0;i < actualValues.length; i++) {
      const value = actualValues[i];
      if (!expected.has(value)) {
        let found = false;
        for (let j = 0;j < expectedValues.length; j++) {
          if (isDeepStrictEqual(value, expectedValues[j])) {
            found = true;
            break;
          }
        }
        if (!found)
          return false;
      }
    }
    return true;
  }
  if (typeof actual === "object" && typeof expected === "object") {
    const actualKeys = Object.keys(actual);
    const expectedKeys = Object.keys(expected);
    if (actualKeys.length !== expectedKeys.length) {
      return false;
    }
    for (const key of actualKeys) {
      if (!Object.prototype.hasOwnProperty.call(expected, key)) {
        return false;
      }
      if (!isDeepStrictEqual(actual[key], expected[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
}
function assert(value, message) {
  if (!value) {
    if (message instanceof Error) {
      throw message;
    }
    throw new AssertionError({
      message: message || "The expression evaluated to a falsy value",
      actual: value,
      expected: true,
      operator: "==",
      stackStartFn: assert
    });
  }
}
assert.ok = function ok(value, message) {
  if (!value) {
    if (message instanceof Error) {
      throw message;
    }
    throw new AssertionError({
      message: message || "The expression evaluated to a falsy value",
      actual: value,
      expected: true,
      operator: "==",
      stackStartFn: ok
    });
  }
};
assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    if (message instanceof Error) {
      throw message;
    }
    throw new AssertionError({
      message,
      actual,
      expected,
      operator: "===",
      stackStartFn: strictEqual
    });
  }
};
assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    if (message instanceof Error) {
      throw message;
    }
    throw new AssertionError({
      message,
      actual,
      expected,
      operator: "!==",
      stackStartFn: notStrictEqual
    });
  }
};
assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!isDeepStrictEqual(actual, expected)) {
    if (message instanceof Error) {
      throw message;
    }
    throw new AssertionError({
      message,
      actual,
      expected,
      operator: "deepStrictEqual",
      stackStartFn: deepStrictEqual
    });
  }
};
assert.notDeepStrictEqual = function notDeepStrictEqual(actual, expected, message) {
  if (isDeepStrictEqual(actual, expected)) {
    if (message instanceof Error) {
      throw message;
    }
    throw new AssertionError({
      message,
      actual,
      expected,
      operator: "notDeepStrictEqual",
      stackStartFn: notDeepStrictEqual
    });
  }
};
assert.throws = function throws(fn2, errorOrMessage, message) {
  let threw = false;
  let thrownError;
  try {
    fn2();
  } catch (err) {
    threw = true;
    thrownError = err;
  }
  if (!threw) {
    throw new AssertionError({
      message: typeof errorOrMessage === "string" ? errorOrMessage : message || "Expected function to throw",
      actual: undefined,
      expected: errorOrMessage,
      operator: "throws",
      stackStartFn: throws
    });
  }
  if (errorOrMessage !== undefined && typeof errorOrMessage !== "string") {
    if (errorOrMessage instanceof RegExp) {
      const errMessage = thrownError instanceof Error ? thrownError.message : String(thrownError);
      if (!errorOrMessage.test(errMessage)) {
        throw new AssertionError({
          message: message || `The error message did not match the regular expression`,
          actual: thrownError,
          expected: errorOrMessage,
          operator: "throws",
          stackStartFn: throws
        });
      }
    } else if (typeof errorOrMessage === "function") {
      if (!(thrownError instanceof errorOrMessage)) {
        throw new AssertionError({
          message: message || `The error is not an instance of the expected type`,
          actual: thrownError,
          expected: errorOrMessage,
          operator: "throws",
          stackStartFn: throws
        });
      }
    } else if (typeof errorOrMessage === "object") {
      const expected = errorOrMessage;
      const err = thrownError;
      if (expected.message !== undefined) {
        const errMsg = err.message || String(thrownError);
        if (expected.message instanceof RegExp) {
          if (!expected.message.test(errMsg)) {
            throw new AssertionError({
              message: message || `The error message did not match`,
              actual: errMsg,
              expected: expected.message,
              operator: "throws",
              stackStartFn: throws
            });
          }
        } else if (errMsg !== expected.message) {
          throw new AssertionError({
            message: message || `The error message did not match`,
            actual: errMsg,
            expected: expected.message,
            operator: "throws",
            stackStartFn: throws
          });
        }
      }
      if (expected.code !== undefined && err.code !== expected.code) {
        throw new AssertionError({
          message: message || `The error code did not match`,
          actual: err.code,
          expected: expected.code,
          operator: "throws",
          stackStartFn: throws
        });
      }
    }
  }
};
assert.doesNotThrow = function doesNotThrow(fn2, errorOrMessage, message) {
  try {
    fn2();
  } catch (err) {
    if (errorOrMessage === undefined || typeof errorOrMessage === "string") {
      throw new AssertionError({
        message: typeof errorOrMessage === "string" ? errorOrMessage : message || "Expected function not to throw",
        actual: err,
        expected: undefined,
        operator: "doesNotThrow",
        stackStartFn: doesNotThrow
      });
    }
    if (errorOrMessage instanceof RegExp) {
      const errMessage = err instanceof Error ? err.message : String(err);
      if (errorOrMessage.test(errMessage)) {
        throw new AssertionError({
          message: message || "Expected function not to throw matching error",
          actual: err,
          expected: errorOrMessage,
          operator: "doesNotThrow",
          stackStartFn: doesNotThrow
        });
      }
    } else if (typeof errorOrMessage === "function") {
      if (err instanceof errorOrMessage) {
        throw new AssertionError({
          message: message || "Expected function not to throw error of this type",
          actual: err,
          expected: errorOrMessage,
          operator: "doesNotThrow",
          stackStartFn: doesNotThrow
        });
      }
    }
  }
};
assert.rejects = async function rejects(asyncFn, errorOrMessage, message) {
  const promise = typeof asyncFn === "function" ? asyncFn() : asyncFn;
  let rejected = false;
  let rejectionReason;
  try {
    await promise;
  } catch (err) {
    rejected = true;
    rejectionReason = err;
  }
  if (!rejected) {
    throw new AssertionError({
      message: typeof errorOrMessage === "string" ? errorOrMessage : message || "Expected promise to reject",
      actual: undefined,
      expected: errorOrMessage,
      operator: "rejects",
      stackStartFn: rejects
    });
  }
  if (errorOrMessage !== undefined && typeof errorOrMessage !== "string") {
    if (errorOrMessage instanceof RegExp) {
      const errMessage = rejectionReason instanceof Error ? rejectionReason.message : String(rejectionReason);
      if (!errorOrMessage.test(errMessage)) {
        throw new AssertionError({
          message: message || "The rejection message did not match the regular expression",
          actual: rejectionReason,
          expected: errorOrMessage,
          operator: "rejects",
          stackStartFn: rejects
        });
      }
    } else if (typeof errorOrMessage === "function") {
      if (!(rejectionReason instanceof errorOrMessage)) {
        throw new AssertionError({
          message: message || "The rejection is not an instance of the expected type",
          actual: rejectionReason,
          expected: errorOrMessage,
          operator: "rejects",
          stackStartFn: rejects
        });
      }
    } else if (typeof errorOrMessage === "object") {
      const expected = errorOrMessage;
      const err = rejectionReason;
      if (expected.message !== undefined) {
        const errMsg = err.message || String(rejectionReason);
        if (expected.message instanceof RegExp) {
          if (!expected.message.test(errMsg)) {
            throw new AssertionError({
              message: message || "The rejection message did not match",
              actual: errMsg,
              expected: expected.message,
              operator: "rejects",
              stackStartFn: rejects
            });
          }
        } else if (errMsg !== expected.message) {
          throw new AssertionError({
            message: message || "The rejection message did not match",
            actual: errMsg,
            expected: expected.message,
            operator: "rejects",
            stackStartFn: rejects
          });
        }
      }
      if (expected.code !== undefined && err.code !== expected.code) {
        throw new AssertionError({
          message: message || "The rejection code did not match",
          actual: err.code,
          expected: expected.code,
          operator: "rejects",
          stackStartFn: rejects
        });
      }
    }
  }
};
assert.doesNotReject = async function doesNotReject(asyncFn, errorOrMessage, message) {
  const promise = typeof asyncFn === "function" ? asyncFn() : asyncFn;
  try {
    await promise;
  } catch (err) {
    if (errorOrMessage === undefined || typeof errorOrMessage === "string") {
      throw new AssertionError({
        message: typeof errorOrMessage === "string" ? errorOrMessage : message || "Expected promise not to reject",
        actual: err,
        expected: undefined,
        operator: "doesNotReject",
        stackStartFn: doesNotReject
      });
    }
    if (errorOrMessage instanceof RegExp) {
      const errMessage = err instanceof Error ? err.message : String(err);
      if (errorOrMessage.test(errMessage)) {
        throw new AssertionError({
          message: message || "Expected promise not to reject with matching error",
          actual: err,
          expected: errorOrMessage,
          operator: "doesNotReject",
          stackStartFn: doesNotReject
        });
      }
    } else if (typeof errorOrMessage === "function") {
      if (err instanceof errorOrMessage) {
        throw new AssertionError({
          message: message || "Expected promise not to reject with error of this type",
          actual: err,
          expected: errorOrMessage,
          operator: "doesNotReject",
          stackStartFn: doesNotReject
        });
      }
    }
  }
};
assert.fail = function fail(messageOrActual, expected, message, operator) {
  if (arguments.length === 0 || arguments.length === 1) {
    throw new AssertionError({
      message: typeof messageOrActual === "string" ? messageOrActual : "Failed",
      stackStartFn: fail
    });
  }
  throw new AssertionError({
    message,
    actual: messageOrActual,
    expected,
    operator: operator || "fail",
    stackStartFn: fail
  });
};
assert.match = function match(string, regexp, message) {
  if (!regexp.test(string)) {
    if (message instanceof Error) {
      throw message;
    }
    throw new AssertionError({
      message: message || `The input did not match the regular expression`,
      actual: string,
      expected: regexp,
      operator: "match",
      stackStartFn: match
    });
  }
};
assert.doesNotMatch = function doesNotMatch(string, regexp, message) {
  if (regexp.test(string)) {
    if (message instanceof Error) {
      throw message;
    }
    throw new AssertionError({
      message: message || `The input was expected not to match the regular expression`,
      actual: string,
      expected: regexp,
      operator: "doesNotMatch",
      stackStartFn: doesNotMatch
    });
  }
};
assert.ifError = function ifError(value) {
  if (value !== null && value !== undefined) {
    if (value instanceof Error) {
      throw value;
    }
    throw new AssertionError({
      message: `ifError got unwanted exception: ${value}`,
      actual: value,
      expected: null,
      operator: "ifError",
      stackStartFn: ifError
    });
  }
};
assert.AssertionError = AssertionError;
assert.strict = assert;
var assert_default = assert;

// .cache/browser-demo/deps/node_modules/resolve.exports/dist/index.mjs
function e(e, n, r) {
  throw new Error(r ? `No known conditions for "${n}" specifier in "${e}" package` : `Missing "${n}" specifier in "${e}" package`);
}
function n(n, i, o, f) {
  let s, u, l = r(n, o), c = function(e) {
    let n = new Set(["default", ...e.conditions || []]);
    return e.unsafe || n.add(e.require ? "require" : "import"), e.unsafe || n.add(e.browser ? "browser" : "node"), n;
  }(f || {}), a = i[l];
  if (a === undefined) {
    let e, n, r, t;
    for (t in i)
      n && t.length < n.length || (t[t.length - 1] === "/" && l.startsWith(t) ? (u = l.substring(t.length), n = t) : t.length > 1 && (r = t.indexOf("*", 1), ~r && (e = RegExp("^" + t.substring(0, r) + "(.*)" + t.substring(1 + r) + "$").exec(l), e && e[1] && (u = e[1], n = t))));
    a = i[n];
  }
  return a || e(n, l), s = t(a, c), s || e(n, l, 1), u && function(e, n) {
    let r, t = 0, i = e.length, o = /[*]/g, f = /[/]$/;
    for (;t < i; t++)
      e[t] = o.test(r = e[t]) ? r.replace(o, () => n) : f.test(r) ? r + n : r;
  }(s, u), s;
}
function r(e, n, r) {
  if (e === n || n === ".")
    return ".";
  let t = e + "/", i = t.length, o = n.slice(0, i) === t, f = o ? n.slice(i) : n;
  return f[0] === "#" ? f : o || !r ? f.slice(0, 2) === "./" ? f : "./" + f : f;
}
function t(e, n, r) {
  if (e) {
    if (typeof e == "string")
      return r && r.add(e), [e];
    let i, o;
    if (Array.isArray(e)) {
      for (o = r || new Set, i = 0;i < e.length; i++)
        t(e[i], n, o);
      if (!r && o.size)
        return [...o];
    } else
      for (i in e)
        if (n.has(i))
          return t(e[i], n, r);
  }
}
function o(e, r, t) {
  let i, o = e.exports;
  if (o) {
    if (typeof o == "string")
      o = { ".": o };
    else
      for (i in o) {
        i[0] !== "." && (o = { ".": o });
        break;
      }
    return n(e.name, o, r || ".", t);
  }
}
function f(e, r, t) {
  if (e.imports)
    return n(e.name, e.imports, r, t);
}
function s(e, n, t) {
  return (n = r(e.name, n || "."))[0] === "#" ? f(e, n, t) : o(e, n, t);
}

// .cache/browser-demo/almost-src/frameworks/code-transforms.ts
var EXPLICIT_MAPPINGS = {
  react: `${REACT_CDN}?dev`,
  "react/jsx-runtime": `${REACT_CDN}&dev/jsx-runtime`,
  "react/jsx-dev-runtime": `${REACT_CDN}&dev/jsx-dev-runtime`,
  "react-dom": `${REACT_DOM_CDN}?dev`,
  "react-dom/client": `${REACT_DOM_CDN}/client?dev`
};
var LOCAL_PACKAGES = new Set([
  "next/link",
  "next/router",
  "next/head",
  "next/navigation",
  "next/dynamic",
  "next/image",
  "next/script",
  "next/font/google",
  "next/font/local"
]);
function transformEsmToCjsSimple(code2) {
  try {
    return transformEsmToCjsAst(code2);
  } catch {
    return transformEsmToCjsRegex(code2);
  }
}
function transformEsmToCjsAst(code2) {
  const ast = parse4(code2, { ecmaVersion: "latest", sourceType: "module" });
  const replacements = [];
  for (const node of ast.body) {
    if (node.type === "ImportDeclaration") {
      const source = node.source.value;
      const specs = node.specifiers;
      if (specs.length === 0) {
        replacements.push([node.start, node.end, `require(${JSON.stringify(source)})`]);
      } else {
        const defaultSpec = specs.find((s) => s.type === "ImportDefaultSpecifier");
        const nsSpec = specs.find((s) => s.type === "ImportNamespaceSpecifier");
        const namedSpecs = specs.filter((s) => s.type === "ImportSpecifier");
        const parts = [];
        if (defaultSpec) {
          parts.push(`const ${defaultSpec.local.name} = require(${JSON.stringify(source)})`);
        }
        if (nsSpec) {
          parts.push(`const ${nsSpec.local.name} = require(${JSON.stringify(source)})`);
        }
        if (namedSpecs.length > 0) {
          const bindings = namedSpecs.map((s) => {
            if (s.imported.name === s.local.name)
              return s.local.name;
            return `${s.imported.name}: ${s.local.name}`;
          }).join(", ");
          if (defaultSpec) {
            parts.push(`const { ${bindings} } = require(${JSON.stringify(source)})`);
          } else {
            parts.push(`const { ${bindings} } = require(${JSON.stringify(source)})`);
          }
        }
        replacements.push([node.start, node.end, parts.join(`;
`)]);
      }
    } else if (node.type === "ExportDefaultDeclaration") {
      const decl = node.declaration;
      if (decl.type === "FunctionDeclaration") {
        const funcCode = code2.slice(decl.start, node.end);
        replacements.push([node.start, node.end, `module.exports = ${funcCode}`]);
      } else if (decl.type === "ClassDeclaration") {
        const classCode = code2.slice(decl.start, node.end);
        replacements.push([node.start, node.end, `module.exports = ${classCode}`]);
      } else {
        const exprCode = code2.slice(decl.start, node.end);
        replacements.push([node.start, node.end, `module.exports = ${exprCode}`]);
      }
    } else if (node.type === "ExportNamedDeclaration") {
      if (node.declaration) {
        const decl = node.declaration;
        if (decl.type === "FunctionDeclaration") {
          const name = decl.id.name;
          const funcCode = code2.slice(decl.start, node.end);
          replacements.push([node.start, node.end, `exports.${name} = ${funcCode}`]);
        } else if (decl.type === "ClassDeclaration") {
          const name = decl.id.name;
          const classCode = code2.slice(decl.start, node.end);
          replacements.push([node.start, node.end, `exports.${name} = ${classCode}`]);
        } else if (decl.type === "VariableDeclaration") {
          const parts = [];
          for (const declarator of decl.declarations) {
            const name = declarator.id.name;
            const initCode = declarator.init ? code2.slice(declarator.init.start, declarator.init.end) : "undefined";
            parts.push(`exports.${name} = ${initCode}`);
          }
          replacements.push([node.start, node.end, parts.join(`;
`)]);
        }
      } else if (node.source) {
        const source = node.source.value;
        const parts = [];
        const tmpVar = `__reexport_${node.start}`;
        parts.push(`const ${tmpVar} = require(${JSON.stringify(source)})`);
        for (const spec of node.specifiers) {
          parts.push(`exports.${spec.exported.name} = ${tmpVar}.${spec.local.name}`);
        }
        replacements.push([node.start, node.end, parts.join(`;
`)]);
      } else {
        const parts = [];
        for (const spec of node.specifiers) {
          parts.push(`exports.${spec.exported.name} = ${spec.local.name}`);
        }
        replacements.push([node.start, node.end, parts.join(`;
`)]);
      }
    } else if (node.type === "ExportAllDeclaration") {
      const source = node.source.value;
      replacements.push([node.start, node.end, `Object.assign(exports, require(${JSON.stringify(source)}))`]);
    }
  }
  let result = code2;
  replacements.sort((a, b) => b[0] - a[0]);
  for (const [start, end, replacement] of replacements) {
    result = result.slice(0, start) + replacement + result.slice(end);
  }
  return result;
}
function transformEsmToCjsRegex(code2) {
  let transformed = code2;
  transformed = transformed.replace(/import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g, 'const $1 = require("$2")');
  transformed = transformed.replace(/import\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"]/g, 'const {$1} = require("$2")');
  transformed = transformed.replace(/export\s+default\s+function\s+(\w+)/g, "module.exports = function $1");
  transformed = transformed.replace(/export\s+default\s+function\s*\(/g, "module.exports = function(");
  transformed = transformed.replace(/export\s+default\s+/g, "module.exports = ");
  transformed = transformed.replace(/export\s+async\s+function\s+(\w+)/g, "exports.$1 = async function $1");
  transformed = transformed.replace(/export\s+function\s+(\w+)/g, "exports.$1 = function $1");
  transformed = transformed.replace(/export\s+const\s+(\w+)\s*=/g, "exports.$1 =");
  return transformed;
}

// .cache/browser-demo/almost-src/runtime.ts
function walkAst(node, callback) {
  if (!node || typeof node !== "object")
    return;
  if (typeof node.type === "string") {
    callback(node);
  }
  for (const key of Object.keys(node)) {
    if (key === "type" || key === "start" || key === "end" || key === "loc" || key === "range")
      continue;
    const child = node[key];
    if (child && typeof child === "object") {
      if (Array.isArray(child)) {
        for (const item of child) {
          if (item && typeof item === "object" && typeof item.type === "string") {
            walkAst(item, callback);
          }
        }
      } else if (typeof child.type === "string") {
        walkAst(child, callback);
      }
    }
  }
}
function transformDynamicImportsRegex(code2) {
  return code2.replace(/(?<![.$\w])import\s*\(/g, "__dynamicImport(");
}
function transformEsmToCjs(code2, filename2) {
  const maybeEsm = /\bimport\b|\bexport\b/.test(code2);
  if (!maybeEsm)
    return code2;
  try {
    return transformEsmToCjsAst2(code2, filename2);
  } catch {
    return transformEsmToCjsRegexFallback(code2, filename2);
  }
}
function transformEsmToCjsAst2(code2, filename2) {
  const ast = parse4(code2, { ecmaVersion: "latest", sourceType: "module" });
  const deepReplacements = [];
  walkAst(ast, (node) => {
    if (node.type === "MetaProperty" && node.meta?.name === "import" && node.property?.name === "meta") {
      deepReplacements.push([node.start, node.end, "import_meta"]);
    }
    if (node.type === "ImportExpression") {
      deepReplacements.push([node.start, node.start + 6, "__dynamicImport"]);
    }
  });
  const hasImportDecl = ast.body.some((n) => n.type === "ImportDeclaration");
  const hasExportDecl = ast.body.some((n) => n.type?.startsWith("Export"));
  let transformed = code2;
  deepReplacements.sort((a, b) => b[0] - a[0]);
  for (const [start, end, replacement] of deepReplacements) {
    transformed = transformed.slice(0, start) + replacement + transformed.slice(end);
  }
  if (hasImportDecl || hasExportDecl) {
    transformed = transformEsmToCjsSimple(transformed);
    if (hasExportDecl) {
      transformed = `Object.defineProperty(exports, "__esModule", { value: true });
` + transformed;
    }
  }
  return transformed;
}
function transformEsmToCjsRegexFallback(code2, filename2) {
  let transformed = code2;
  transformed = transformed.replace(/\bimport\.meta\.url\b/g, `"file://${filename2}"`);
  transformed = transformed.replace(/\bimport\.meta\.dirname\b/g, `"${dirname2(filename2)}"`);
  transformed = transformed.replace(/\bimport\.meta\.filename\b/g, `"${filename2}"`);
  transformed = transformed.replace(/\bimport\.meta\b/g, `({ url: "file://${filename2}", dirname: "${dirname2(filename2)}", filename: "${filename2}" })`);
  transformed = transformDynamicImportsRegex(transformed);
  const hasImport = /\bimport\s+[\w{*'"]/m.test(code2);
  const hasExport = /\bexport\s+(?:default|const|let|var|function|class|{|\*)/m.test(code2);
  if (hasImport || hasExport) {
    transformed = transformEsmToCjsSimple(transformed);
    if (hasExport) {
      transformed = `Object.defineProperty(exports, "__esModule", { value: true });
` + transformed;
    }
  }
  return transformed;
}
function createDynamicImport(moduleRequire2) {
  return async (specifier) => {
    try {
      const mod = moduleRequire2(specifier);
      if (mod && typeof mod === "object" && (("default" in mod) || ("__esModule" in mod))) {
        return mod;
      }
      return {
        default: mod,
        ...mod && typeof mod === "object" ? mod : {}
      };
    } catch (error) {
      throw error;
    }
  };
}
function createStringDecoderModule() {

  class StringDecoder {
    encoding;
    constructor(encoding) {
      this.encoding = encoding || "utf8";
    }
    write(buffer) {
      return new TextDecoder(this.encoding).decode(buffer);
    }
    end(buffer) {
      if (buffer)
        return this.write(buffer);
      return "";
    }
  }
  return { StringDecoder };
}
function createTimersModule() {
  return {
    setTimeout: globalThis.setTimeout,
    setInterval: globalThis.setInterval,
    setImmediate: (fn2) => setTimeout(fn2, 0),
    clearTimeout: globalThis.clearTimeout,
    clearInterval: globalThis.clearInterval,
    clearImmediate: globalThis.clearTimeout
  };
}
var prettierShim = {
  format: (source, _options2) => Promise.resolve(source),
  formatWithCursor: (source, _options2) => Promise.resolve({ formatted: source, cursorOffset: 0 }),
  check: (_source, _options2) => Promise.resolve(true),
  resolveConfig: () => Promise.resolve(null),
  resolveConfigFile: () => Promise.resolve(null),
  clearConfigCache: () => {},
  getFileInfo: () => Promise.resolve({ ignored: false, inferredParser: null }),
  getSupportInfo: () => Promise.resolve({ languages: [], options: [] }),
  version: "3.0.0",
  doc: {
    builders: {},
    printer: {},
    utils: {}
  }
};
function makeMutable(mod) {
  const mutable = {};
  for (const key of Object.keys(mod)) {
    mutable[key] = mod[key];
  }
  return mutable;
}
var builtinModules2 = {
  path: exports_path,
  http: makeMutable(exports_http),
  https: makeMutable(exports_https),
  net: exports_net,
  events: events_default,
  stream: stream_default,
  buffer: buffer_default,
  url: exports_url,
  querystring: exports_querystring,
  util: exports_util,
  tty: exports_tty,
  os: exports_os,
  crypto: exports_crypto,
  zlib: exports_zlib,
  dns: exports_dns,
  child_process: exports_child_process_browser,
  assert: assert_default,
  string_decoder: createStringDecoderModule(),
  timers: createTimersModule(),
  _http_common: {},
  _http_incoming: {},
  _http_outgoing: {},
  chokidar: exports_chokidar,
  ws: exports_ws,
  fsevents: exports_fsevents,
  readdirp: exports_readdirp,
  module: exports_module,
  perf_hooks: exports_perf_hooks,
  worker_threads: exports_worker_threads,
  esbuild: exports_esbuild,
  rollup: exports_rollup,
  v8: exports_v8,
  readline: exports_readline,
  tls: exports_tls,
  http2: exports_http2,
  cluster: exports_cluster,
  dgram: exports_dgram,
  vm: exports_vm,
  inspector: exports_inspector,
  "inspector/promises": exports_inspector,
  async_hooks: exports_async_hooks,
  domain: exports_domain,
  diagnostics_channel: exports_diagnostics_channel,
  prettier: prettierShim,
  console: {
    ...console,
    Console: class Console {
      _stdout;
      _stderr;
      constructor(options2) {
        const opts = options2;
        if (opts && typeof opts === "object" && "write" in opts) {
          this._stdout = opts;
          this._stderr = arguments[1] || this._stdout;
        } else if (opts && typeof opts === "object" && "stdout" in opts) {
          this._stdout = opts.stdout || null;
          this._stderr = opts.stderr || this._stdout;
        } else {
          this._stdout = null;
          this._stderr = null;
        }
      }
      _write(stream, args) {
        const msg = args.map((a) => typeof a === "string" ? a : JSON.stringify(a)).join(" ") + `
`;
        const target = stream === "err" ? this._stderr : this._stdout;
        if (target)
          target.write(msg);
        else if (stream === "err")
          console.error(...args);
        else
          console.log(...args);
      }
      log(...args) {
        this._write("out", args);
      }
      error(...args) {
        this._write("err", args);
      }
      warn(...args) {
        this._write("err", args);
      }
      info(...args) {
        this._write("out", args);
      }
      debug(...args) {
        this._write("out", args);
      }
      trace(...args) {
        this._write("err", args);
      }
      dir(obj) {
        this._write("out", [obj]);
      }
      time(_label) {}
      timeEnd(_label) {}
      timeLog(_label) {}
      assert(value, ...args) {
        if (!value)
          this._write("err", ["Assertion failed:", ...args]);
      }
      clear() {}
      count(_label) {}
      countReset(_label) {}
      group(..._args) {}
      groupCollapsed(..._args) {}
      groupEnd() {}
      table(data) {
        this._write("out", [data]);
      }
    }
  },
  "util/types": types,
  "path/posix": exports_path,
  "path/win32": win32,
  "timers/promises": {
    setTimeout: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
    setInterval: globalThis.setInterval,
    setImmediate: (value) => new Promise((resolve) => setTimeout(() => resolve(value), 0)),
    scheduler: { wait: (ms) => new Promise((resolve) => setTimeout(resolve, ms)) }
  }
};
function createRequire2(vfs, fsShim, process, currentDir, moduleCache, options, processedCodeCache) {
  const resolutionCache = new Map;
  const packageJsonCache = new Map;
  const getParsedPackageJson = (pkgPath) => {
    if (packageJsonCache.has(pkgPath)) {
      return packageJsonCache.get(pkgPath);
    }
    try {
      const content = vfs.readFileSync(pkgPath, "utf8");
      const parsed = JSON.parse(content);
      packageJsonCache.set(pkgPath, parsed);
      return parsed;
    } catch {
      packageJsonCache.set(pkgPath, null);
      return null;
    }
  };
  const resolveModule = (id, fromDir) => {
    if (id.startsWith("node:")) {
      id = id.slice(5);
    }
    if (builtinModules2[id] || id === "fs" || id === "process" || id === "url" || id === "querystring" || id === "util") {
      return id;
    }
    if (id.startsWith("#")) {
      let searchDir = fromDir;
      while (searchDir !== "/") {
        const pkgPath = join(searchDir, "package.json");
        const pkg = getParsedPackageJson(pkgPath);
        if (pkg?.imports) {
          try {
            const resolved = f(pkg, id, { require: true });
            if (resolved && resolved.length > 0) {
              const fullPath = join(searchDir, resolved[0]);
              if (vfs.existsSync(fullPath))
                return fullPath;
            }
          } catch {}
        }
        searchDir = dirname2(searchDir);
      }
      throw new Error(`Cannot find module '${id}'`);
    }
    const cacheKey = `${fromDir}|${id}`;
    const cached = resolutionCache.get(cacheKey);
    if (cached !== undefined) {
      if (cached === null) {
        throw new Error(`Cannot find module '${id}'`);
      }
      return cached;
    }
    if (id.startsWith("./") || id.startsWith("../") || id.startsWith("/")) {
      const resolved = id.startsWith("/") ? id : resolve(fromDir, id);
      if (vfs.existsSync(resolved)) {
        const stats = vfs.statSync(resolved);
        if (stats.isFile()) {
          resolutionCache.set(cacheKey, resolved);
          return resolved;
        }
        const indexPath = join(resolved, "index.js");
        if (vfs.existsSync(indexPath)) {
          resolutionCache.set(cacheKey, indexPath);
          return indexPath;
        }
      }
      const extensions = [".js", ".json"];
      for (const ext of extensions) {
        const withExt = resolved + ext;
        if (vfs.existsSync(withExt)) {
          resolutionCache.set(cacheKey, withExt);
          return withExt;
        }
      }
      resolutionCache.set(cacheKey, null);
      throw new Error(`Cannot find module '${id}' from '${fromDir}'`);
    }
    const tryResolveFile = (basePath) => {
      if (vfs.existsSync(basePath)) {
        const stats = vfs.statSync(basePath);
        if (stats.isFile()) {
          return basePath;
        }
        const indexPath = join(basePath, "index.js");
        if (vfs.existsSync(indexPath)) {
          return indexPath;
        }
      }
      const extensions = [".js", ".json", ".node"];
      for (const ext of extensions) {
        const withExt = basePath + ext;
        if (vfs.existsSync(withExt)) {
          return withExt;
        }
      }
      return null;
    };
    const applyBrowserFieldRemap = (resolvedPath2, pkg, pkgRoot) => {
      if (!pkg.browser || typeof pkg.browser !== "object")
        return resolvedPath2;
      const browserMap = pkg.browser;
      const relPath = "./" + relative(pkgRoot, resolvedPath2);
      const relPathNoExt = relPath.replace(/\.(js|json|cjs|mjs)$/, "");
      for (const key of [relPath, relPathNoExt]) {
        if (key in browserMap) {
          if (browserMap[key] === false)
            return null;
          return tryResolveFile(join(pkgRoot, browserMap[key]));
        }
      }
      return resolvedPath2;
    };
    const tryResolveFromNodeModules = (nodeModulesDir, moduleId) => {
      const parts = moduleId.split("/");
      const pkgName = parts[0].startsWith("@") && parts.length > 1 ? `${parts[0]}/${parts[1]}` : parts[0];
      const pkgRoot = join(nodeModulesDir, pkgName);
      const pkgPath = join(pkgRoot, "package.json");
      const pkg = getParsedPackageJson(pkgPath);
      if (pkg) {
        if (pkg.exports) {
          for (const conditions of [{ require: true }, { import: true }]) {
            try {
              const resolved = s(pkg, moduleId, conditions);
              if (resolved && resolved.length > 0) {
                const exportPath = resolved[0];
                const fullExportPath = join(pkgRoot, exportPath);
                const resolvedFile = tryResolveFile(fullExportPath);
                if (resolvedFile) {
                  if (resolvedFile.endsWith(".cjs")) {
                    try {
                      const content = vfs.readFileSync(resolvedFile, "utf8");
                      if (content.trimStart().startsWith("throw ")) {
                        continue;
                      }
                    } catch {}
                  }
                  return resolvedFile;
                }
              }
            } catch {}
          }
        }
        if (pkgName === moduleId) {
          let main;
          if (typeof pkg.browser === "string") {
            main = pkg.browser;
          }
          if (!main && pkg.module) {
            main = pkg.module;
          }
          if (!main) {
            main = pkg.main || "index.js";
          }
          const mainPath = join(pkgRoot, main);
          const resolvedMain = tryResolveFile(mainPath);
          if (resolvedMain)
            return resolvedMain;
        }
      }
      const fullPath = join(nodeModulesDir, moduleId);
      const resolved = tryResolveFile(fullPath);
      if (resolved)
        return resolved;
      return null;
    };
    let searchDir = fromDir;
    while (searchDir !== "/") {
      const nodeModulesDir = join(searchDir, "node_modules");
      const resolved = tryResolveFromNodeModules(nodeModulesDir, id);
      if (resolved) {
        resolutionCache.set(cacheKey, resolved);
        return resolved;
      }
      searchDir = dirname2(searchDir);
    }
    const rootResolved = tryResolveFromNodeModules("/node_modules", id);
    if (rootResolved) {
      resolutionCache.set(cacheKey, rootResolved);
      return rootResolved;
    }
    resolutionCache.set(cacheKey, null);
    throw new Error(`Cannot find module '${id}'`);
  };
  const loadModule = (resolvedPath) => {
    if (moduleCache[resolvedPath]) {
      return moduleCache[resolvedPath];
    }
    const module = {
      id: resolvedPath,
      filename: resolvedPath,
      exports: {},
      loaded: false,
      children: [],
      paths: []
    };
    moduleCache[resolvedPath] = module;
    const cacheKeys = Object.keys(moduleCache);
    if (cacheKeys.length > 2000) {
      delete moduleCache[cacheKeys[0]];
    }
    if (resolvedPath.endsWith(".json")) {
      const content = vfs.readFileSync(resolvedPath, "utf8");
      module.exports = JSON.parse(content);
      module.loaded = true;
      return module;
    }
    const rawCode = vfs.readFileSync(resolvedPath, "utf8");
    const dirname = dirname2(resolvedPath);
    const codeCacheKey = `${resolvedPath}|${simpleHash(rawCode)}`;
    let code = processedCodeCache?.get(codeCacheKey);
    if (!code) {
      code = rawCode;
      if (code.startsWith("#!")) {
        code = code.slice(code.indexOf(`
`) + 1);
      }
      if (!resolvedPath.endsWith(".cjs")) {
        code = transformEsmToCjs(code, resolvedPath);
      }
      processedCodeCache?.set(codeCacheKey, code);
    }
    const moduleRequire = createRequire2(vfs, fsShim, process, dirname, moduleCache, options, processedCodeCache);
    moduleRequire.cache = moduleCache;
    const consoleWrapper = createConsoleWrapper(options.onConsole);
    try {
      const importMetaUrl = "file://" + resolvedPath;
      const wrappedCode = `(function($exports, $require, $module, $filename, $dirname, $process, $console, $importMeta, $dynamicImport) {
var exports = $exports;
var require = $require;
var module = $module;
var __filename = $filename;
var __dirname = $dirname;
var process = $process;
var console = $console;
var import_meta = $importMeta;
var __dynamicImport = $dynamicImport;
// Set up global.process and globalThis.process for code that accesses them directly
var global = globalThis;
globalThis.process = $process;
global.process = $process;
return (function() {
${code}
}).call(this);
})`;
      let fn;
      try {
        fn = eval(wrappedCode);
      } catch (evalError) {
        const msg = evalError instanceof Error ? evalError.message : String(evalError);
        throw new SyntaxError(`${msg} (in ${resolvedPath})`);
      }
      const dynamicImport = createDynamicImport(moduleRequire);
      fn(module.exports, moduleRequire, module, resolvedPath, dirname, process, consoleWrapper, { url: importMetaUrl, dirname, filename: resolvedPath }, dynamicImport);
      module.loaded = true;
    } catch (error) {
      delete moduleCache[resolvedPath];
      if (error instanceof Error && !error.message.includes("(in /")) {
        error.message = `${error.message} (in ${resolvedPath})`;
      }
      throw error;
    }
    return module;
  };
  const require = (id) => {
    if (id.startsWith("node:")) {
      id = id.slice(5);
    }
    if (id === "fs") {
      return fsShim;
    }
    if (id === "fs/promises") {
      return fsShim.promises;
    }
    if (id === "process") {
      return process;
    }
    if (id === "module") {
      return {
        ...exports_module,
        createRequire: (filenameOrUrl) => {
          let fromPath = filenameOrUrl;
          if (filenameOrUrl.startsWith("file://")) {
            fromPath = filenameOrUrl.slice(7);
            if (fromPath.startsWith("/") && fromPath[2] === ":") {
              fromPath = fromPath.slice(1);
            }
          }
          const fromDir = dirname2(fromPath);
          const newRequire = createRequire2(vfs, fsShim, process, fromDir, moduleCache, options);
          newRequire.cache = moduleCache;
          return newRequire;
        }
      };
    }
    if (builtinModules2[id]) {
      return builtinModules2[id];
    }
    if (id === "rollup" || id.startsWith("rollup/") || id.startsWith("@rollup/")) {
      console.log("[runtime] Intercepted rollup:", id);
      return builtinModules2["rollup"];
    }
    if (id === "esbuild" || id.startsWith("esbuild/") || id.startsWith("@esbuild/")) {
      console.log("[runtime] Intercepted esbuild:", id);
      return builtinModules2["esbuild"];
    }
    if (id === "prettier" || id.startsWith("prettier/")) {
      return builtinModules2["prettier"];
    }
    const resolved = resolveModule(id, currentDir);
    if (builtinModules2[resolved]) {
      return builtinModules2[resolved];
    }
    if (resolved.includes("/node_modules/rollup/") || resolved.includes("/node_modules/@rollup/")) {
      return builtinModules2["rollup"];
    }
    if (resolved.includes("/node_modules/esbuild/") || resolved.includes("/node_modules/@esbuild/")) {
      return builtinModules2["esbuild"];
    }
    if (resolved.includes("/node_modules/prettier/")) {
      return builtinModules2["prettier"];
    }
    return loadModule(resolved).exports;
  };
  require.resolve = (id) => {
    if (id === "fs" || id === "process" || builtinModules2[id]) {
      return id;
    }
    return resolveModule(id, currentDir);
  };
  require.cache = moduleCache;
  return require;
}
function createConsoleWrapper(onConsole) {
  const wrapper = {
    log: (...args) => {
      console.log(...args);
      onConsole?.("log", args);
    },
    error: (...args) => {
      console.error(...args);
      onConsole?.("error", args);
    },
    warn: (...args) => {
      console.warn(...args);
      onConsole?.("warn", args);
    },
    info: (...args) => {
      console.info(...args);
      onConsole?.("info", args);
    },
    debug: (...args) => {
      console.debug(...args);
      onConsole?.("debug", args);
    },
    trace: (...args) => {
      console.trace(...args);
      onConsole?.("trace", args);
    },
    dir: (obj) => {
      console.dir(obj);
      onConsole?.("dir", [obj]);
    },
    time: console.time.bind(console),
    timeEnd: console.timeEnd.bind(console),
    timeLog: console.timeLog.bind(console),
    assert: console.assert.bind(console),
    clear: console.clear.bind(console),
    count: console.count.bind(console),
    countReset: console.countReset.bind(console),
    group: console.group.bind(console),
    groupCollapsed: console.groupCollapsed.bind(console),
    groupEnd: console.groupEnd.bind(console),
    table: console.table.bind(console)
  };
  return wrapper;
}

class Runtime {
  vfs;
  fsShim;
  process;
  moduleCache = {};
  options;
  processedCodeCache = new Map;
  constructor(vfs2, options2 = {}) {
    this.vfs = vfs2;
    this.process = createProcess({
      cwd: options2.cwd || "/",
      env: options2.env,
      onStdout: options2.onStdout,
      onStderr: options2.onStderr
    });
    this.fsShim = createFsShim(vfs2, () => this.process.cwd());
    this.options = options2;
    initChildProcess(vfs2);
    setVFS(vfs2);
    setVFS2(vfs2);
    setVFS3(vfs2);
    if (typeof globalThis.setImmediate === "undefined") {
      globalThis.setImmediate = (fn2, ...args) => setTimeout(fn2, 0, ...args);
      globalThis.clearImmediate = (id) => clearTimeout(id);
    }
    if (!globalThis.setTimeout.__patched) {
      const origSetTimeout = globalThis.setTimeout.bind(globalThis);
      const origSetInterval = globalThis.setInterval.bind(globalThis);
      const origClearTimeout = globalThis.clearTimeout.bind(globalThis);
      const origClearInterval = globalThis.clearInterval.bind(globalThis);
      const wrapTimer = (id) => {
        const t = { _id: id, ref() {
          return t;
        }, unref() {
          return t;
        }, hasRef() {
          return true;
        }, refresh() {
          return t;
        }, [Symbol.toPrimitive]() {
          return id;
        } };
        return t;
      };
      globalThis.setTimeout = Object.assign((...args) => wrapTimer(origSetTimeout(...args)), { __patched: true });
      globalThis.setInterval = Object.assign((...args) => wrapTimer(origSetInterval(...args)), { __patched: true });
      globalThis.clearTimeout = (t) => origClearTimeout(t?._id ?? t);
      globalThis.clearInterval = (t) => origClearInterval(t?._id ?? t);
    }
    this.setupStackTracePolyfill();
    this.setupTextDecoderPolyfill();
  }
  setupTextDecoderPolyfill() {
    const OriginalTextDecoder = globalThis.TextDecoder;

    class PolyfillTextDecoder {
      encoding;
      decoder = null;
      constructor(encoding = "utf-8", options2) {
        this.encoding = encoding.toLowerCase();
        const validTextEncodings = [
          "utf-8",
          "utf8",
          "utf-16le",
          "utf-16be",
          "utf-16",
          "ascii",
          "iso-8859-1",
          "latin1",
          "windows-1252"
        ];
        if (validTextEncodings.includes(this.encoding)) {
          try {
            this.decoder = new OriginalTextDecoder(encoding, options2);
          } catch {
            this.decoder = new OriginalTextDecoder("utf-8", options2);
          }
        }
      }
      decode(input, options2) {
        if (this.decoder) {
          return this.decoder.decode(input, options2);
        }
        if (!input)
          return "";
        const bytes = input instanceof ArrayBuffer ? new Uint8Array(input) : new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
        if (this.encoding === "base64") {
          return uint8ToBase64(bytes);
        }
        if (this.encoding === "base64url") {
          return uint8ToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        }
        if (this.encoding === "hex") {
          return uint8ToHex(bytes);
        }
        return new OriginalTextDecoder("utf-8").decode(input, options2);
      }
      get fatal() {
        return this.decoder?.fatal ?? false;
      }
      get ignoreBOM() {
        return this.decoder?.ignoreBOM ?? false;
      }
    }
    globalThis.TextDecoder = PolyfillTextDecoder;
  }
  setupStackTracePolyfill() {
    if (typeof Error.captureStackTrace === "function")
      return;
    if (Error.stackTraceLimit === undefined) {
      Error.stackTraceLimit = 10;
    }
    function parseStack(stack) {
      if (!stack)
        return [];
      const frames = [];
      const lines = stack.split(`
`);
      for (const raw of lines) {
        const line = raw.trim();
        if (!line || line.startsWith("Error") || line.startsWith("TypeError"))
          continue;
        let fn2 = "", file = "", lineNo = 0, colNo = 0;
        const safariMatch = line.match(/^(.*)@(.*?):(\d+):(\d+)$/);
        if (safariMatch) {
          fn2 = safariMatch[1] || "";
          file = safariMatch[2];
          lineNo = parseInt(safariMatch[3], 10);
          colNo = parseInt(safariMatch[4], 10);
          frames.push({ fn: fn2, file, line: lineNo, col: colNo });
          continue;
        }
        const chromeMatch = line.match(/^at\s+(?:(.+?)\s+\()?(.*?):(\d+):(\d+)\)?$/);
        if (chromeMatch) {
          fn2 = chromeMatch[1] || "";
          file = chromeMatch[2];
          lineNo = parseInt(chromeMatch[3], 10);
          colNo = parseInt(chromeMatch[4], 10);
          frames.push({ fn: fn2, file, line: lineNo, col: colNo });
          continue;
        }
      }
      return frames;
    }
    function createCallSite(frame) {
      return {
        getFileName: () => frame.file || null,
        getLineNumber: () => frame.line || null,
        getColumnNumber: () => frame.col || null,
        getFunctionName: () => frame.fn || null,
        getMethodName: () => frame.fn || null,
        getTypeName: () => null,
        getThis: () => {
          return;
        },
        getFunction: () => {
          return;
        },
        getEvalOrigin: () => {
          return;
        },
        isNative: () => false,
        isConstructor: () => false,
        isToplevel: () => !frame.fn,
        isEval: () => false,
        toString: () => frame.fn ? `${frame.fn} (${frame.file}:${frame.line}:${frame.col})` : `${frame.file}:${frame.line}:${frame.col}`
      };
    }
    function buildCallSites(stack, constructorOpt) {
      const frames = parseStack(stack);
      let startIdx = 0;
      if (constructorOpt && constructorOpt.name) {
        for (let i = 0;i < frames.length; i++) {
          if (frames[i].fn === constructorOpt.name) {
            startIdx = i + 1;
            break;
          }
        }
      }
      return frames.slice(startIdx).map(createCallSite);
    }
    const stackSymbol = Symbol("rawStack");
    Object.defineProperty(Error.prototype, "stack", {
      get() {
        const rawStack = this[stackSymbol];
        if (rawStack !== undefined && typeof Error.prepareStackTrace === "function") {
          const callSites = buildCallSites(rawStack);
          try {
            return Error.prepareStackTrace(this, callSites);
          } catch {
            return rawStack;
          }
        }
        return rawStack;
      },
      set(value) {
        this[stackSymbol] = value;
      },
      configurable: true,
      enumerable: false
    });
    Error.captureStackTrace = function(target, constructorOpt) {
      const savedPrepare = Error.prepareStackTrace;
      Error.prepareStackTrace = undefined;
      const err = new Error;
      const rawStack = err.stack || "";
      Error.prepareStackTrace = savedPrepare;
      if (typeof savedPrepare === "function") {
        const callSites = buildCallSites(rawStack, constructorOpt);
        try {
          target.stack = savedPrepare(target, callSites);
        } catch (e) {
          console.warn("[almostnode] Error.prepareStackTrace threw:", e);
          target.stack = rawStack;
        }
      } else {
        target.stack = rawStack;
      }
    };
  }
  execute(code, filename = "/index.js") {
    const dirname = dirname2(filename);
    this.vfs.writeFileSync(filename, code);
    const require = createRequire2(this.vfs, this.fsShim, this.process, dirname, this.moduleCache, this.options, this.processedCodeCache);
    const module = {
      id: filename,
      filename,
      exports: {},
      loaded: false,
      children: [],
      paths: []
    };
    this.moduleCache[filename] = module;
    const consoleWrapper = createConsoleWrapper(this.options.onConsole);
    if (code.startsWith("#!")) {
      code = code.slice(code.indexOf(`
`) + 1);
    }
    if (!filename.endsWith(".cjs")) {
      code = transformEsmToCjs(code, filename);
    }
    try {
      const importMetaUrl = "file://" + filename;
      const wrappedCode = `(function($exports, $require, $module, $filename, $dirname, $process, $console, $importMeta, $dynamicImport) {
var exports = $exports;
var require = $require;
var module = $module;
var __filename = $filename;
var __dirname = $dirname;
var process = $process;
var console = $console;
var import_meta = $importMeta;
var __dynamicImport = $dynamicImport;
// Set up global.process and globalThis.process for code that accesses them directly
var global = globalThis;
globalThis.process = $process;
global.process = $process;

return (function() {
${code}
}).call(this);
})`;
      const dynamicImport = createDynamicImport(require);
      const fn = eval(wrappedCode);
      fn(module.exports, require, module, filename, dirname, this.process, consoleWrapper, { url: importMetaUrl, dirname, filename }, dynamicImport);
      module.loaded = true;
    } catch (error) {
      delete this.moduleCache[filename];
      throw error;
    }
    return { exports: module.exports, module };
  }
  executeSync = this.execute;
  async executeAsync(code2, filename2 = "/index.js") {
    return Promise.resolve(this.execute(code2, filename2));
  }
  runFile(filename2) {
    const code2 = this.vfs.readFileSync(filename2, "utf8");
    return this.execute(code2, filename2);
  }
  runFileSync = this.runFile;
  async runFileAsync(filename2) {
    return Promise.resolve(this.runFile(filename2));
  }
  clearCache() {
    for (const key of Object.keys(this.moduleCache)) {
      delete this.moduleCache[key];
    }
  }
  getVFS() {
    return this.vfs;
  }
  getProcess() {
    return this.process;
  }
  createREPL() {
    const require2 = createRequire2(this.vfs, this.fsShim, this.process, "/", this.moduleCache, this.options, this.processedCodeCache);
    const consoleWrapper2 = createConsoleWrapper(this.options.onConsole);
    const process2 = this.process;
    const buffer = buffer_default.Buffer;
    const GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
    const replGen = new GeneratorFunction("require", "console", "process", "Buffer", `var __code, __result;
while (true) {
  __code = yield;
  try {
    __result = eval(__code);
    yield { value: __result, error: null };
  } catch (e) {
    yield { value: undefined, error: e };
  }
}`)(require2, consoleWrapper2, process2, buffer);
    replGen.next();
    return {
      eval(code2) {
        const transformed = code2.replace(/^\s*(const|let)\s+/gm, "var ");
        const exprResult = replGen.next("(" + transformed + ")").value;
        if (!exprResult.error) {
          replGen.next();
          return exprResult.value;
        }
        replGen.next();
        const stmtResult = replGen.next(transformed).value;
        if (stmtResult.error) {
          replGen.next();
          throw stmtResult.error;
        }
        replGen.next();
        return stmtResult.value;
      }
    };
  }
}
function execute(code2, vfs2, options2) {
  const runtime = new Runtime(vfs2, options2);
  return runtime.execute(code2);
}
var runtime_default = Runtime;
export {
  Runtime,
  VirtualFS
};

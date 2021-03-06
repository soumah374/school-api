/**
 * N99 API
 * An API to do awesome things
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { CreateOptionHasSessionDto } from '../model/createOptionHasSessionDto';
// @ts-ignore
import { UpdateOptionHasSessionDto } from '../model/updateOptionHasSessionDto';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class OptionHasSessionService {

    protected basePath = 'http://localhost:3000';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * @param id Should be an id of a post that exists in the database
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteOptionHasSessionRemove(id: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined,}): Observable<any>;
    public deleteOptionHasSessionRemove(id: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined,}): Observable<HttpResponse<any>>;
    public deleteOptionHasSessionRemove(id: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined,}): Observable<HttpEvent<any>>;
    public deleteOptionHasSessionRemove(id: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined,}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteOptionHasSessionRemove.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (JWT-auth) required
        localVarCredential = this.configuration.lookupCredential('JWT-auth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.delete<any>(`${this.configuration.basePath}/option-has-session/${encodeURIComponent(String(id))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOptionHasSessionFindAll(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined,}): Observable<any>;
    public getOptionHasSessionFindAll(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined,}): Observable<HttpResponse<any>>;
    public getOptionHasSessionFindAll(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined,}): Observable<HttpEvent<any>>;
    public getOptionHasSessionFindAll(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined,}): Observable<any> {

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (JWT-auth) required
        localVarCredential = this.configuration.lookupCredential('JWT-auth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.get<any>(`${this.configuration.basePath}/option-has-session`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id Should be an id of a post that exists in the database
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOptionHasSessionFindOne(id: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined,}): Observable<any>;
    public getOptionHasSessionFindOne(id: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined,}): Observable<HttpResponse<any>>;
    public getOptionHasSessionFindOne(id: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined,}): Observable<HttpEvent<any>>;
    public getOptionHasSessionFindOne(id: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined,}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getOptionHasSessionFindOne.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (JWT-auth) required
        localVarCredential = this.configuration.lookupCredential('JWT-auth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.get<any>(`${this.configuration.basePath}/option-has-session/${encodeURIComponent(String(id))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param createOptionHasSessionDto 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postOptionHasSessionCreate(createOptionHasSessionDto: CreateOptionHasSessionDto, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined,}): Observable<any>;
    public postOptionHasSessionCreate(createOptionHasSessionDto: CreateOptionHasSessionDto, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined,}): Observable<HttpResponse<any>>;
    public postOptionHasSessionCreate(createOptionHasSessionDto: CreateOptionHasSessionDto, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined,}): Observable<HttpEvent<any>>;
    public postOptionHasSessionCreate(createOptionHasSessionDto: CreateOptionHasSessionDto, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined,}): Observable<any> {
        if (createOptionHasSessionDto === null || createOptionHasSessionDto === undefined) {
            throw new Error('Required parameter createOptionHasSessionDto was null or undefined when calling postOptionHasSessionCreate.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (JWT-auth) required
        localVarCredential = this.configuration.lookupCredential('JWT-auth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/option-has-session`,
            createOptionHasSessionDto,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id Should be an id of a post that exists in the database
     * @param updateOptionHasSessionDto 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putOptionHasSessionUpdate(id: string, updateOptionHasSessionDto: UpdateOptionHasSessionDto, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined,}): Observable<any>;
    public putOptionHasSessionUpdate(id: string, updateOptionHasSessionDto: UpdateOptionHasSessionDto, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined,}): Observable<HttpResponse<any>>;
    public putOptionHasSessionUpdate(id: string, updateOptionHasSessionDto: UpdateOptionHasSessionDto, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined,}): Observable<HttpEvent<any>>;
    public putOptionHasSessionUpdate(id: string, updateOptionHasSessionDto: UpdateOptionHasSessionDto, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined,}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling putOptionHasSessionUpdate.');
        }
        if (updateOptionHasSessionDto === null || updateOptionHasSessionDto === undefined) {
            throw new Error('Required parameter updateOptionHasSessionDto was null or undefined when calling putOptionHasSessionUpdate.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (JWT-auth) required
        localVarCredential = this.configuration.lookupCredential('JWT-auth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.patch<any>(`${this.configuration.basePath}/option-has-session/${encodeURIComponent(String(id))}`,
            updateOptionHasSessionDto,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
